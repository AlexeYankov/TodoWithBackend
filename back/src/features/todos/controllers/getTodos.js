const pool = require("../../../../dbData/dbMiddleware");

const getTodos = async (request, response) => {
    pool.query("SELECT * FROM todo ORDER BY todo_user_id DESC", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).send(results.rows);
    });
};

module.exports = {
    getTodos
};
