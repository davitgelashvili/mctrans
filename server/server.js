const express = require('express');
const mainrRouter = require('./router.js')
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const cors = require("cors");
require("dotenv").config();
const os = require('os')

const PORT = process.env.PORT || 5001;

// დამატებული პროდუქციის დომენი
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5001',
    '198.177.120.132'
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.get('/api/ip', (req, res) => {
    const interfaces = os.networkInterfaces()
    let serverIp = 'unknown'

    for (let iface of Object.values(interfaces)) {
        for (let config of iface) {
            if (config.family === 'IPv4' && !config.internal) {
                serverIp = config.address
                break
            }
        }
        if (serverIp !== 'unknown') break
    }

    res.json({ ip: serverIp })
})

app.use("/api", mainrRouter);

// React-ის ბილდის ფაილების სერვინგი
app.use(express.static(path.join(__dirname, '../client/build')));

// ყველა სხვა route -> index.html (SPA-ის მხარდაჭერა)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`სერვერი აჭრილია პორტზე ${PORT}`);
});

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
