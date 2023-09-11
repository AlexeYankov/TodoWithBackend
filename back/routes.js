// import {Express} from "express";
const todos = require("./src/features/todos/index");
const tasks = require("./src/features/tasks/index");
const wsChat = require("./src/features/tasks/index");

const routes = (app) => {
    app.use("/todos", todos);
    app.use("/tasks", tasks);
    app.use("/ws", wsChat);
};

module.exports = {routes}