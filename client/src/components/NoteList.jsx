export default function NoteList({ notes }) {
    function deleteNote(index) {
        fetch(`http://localhost:3001/notes/${index}`, {
            method: "DELETE",
        });
    }

    return (
        <ul>
            {notes.map((note, i) => {
                return (
                    <li key={`${i}-${note}`}>
                        {note}

                        <button
                            title="Delete note"
                            onClick={() => deleteNote(i)}
                        >
                            X
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
