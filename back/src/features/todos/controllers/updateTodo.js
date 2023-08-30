const pool = require("../../../../userData/user");

const updateTodo = (request, response) => {
    const todo_id = parseInt(request.params.todo_id);
    const {todo_name, todo_filter} = request.body;
    pool.query(
        "UPDATE todo SET todo_name = $1, todo_filter = $2 WHERE todo_id = $3",
        [todo_name, todo_filter, todo_id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User modified with id: ${todo_id}`);
        }
    );
};

// const updateUser = (request, response) => {
//     const id = parseInt(request.params.id);
//     const {name, email} = request.body;

//     pool.query("UPDATE users SET name = $1, email = $2 WHERE id = $3", [name, email, id], (error, results) => {
//         if (error) {
//             throw error;
//         }
//         response.status(200).send(`User modified with ID: ${id}`);
//     });
// };

module.exports = {
    updateTodo,
};
