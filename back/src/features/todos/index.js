const express = require("express");
const {getTodos} = require("./controllers/getTodos");
const {createTodo} = require("./controllers/createTodo");
const {deleteTodo} = require("./controllers/deleteTodo");
const {updateTodo} = require("./controllers/updateTodo");

const todos = express.Router();

todos.get("/", getTodos);
todos.post("/", createTodo);
todos.delete("/:todo_id", deleteTodo);
todos.put("/:todo_id", updateTodo);

module.exports = todos;
