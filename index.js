//package imports
const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/user_routes");
const todoRoutes = require("./routes/todo_routes");
require("dotenv").config();
const db = require("mongoose");
//express work
const PORT = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Mongoose work
db.connect(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).catch((err) => {
  console.log(err);
});

//path - api/
app.use("/api/user", userRoutes);
app.use("/api/todo", todoRoutes);

//default path
app.get("/", (req, res) => {
  res.status(404).json({ message: "Hello World" });
});
//starting server
app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
