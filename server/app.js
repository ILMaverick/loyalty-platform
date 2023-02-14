const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Loyalty Platform is running!');
})

app.listen(port, () => {
    console.log(`Loyalty Platform is running on port ${port}`);
})

// database
db = require("./database");
db.create_tables();
db.dummy_data();

// routes
const users = require("./routes/usersRoute");
app.use("/api/users", users);
