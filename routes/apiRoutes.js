const express = require("express");
const db = require("../db/db.json");
const fs = require("fs");
const router = express.Router();
let database = db;

router.get("/notes", (req, res) => {
    res.json(db);
})

router.post("/notes", (req, res) => {
    database.push(req.body);
    res.json(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(database), (err) => {
        if (err) {
            return console.log(err);
        }
    })
})

router.delete("/notes/:id", (req, res) => {
    const id = req.params.id;

    for (let i = 0; i < database.length; i++) {
        if (id === database[i].id) {
           database.splice(i,1);
           res.json(true);
        }
    }
    fs.writeFile("./db/db.json", JSON.stringify(database), (err) => {
        if (err) {
            return console.log(err);
        }
    })
})

module.exports = router;
