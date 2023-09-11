
const getMessages = async (request, response) => {
    response.status(200).send("hello is ws message");
};

module.exports = {
    getMessages,
};
