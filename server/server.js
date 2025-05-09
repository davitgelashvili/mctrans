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

const MONGO_URL = 'mongodb+srv://datto1313:Kaikaco123.@cluster0.ondghzb.mongodb.net/mctrans?retryWrites=true&w=majority';
// const uri = 'mongodb://datto1313:Kaikaco123.@ac-u7noaaf-shard-00-00.ondghzb.mongodb.net:27017,ac-u7noaaf-shard-00-01.ondghzb.mongodb.net:27017,ac-u7noaaf-shard-00-02.ondghzb.mongodb.net:27017/mctrans?ssl=true&replicaSet=atlas-1v0cz5-shard-0&authSource=admin&retryWrites=true&w=majority';


mongoose
    .connect(MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });
