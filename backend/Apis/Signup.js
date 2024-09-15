const express = require('express');
const User = require('../mongoose/userModel');

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists" });
    }
    const newUser = new User({ name, email, password });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user" });
  }
});

module.exports = router;