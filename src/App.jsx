import { useState } from "react";

function App() {
    return (
        <>
            <NewNote />
        </>
    );
}

function NewNote() {
    const [note, setNote] = useState("");
    const [notes, setNotes] = useState([]);

    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="New note"
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    onKeyUp={(event) => {
                        if (event.key === "Enter") {
                            setNotes((prevNotes) => {
                                const newNotes = prevNotes.concat([note]);
                                return newNotes;
                            });
                            setNote("");
                        }
                    }}
                />
            </div>

            <div>
                <ul>
                    {notes.map((note, i) => {
                        return <li key={`${i}-${note}`}>{note}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;
