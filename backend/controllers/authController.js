const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

// Home Logic
const home = async (req, res, next) => {
  try {
    res.status(200).send("Home Page");
  } catch (error) {
    // console.log(error);
    next(error);
  }
};

// Registration Logic
const register = async (req, res, next) => {
  try {
    // 1. Retrieve the data          (retrieve user data)
    // 2. Check email existence      (check if the email is already registered)
    // 3. Hash password              (securely hash the password)
    // 4. Create user                (create a new user with hashed password)
    // 5. Save to DB                 (save user data to database)
    // 6. Respond                    ("registration sucessfull" / handle errors)

    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).send({ message: "Email already exist" });
    }

    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    res.status(201).send({
      message: "User Registered successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    // res.status(500).send({ message: "internal server errror" });
    next(error);
  }
};

// User Login
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentails" });
    }

    const user = await userExist.comparePassword(password);

    if (user) {
      res.status(200).send({
        message: "Login successfully",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    // res.status(500).send({ message: "internal server errror" });
    next(error);
  }
};

module.exports = { home, register, login };
