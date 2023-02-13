import { useState } from "react";
import NewNote from "./NewNote";
import NoteList from "./NoteList";

function App() {
    const [notes, setNotes] = useState([]);

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
