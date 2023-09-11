// http server
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const {routes} = require("./routes");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        // methods: ["GET"],
    },
});

// http settings
const host = "127.0.0.1";
const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
routes(app);

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});

const ioPort = 3001;
// io settings
server.listen(ioPort, function () {
    console.log("App listening at http://%s:%s", host, ioPort);
    console.log(host, ioPort);
});

const messages = [
    {author: "Maria", message: "can i help you?", id: "345rt43jtig", time: "17:31", manager: true},
    {author: "user2314", message: "хотел бы открыть карту в вашем банке", id: "345п2eds34rt43jtig", time: "17:32"},
    {
        author: "Maria",
        message: "подождите секунду, уточню у оператора",
        id: "345п2eds32344rt43jtig",
        time: "17:33",
        manager: true,
    },
];

io.on("connection", function (socket) {
    console.log("Client connected to the WebSocket");
    socket.emit("init-messages-published", messages);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });

    socket.on("chat message", function (msg) {
        console.log(msg);
        const message = {
            author: "Alex",
            message: msg,
            id: "string" + new Date().getTime() + msg,
            time: "17:52" + Math.random() * 1000,
        };
        messages.push(message);
        console.log("Received a chat message", message);
        socket.emit("init-messages-published", messages);
    });
});
