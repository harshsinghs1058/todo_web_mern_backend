const { response } = require("express");
const user = require("./../models/user_model");
//type get
//path api/todo/getTodos/:{email}
const getTodos = async (req, res) => {
  const { email } = req.params;
  if (!email) return res.status(401).json({ message: "Email id not provided" });
  try {
    const userData = await user.findOne({ email });
    return res.json(userData.todos);
  } catch (err) {
    console.log(err);

    res.status(404).json({ message: "An Error has occurred please refresh" });
  }
};

//type post
// path - api/todo/addTask
//req task,email
const addTodoItem = async (req, res) => {
  const { email, task } = req.body;
  try {
    await user.findOneAndUpdate(
      {
        email,
      },
      {
        $push: {
          todos: {
            task,
          },
        },
      }
    );
    return res.json({ message: "Task Added Successfully" });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      message: "Some Error has occurred.Please refresh please refresh",
    });
  }
};

//type deleteTask
// path - api/todo/deleteTask
//req taskId,email
const deleteTodoItem = async (req, res) => {
  const { email, taskId } = req.body;
  if (!(email && taskId)) {
    return res.status(404).json({ message: "Invalid Credentials" });
  }
  try {
    const todo = await user.findOneAndUpdate(
      { email },
      {
        $pull: {
          todos: {
            _id: taskId,
          },
        },
      }
    );
    return res.json({ message: "Item deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "An error has occurred please refresh" });
  }
};

//type patch
// path - api/todo/updateTask
//req taskId,email,task
const updateTodoItem = async (req, res) => {
  const { email, taskId, task } = req.body.data;
  if (!(email && taskId && task)) {
    return res.status(404).json({ message: "Invalid Credentials" });
  }
  try {
    const todo = await user.findOneAndUpdate(
      { email },
      {
        $set: {
          todos: {
            _id: taskId,
            task: task,
          },
        },
      }
    );
    return res.json({ message: "Item deleted Successfully" });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "An error has occurred please refresh" });
  }
};

exports.getTodos = getTodos;
exports.addTodoItem = addTodoItem;
exports.deleteTodoItem = deleteTodoItem;
exports.updateTodoItem = updateTodoItem;
