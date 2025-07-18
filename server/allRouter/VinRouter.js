const express = require("express");
const vinRouter = express.Router();
require("dotenv").config();

vinRouter.post("/", async (req, res) => {
  try {
    const { vin, container } = req.body;
    
    console.log(process.env.AUTH_KEY)

    console.log("მიღებული მონაცემები:", { vin, container });

    if (!vin && !container) {
      return res.status(400).json({ error: "VIN ან კონტეინერი საჭიროა." });
    }

    const formData = new URLSearchParams();
    if (vin) formData.append("vincode", vin);
    if (!vin && container) formData.append("container", container);

    const fetchRes = await fetch("https://db.mctrans.ge/website", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Auth-Key": process.env.AUTH_KEY
      },
      body: formData.toString()
    });

    const text = await fetchRes.text();
    const cleanText = text.replace(/^\uFEFF/, ''); // BOM strip

    console.log("API პასუხი:", cleanText);

    const data = JSON.parse(cleanText);
    res.json(data);
  } catch (err) {
    console.error("შეცდომა vincheck-ში:", err);
    res.status(500).json({ error: "სერვერის შეცდომა." });
  }
});

module.exports = vinRouter;
