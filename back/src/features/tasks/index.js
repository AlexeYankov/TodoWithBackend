const express = require("express");
const {getTasks} = require("./controllers/getTasks");
const {createTask} = require("./controllers/createTask");
const {deleteTask} = require("./controllers/deleteTask");
const {updateTask} = require("./controllers/updateTask");

const tasks = express.Router();

tasks.get("/", getTasks);
tasks.post("/", createTask);
tasks.delete("/:task_id", deleteTask);
tasks.put("/:task_id", updateTask);

module.exports = tasks
