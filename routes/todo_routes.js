const routes = require("express").Router();
const { getTodos } = require("./../controllers/todo_controller");
//path - api/todo/getTodos/:email
routes.get("/getTodos/:email", getTodos);

module.exports = routes;
