import express from "express";
import cors from "cors";
import fs from "fs";

const PORT = 3001;

const server = express();

server.use(express.json());
server.use(cors());

function getNotes() {
    const content = fs.readFileSync("./data.json", "utf8");
    const json = JSON.parse(content);
    return json.notes;
}

function addNote(note) {
    const notes = getNotes();
    notes.push(note);

    const json = {
        notes: notes,
    };

    fs.writeFileSync("./data.json", JSON.stringify(json));
}

server.get("/", (req, res) => {
    res.send("Hello Notes App");
});

server.get("/notes", (req, res) => {
    const notes = getNotes();
    res.send(notes);
});

server.post("/notes", (req, res) => {
    // example body json:
    // {
    //    note: "New Note"
    // }
    const note = req.body.note;

    addNote(note);

    res.send("Note added");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
