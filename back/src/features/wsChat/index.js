const express = require("express");
const {getMessages} = require("./controllers/getMessages");

const wsChat = express.Router();

todos.get("/", getMessages);

module.exports = wsChat;
