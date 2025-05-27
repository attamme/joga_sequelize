const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// testing connection
sequelize
    .authenticate()
    .then(() =>{
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database', err)
    })

// using routes and controllers
const articleRouter = require('./routes/article');
app.use('/', articleRouter);

app.get('/', (req, res) => {
    res.json({ message: "Welcome tto sequelize application" })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});