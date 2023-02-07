const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Loyalty Platform is running!');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})

// database
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('database.db');

// routes
const users = require("./routes/usersRoute");
app.use("/api/users", users);
