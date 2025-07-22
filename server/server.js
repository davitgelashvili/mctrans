const express = require('express');
const mainrRouter = require('./router.js');
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const cors = require("cors");
require("dotenv").config();
const os = require('os');

const PORT = process.env.PORT || 5001;

const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5001',
    'http://198.177.120.132', // თუ ეს უნდა იყოს დომენი, http://-ით დაამატე
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

// --- MIDDLEWARE ---
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// --- ROUTES ---
app.get('/api/ip', (req, res) => {
    const interfaces = os.networkInterfaces();
    let serverIp = 'unknown';
    for (let iface of Object.values(interfaces)) {
        for (let config of iface) {
            if (config.family === 'IPv4' && !config.internal) {
                serverIp = config.address;
                break;
            }
        }
        if (serverIp !== 'unknown') break;
    }
    res.json({ ip: serverIp });
});

app.use("/api", mainrRouter);

// React build serving
app.use(express.static(path.join(__dirname, '../client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

// --- SERVER START ---
app.listen(PORT, () => {
    console.log(`სერვერი აჭრილია პორტზე ${PORT}`);
});

// --- DATABASE CONNECTION ---
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
