import { useState } from "react";

export default function NewNote({ addNote }) {
    const [note, setNote] = useState("");

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
                            addNote(note);
                            setNote("");
                        }
                    }}
                />
            </div>
        </div>
    );
}
