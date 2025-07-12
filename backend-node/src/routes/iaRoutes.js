const express = require("express");
const router = express.Router();
const iaService = require("../services/iaServices");

router.post("/code", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ success: false, message: "Prompt não fornecido." });
  }

  try {
    const result = await iaService.callPythonAPI(prompt);
    res.json(result);
  } catch (err) {
    res.status(500).json({ success: false, message: "Erro ao gerar código IA", error: err.message });
  }
});

module.exports = router;
