import express from "express";
import cors from "cors";
import fs from "fs";

const PORT = 3001;

const server = express();

server.use(express.json());
server.use(cors());

function getNotes() {
    try {
        const content = fs.readFileSync("./data.json", "utf8");
        const json = JSON.parse(content);
        return json.notes;
    } catch (err) {
        return [];
    }
}

function addNote(note) {
    const notes = getNotes();
    notes.push(note);
    saveNotes(notes);
}

function saveNotes(notes) {
    const json = {
        notes: notes,
    };

    fs.writeFileSync("./data.json", JSON.stringify(json));
}

function deleteNote(index) {
    const notes = getNotes();
    notes.splice(index, 1);
    saveNotes(notes);
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

server.delete("/notes/:index", (req, res) => {
    const index = parseInt(req.params.index);
    deleteNote(index);
    res.send("Deleting...");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
