const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./../models/Users");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();

const { body, validationResult } = require("express-validator");

const JWT_SECRET = "Rahul#12%$djd&*s";

// creating end points
// Roaute : 1 - Route to create new user
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name ").isLength({ min: 3 }),
    body("password", "Enter a valid password ").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email is already exist" });
      }
      const salt = await bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      // creating sign for JWT token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res
        .status(200)
        .json({ authToken, message: "New User created successfully...!" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error..");
    }
  }
);

// Roaute : 2 - Route to authenticate a user
router.post(
  "/authenticate",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Enter a valid password ").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { email, password } = req.body;
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "Please try to login with your correct credentails" });
      }
      const passwordComapre = bcrypt.compare(password, user.password);
      if (!passwordComapre) {
        return res
          .status(400)
          .json({ error: "Please try to login with your correct credentails" });
      }
      // creating sign for JWT token
      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);
      res.status(200).json({ authToken, message: "Login successfully...!" });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error..");
    }
  }
);

router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error..");
  }
});
module.exports = router;
