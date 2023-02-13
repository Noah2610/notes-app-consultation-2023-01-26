import express from "express";
import cors from "cors";

const PORT = 3001;

const server = express();

const notes = ["Hello", "Note"];

server.use(cors());

server.get("/", (req, res) => {
    res.send("Hello Notes App");
});

server.get("/notes", (req, res) => {
    res.send(notes);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
