const path = require("path");
const router = require("express").Router();
const fs = require('fs');
const {v4:uuidv4} = require('uuid');

router.get("/notes", (req, res) => {
    fs.readFile('./db/db.json', 'utf8', function(err, data) {
        if (err) throw err;
        res.send(data);
    })
});

router.post("/notes", (req, res) =>{
    var newNote = req.body;
    fs.readFile("./db/db.json", function (err, data) {
        if (err) throw err;
        console.log(`THIS IS OLD DATA BROTHER ${data}`);
        var oldNotes = JSON.parse(data);
        newNote.id = uuidv4();
        // newNote["id"] = uuidv4();
        oldNotes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(oldNotes), function (err) {
            if (err) throw err;
            res.send(newNote)
        })
    });
})

router.delete("/notes/:id", (req, res) => {
    console.log(req.params.id);
    // res.send
})

module.exports = router;
