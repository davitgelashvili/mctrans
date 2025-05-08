const express = require("express");
const mainRouter = express.Router();
const mongoose = require("mongoose");

const carsRouter = require("./allRouter/CarsRouter.js");
const uploadRouter = require("./allRouter/uploadPhotoRouter.js");

const MONGO_URL = 'mongodb+srv://datto1313:Kaikaco123.@cluster0.ondghzb.mongodb.net/mctrans?retryWrites=true&w=majority';

mainRouter.get('/', (req, res) => {
    res.send(mongoose.connect(MONGO_URL));
});

// როუტერის გამოყენება
mainRouter.use("/cars", carsRouter);
mainRouter.use("/upload", uploadRouter);

module.exports = mainRouter;