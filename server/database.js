var sqlite3 = require('sqlite3');
var connection = new sqlite3.Database('database.db');

function create_tables() {

    console.log("Creating tables...");

    connection.run('CREATE TABLE users( \
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
        name NVARCHAR(20)  NOT NULL)',
        function (err) {
            if (err) {
                console.log("Table users already exists.");
            }
        });

    connection.run('CREATE TABLE messages( \
        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, \
        text NVARCHAR(500)  NOT NULL), \
        from int FOREIGN KEY REFERENCES users(id) \
        to int FOREIGN KEY REFERENCES users(id)',
        function (err) {
            if (err) {
                console.log("Table users already exists.");
            }
        });
}

function dummy_data() {
    connection.run('INSERT INTO users (name) VALUES (\'carlo\')');
    connection.run('INSERT INTO users (name) VALUES (\'mario\')');
}

module.exports = { connection, create_tables, dummy_data }