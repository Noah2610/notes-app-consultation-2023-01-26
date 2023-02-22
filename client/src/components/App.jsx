import { useEffect, useState } from "react";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

async function fetchNotes() {
    const response = await fetch("http://localhost:3001/notes");
    return await response.json();
}

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(refetchNotes, []);

    function addNote(note) {
        setNotes((prevNotes) => {
            const newNotes = prevNotes.concat([note]);
            return newNotes;
        });

        // send new note data to server
        fetch("http://localhost:3001/notes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                note: note,
            }),
        });
    }

    async function deleteNote(index) {
        await fetch(`http://localhost:3001/notes/${index}`, {
            method: "DELETE",
        });

        refetchNotes();
    }

    function refetchNotes() {
        fetchNotes().then(setNotes);
    }

    return (
        <>
            <NewNote addNote={addNote} />
            <NoteList notes={notes} deleteNote={deleteNote} />

            <button onClick={refetchNotes}>Refetch notes</button>
        </>
    );
}

export default App;
