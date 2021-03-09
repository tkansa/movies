const express = require("express");
const routes = express.Router();

// connection pool for PG
// database
const pool = require("./connection");

// get favorites
routes.get("/favorites", (req, res) => {
    pool.query("Select * from favorite_movies").then((results) => {
        const favorites = results.rows;
        res.json(favorites)
    })
    
});

module.exports = routes;