import express from "express";
import cors from "cors";

const PORT = 3001;

const server = express();

server.use(express.json());
server.use(cors());

const NOTES = ["Hello", "Note"];

server.get("/", (req, res) => {
    res.send("Hello Notes App");
});

server.get("/notes", (req, res) => {
    res.send(NOTES);
});

server.post("/notes", (req, res) => {
    // example body json:
    // {
    //    note: "New Note"
    // }
    const note = req.body.note;
    console.log(note);

    NOTES.push(note);

    res.send("Note added");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
