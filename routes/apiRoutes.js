const db = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(db);
    })

    app.post("/api/notes", (req, res) => {
        newNote = req.body
        db.push(newNote);
        res.json(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
            if (err) {
                return console.log(err);
            }
        })
    })
}