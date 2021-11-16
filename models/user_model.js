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
  todos: [
    {
      task: {
        type: String,
      },
      time: {
        type: Date,
        default: Date.now(),
      },
    },
  ],
});
const user = db.model("user", userSchema);
module.exports = user;
