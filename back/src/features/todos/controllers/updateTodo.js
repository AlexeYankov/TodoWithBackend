const pool = require("../../../../dbData/dbMiddleware");

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

module.exports = {
    updateTodo,
};
