const express = require("express");
const vinRouter = express.Router();
require("dotenv").config();

vinRouter.post("/", async (req, res) => {
  try {
    const { vin, container } = req.body;

    if (!vin && !container) {
      return res.status(400).json({ error: "VIN ან კონტეინერი საჭიროა." });
    }

    const formData = new URLSearchParams();
    if (vin) formData.append("vincode", vin);
    if (!vin && container) formData.append("container", container);

    const response = await fetch("https://db.mctrans.ge/website", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Auth-Key": process.env.AUTH_KEY // ან ხელით ჩაწერე
      },
      body: formData.toString()
    });

    const text = await response.text();
    const cleanText = text.replace(/^\uFEFF/, ''); // BOM strip
    const data = JSON.parse(cleanText);

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "სერვერის შეცდომა." });
  }
});

module.exports = vinRouter;
