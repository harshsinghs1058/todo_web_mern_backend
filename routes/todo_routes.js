const routes = require("express").Router();
const {
  getTodos,
  addTodoItem,
  deleteTodoItem,
  updateTodoItem,
} = require("./../controllers/todo_controller");
//path - api/todo/getTodos/:email
routes.get("/getTodos/:email", getTodos);

routes.post("/addTask", addTodoItem);

routes.post("/addTask", addTodoItem);

routes.delete("/deleteTask", deleteTodoItem);

routes.patch("/updateTask", updateTodoItem);

module.exports = routes;
