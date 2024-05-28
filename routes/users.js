const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

// Route per il login
router.post("/", async (req, res) => {
  const { role, password } = req.body;
  try {
    // Verifica se l'utente esiste nel database
    const user = await User.findOne({ role });
    if (!user) {
      return res.status(404).json({ message: "Utente non trovato" });
    }

    // Verifica se la password è corretta
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Password non valida" });
    }
    // Genera il token JWT
    const token = jwt.sign({ userId: user._id }, "segreto", {
      expiresIn: "1h",
    });

    // Invia il token come parte della risposta
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Errore durante il login" });
  }
});

module.exports = router;
