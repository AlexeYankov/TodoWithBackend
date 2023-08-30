// const pool = require("../../../../userData/user");
const pool = require("../../../../userData/user");

const createTodo = (request, response) => {
    const {todo_name, todo_filter} = request.body;
    pool.query(
        "INSERT INTO todo (todo_name, todo_filter) VALUES ($1, $2) RETURNING *",
        [todo_name, todo_filter],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`User added with id: ${results.rows[0].todo_id}`);
        }
    );
};

module.exports = {
    createTodo,
};
