const getAllUsers = (req, res) => {
    res.send({ status: "OK", data: allUsers });
};

const getOneUser = (req, res) => {
    res.send("Get an existing user");
};

const createNewUser = (req, res) => {
    res.send("Create a new user");
};

const updateOneUser = (req, res) => {
    res.send("Update an existing user");
};

const deleteOneUser = (req, res) => {
    res.send("Delete an existing User");
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};
