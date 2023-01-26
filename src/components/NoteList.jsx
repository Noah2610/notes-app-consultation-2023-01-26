export default function NoteList({ notes }) {
    return (
        <div>
            <ul>
                {notes.map((note, i) => {
                    return <li key={`${i}-${note}`}>{note}</li>;
                })}
            </ul>
        </div>
    );
}
