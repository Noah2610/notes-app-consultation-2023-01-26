import { useState } from "react";
import NoteList from "./NoteList";

export default function NewNote() {
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

            <NoteList notes={notes} />
        </div>
    );
}
