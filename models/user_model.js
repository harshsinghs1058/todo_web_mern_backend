const db = require("mongoose");
const userSchema = new db.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const user = db.model("user", userSchema);
module.exports = user;
