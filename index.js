const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome tto sequelize application" })
})

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});