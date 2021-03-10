const express = require("express");
const routes = express.Router();

// connection pool for PG
// database
const pool = require("./connection");

// get favorites
routes.get("/favorites", (req, res) => {
    
    pool.query("SELECT * FROM favorite_movies").then((results) => {
        const favorites = results.rows;
        res.json(favorites)
    })
    
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