const pool = require("../../../../userData/user");

const deleteTodo = (request, response) => {
    const todo_id = parseInt(request.params.todo_id);
    console.log(todo_id)

    pool.query("DELETE FROM todo WHERE todo_id = $1", [todo_id], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Todo deleted with ID: ${todo_id}`);
    });
};

module.exports = {
    deleteTodo,
};
