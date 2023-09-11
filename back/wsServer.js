// ws server
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });


const hostname = "127.0.0.1";
const port = 4001;

io.on("connection", (socket) => {
  // ...
  console.log(socket)
  console.log(`Server running at http://${hostname}:${port}/`);
});

httpServer.listen(port);
