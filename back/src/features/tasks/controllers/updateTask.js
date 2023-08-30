const pool = require("../../../../userData/user");

const updateTask = (request, response) => {
    const id = parseInt(request.params.task_id);
    const {task_name, task_is_done} = request.body;
    pool.query(
        "UPDATE tasks SET task_name = $1, task_is_done = $2 WHERE task_id = $3",
        [task_name, task_is_done, id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`Task modified with id: ${id}`);
        }
    );
};

module.exports = {
    updateTask,
};
