const { validationResult } = require("express-validator");
const user = require("./../models/user_model");
//path - api/user/signUp
//req - email,password,name
const signUp = async (req, res) => {
  const error = validationResult(req);
  //if client not send proper data
  if (!error.isEmpty()) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const { email, password } = req.body;
  const result = await user.findOne({ email });

  //if client is really new user
  if (result) {
    return res.status(409).json({
      message: `An user linked with this Email-ID ${email} already exists`,
    });
  }
  const newUser = new user({ email, password });
  try {
    await newUser.save();
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An internal error is occurred", error: err });
  }
  return res
    .status(201)
    .json({ message: "user signed up successfully", user: newUser });
};

//sign in
//path api/user/signIn
//requirements email,password
const signIn = async (req, res) => {
  try {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const { email, password } = req.body;
    const result = await user.findOne({ email });
    if (!result) {
      return res
        .status(401)
        .json({ message: `No User is registered with Email-ID ${email}` });
    }
    if (result.password !== password) {
      return res.status(401).json({ message: "Incorrect password" });
    }
    return res
      .status(202)
      .json({ message: "User signed in successfully", user: result });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "An internal error has occurred please login again" });
  }
};
exports.signUp = signUp;
exports.signIn = signIn;
