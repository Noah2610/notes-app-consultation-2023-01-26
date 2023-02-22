export default function NoteList({ notes, deleteNote }) {
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
