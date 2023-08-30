const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const {routes} = require("./routes");

// const db = require("./features/todos/controllers/createTodo");
const app = express();

// const Pool = require("pg").Pool;
// const pool = new Pool({
//     user: "postgres",
//     host: "localhost",
//     database: "todo",
//     password: "1",
//     port: 5432,
// });

app.use(cors());
app.use(bodyParser.json());

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
routes(app);
// app.use(bodyParser.json());

const hostname = "127.0.0.1";
const port = 4000;

// app.get(todosUrls.profile, (req, res) => {
//     res.statusCode === 202;
//     res.send("START PAGE");
// });
// app.get(todosUrls.profile1, (req, res) => {
//     // res.statusCode === 404
//     res.send("some123 other page");
// });

// app.post(todosUrls.todos, (req, res) => {
//     if (res.statusCode === 200) {
//         // const id = crypto.randomUUID();
//         const id = "someid";
//         todos.push({id, name: "Some New Name"});
//         res.send(JSON.stringify({data: "feiwjfiewj"}));
//         res.send("request");
//     } else {
//         res.send("someShit");
//     }
// });
// app.get(todosUrls.todos, (req, res) => {
//     res.statusCode = 200;
//     // const id = crypto.randomUUID();
//     const id = "someid";
//     todos.push({id, name: "Some New Name"});
//     res.send(JSON.stringify(todos));
//     res.send("request");
// });

// app.post("/todos", db.createTodo);
// app.post("/todos", db.createTodo);
// app.get("/", (request, response) => {
//     response.json({info: "Node.js, Express, and Postgres API"});
// });

// app.get("/users", db.getUsers);
// app.get("/users/:id", db.getUserById);
// app.post("/users", db.createUser);
// app.put("/users/:id", db.updateUser);
// app.delete("/users/:id", db.deleteUser);

// app.get("/todos/:id", db.getTodoTasks);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
