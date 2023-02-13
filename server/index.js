import express from "express";

const PORT = 3001;

const server = express();

server.get("/", () => {
    console.log("GET on / !!!");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
