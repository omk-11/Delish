// evening task: data vaidation zod , roles figuring
// node changes

const { User } = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signUp(req, res) {
  const { role, email, name, password } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.json({ message: "user with this email already exist.." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWTSECRET);
    res.json({
      token: token,
      user: { name, role, email },
    });
  } catch (err) {
    res.status(500).json({ message: "server error sign up", err: err.message });
  }
}

async function signIn(req, res) {
  const { password, email } = req.body;
  try {
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(401).json({ message: "invalid email and password" });
    }

    const isCorrect = await bcrypt.compare(password, userExist.password);
    if (isCorrect) {
      const token = jwt.sign({ id: userExist._id }, process.env.JWTSECRET);
      return res.status(200).json({
        token,
        user: {
          id: userExist._id,
          name: userExist.name,
          email: userExist.email,
          role: userExist.role,
        },
      });
    } else {
      return res
        .status(401)
        .json({ message: "incorrect credentials for email" });
    }
  } catch (err) {
    return res
      .status(500)
      .json({ message: "internal server error in signin", err: err.message });
  }
}

module.exports = { signIn, signUp };
