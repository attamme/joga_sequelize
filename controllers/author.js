const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

// read model data for table representation
const models = require('../models');
const author = require("../models/author");

// show author articles
const getAuthorArticles = (req, res) => {
    const authorId = req.params.author_id;
    models.Author.findByPk(authorId, {
        include: [{
            model: models.Article
        }]
    })
    .then(author => {
        if (!author) {
            return res.status(404).json({ message: "Author not found" });
        }
        console.log(author);
        return res.status(200).json({
            author: author.name,
            articles: author.Articles
        });
    })
    .catch(error => {
        return res.status(500).send(error.message);
    });
}

// export controller functions
module.exports = {
    getAuthorArticles
};