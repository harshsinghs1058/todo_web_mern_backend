//type get
//path api/todo/getTodos/:{email}
const getTodos = (req, res) => {
  console.log(req.getTodos);
  res.send("Working");
};

//type post
// path - api/
const addTodoItem = (req, res) => {};

exports.getTodos = getTodos;
exports.addTodoItem = addTodoItem;
