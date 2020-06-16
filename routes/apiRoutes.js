const express = require("express");
const db = require("../db/db.json");
const fs = require("fs");
const router = express.Router();

router.get("/notes", (req, res) => {
    res.json(db);
})

router.post("/notes", (req, res) => {
    db.push(req.body);
    res.json(req.body);
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
        if (err) {
            return console.log(err);
        }
    })
})

module.exports = router;
