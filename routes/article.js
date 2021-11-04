const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(`
        <h1>Individual Article</h1>
        <p>This for single article...</p>
    `);
});

module.exports = router;
