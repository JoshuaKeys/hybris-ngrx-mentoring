const express = require("express");

const app = express();

const tasks = ["Do task 1", "Do Task 2", "Do Task 3"];

app.use(express.json({ extended: false }));

app.get("/api/todoItems", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(tasks);
});

app.post("/api/todoItems", (req, res) => {
  let task = req.body.task;
  tasks.push(task);
  res.status(200);
});

app.delete("/api/todoItems", (req, res) => {
  let task = req.query.todoItem ? req.query.todoItem : false;

  if (task) {
    const taskIdx = tasks.findIndex((item) => item === task);
    tasks.splice(taskIdx, 1);
    return res.status(200).json({ msg: "Successful" });
  }
  return res.status(400).json({ msg: "Bad Request" });
});

app.listen(8090, () => {
  console.log("App running on 8090");
});
