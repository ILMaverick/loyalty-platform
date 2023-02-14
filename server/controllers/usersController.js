db = require("../database");

const getAllUsers = (req, res) => {
    db.connection.all("SELECT id, name FROM users", [], function (err, rows) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
    });
};

const getOneUser = (req, res) => {
    var params = [req.params.id]
    db.connection.get(`SELECT id, name FROM users where id = ?`, [req.params.id], function (err, row) {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json(row);
    });
};

const createNewUser = (req, res) => {
    var reqBody = re.body;
    db.connection.run(`INSERT INTO users (name) VALUES (?)`, [reqBody.name], function (err, result) {
        if (err) {
            res.status(400).json({ "error": err.message })
            return;
        }
        res.status(201).json({
            "id": this.id
        })
    });
};

const updateOneUser = (req, res) => {
    var reqBody = re.body;
    db.connection.run(`UPDATE users set name = ? WHERE id = ?`, [reqBody.name, reqBody.id], function (err, result) {
        if (err) {
            res.status(400).json({ "error": res.message })
            return;
        }
        res.status(200).json({ id: this.id });
    });
};

const deleteOneUser = (req, res) => {
    db.connection.run(`DELETE FROM users WHERE id = ?`, [req.params.id], function (err, result) {
        if (err) {
            res.status(400).json({ "error": res.message })
            return;
        }
        res.status(200).json({ deletedID: this.changes })
    });
};

module.exports = {
    getAllUsers,
    getOneUser,
    createNewUser,
    updateOneUser,
    deleteOneUser,
};
