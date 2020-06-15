const db = require("../db/db");

module.exports = (app) => {
    app.get("/api/notes", (req, res) => {
        res.json(db);
    })

    app.post("/api/notes", (req, res) => {
        newNote = req.body
        db.push(newNote);
        res.json(newNote)
    })
}