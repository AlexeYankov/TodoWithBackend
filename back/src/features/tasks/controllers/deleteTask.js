const pool = require("../../../../dbData/dbMiddleware");

const deleteTask = async (request, response) => {
    const ID = parseInt(request.params.task_id);
    // const {tasks_task_id, tasks_task_user_id} = request.params.;
    pool.query("DELETE FROM tasks WHERE task_id = $1", [ID], (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(`Task deleted with id: ${ID}`);
    });
};

module.exports = {
    deleteTask,
};
