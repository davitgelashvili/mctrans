const express = require('express');
const mainrRouter = require('./router.js')
const mongoose = require("mongoose");
const path = require('path');
const app = express();
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 5001;

// დამატებული პროდუქციის დომენი
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5001',
    'https://mctrans.gelashvili.site'
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

const MONGO_URI = 'mongodb+srv://datto1313:Kaikaco123.@cluster0.ondghzb.mongodb.net/mctrans?retryWrites=true&w=majority';


console.log(111111)
console.log(MONGO_URI)
mongoose
    .connect(MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
