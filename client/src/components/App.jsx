import { useEffect, useState } from "react";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

// TODO:
// Add notes refetch button

function App() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/notes")
            .then((res) => res.json())
            .then((json) => {
                setNotes(json);
            });
    }, []);

    function addNote(note) {
        setNotes((prevNotes) => {
            const newNotes = prevNotes.concat([note]);
            return newNotes;
        });
    }

    return (
        <>
            <NewNote addNote={addNote} />
            <NoteList notes={notes} />
        </>
    );
}

export default App;
