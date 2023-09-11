const pool = require("../../../../dbData/dbMiddleware");

const createTask = async (request, response) => {
    // const ID = parseInt(request.params.task_id);
    // const {tasks_task_id, tasks_task_user_id} = request.params.;
    const {task_name, task_is_done, tasks_todo_id} = request.body;
    // if (task_is_done === undefined || task_is_done === null) {
    //     task_is_done = false;
    // }
    console.log(task_name, task_is_done, tasks_todo_id)
    pool.query(
        "INSERT INTO tasks (task_name, task_is_done, tasks_todo_id) VALUES ($1, $2, $3) RETURNING *",
        [task_name, task_is_done, tasks_todo_id],
        (error, results) => {
            if (error) {
                throw error;
            }
            response.status(200).send(`Task added`);
        }
    );
};

module.exports = {
    createTask,
};
