const pool = require("../../../../dbData/dbMiddleware");

const getTasks = async (request, response) => {
    pool.query("SELECT * FROM tasks ORDER BY task_id DESC", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
};

module.exports = {
    getTasks,
};
