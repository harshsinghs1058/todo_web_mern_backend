const express = require("express");
const { check } = require("express-validator");
const { signUp, signIn } = require("./../controllers/user_controller");
//api/user
const routes = express.Router();

routes.post(
  "/signUp",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  signUp
);

routes.post(
  "/signIn",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  signIn
);

module.exports = routes;
