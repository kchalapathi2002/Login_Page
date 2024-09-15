const express = require('express');
const User = require('../mongoose/userModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const { email, password } = req.body;
  
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.json({ message: "Invalid credentials" });
    }

    res.json({ message: "Signed in successfully", name: user.name });
  } catch (error) {
    res.status(500).json({ message: "Error signing in" });
  }
});

module.exports = router;
