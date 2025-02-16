const express = require("express");
const getNuip = require("nuip");

const app = express();
const port = 8000;

app.get("/ip", async (req, res) => {
  try {
    const ipInfo = await getNuip.getNuip(req, { devMode: false });
    res.json(ipInfo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch IP info" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
