const db = require("mongoose");
const todoItemSchema = db.Schema({
  item: {
    type: String,
    require: true,
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});
const todoItem = db.model("todoItem", todoItemSchema);

module.exports = todoItem;
