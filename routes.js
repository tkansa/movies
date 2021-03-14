const express = require("express");
const routes = express.Router();

// connection pool for PG
// database
const pool = require("./connection");

// get favorites
routes.get("/favorites", (req, res) => {

    let searchTerm = req.query.searchTerm;
    if (searchTerm) {
        pool.query(`SELECT * FROM favorite_movies WHERE title LIKE $1`, ["%" + searchTerm + "%"]).then((results) => {
            res.json(results.rows);
        });
    }
    else {
        console.log("inside else clause")
        pool.query("SELECT * FROM favorite_movies ORDER BY id DESC").then((results) => {
            res.json(results.rows);
        });
    }
});

routes.post("/favorites", (req, res) => {
    let movie = req.body;
    pool.query("INSERT INTO favorite_movies (title, poster_path) VALUES ($1, $2) returning *",
        [movie.title, movie.poster_path]
    ).then(results => {
        res.status(201);
        res.json(results.rows);
    })
})

module.exports = routes;