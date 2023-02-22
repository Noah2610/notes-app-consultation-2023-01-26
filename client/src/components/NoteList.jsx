export default function NoteList({ notes }) {
    return (
        <ul>
            {notes.map((note, i) => {
                return <li key={`${i}-${note}`}>{note}</li>;
            })}
        </ul>
    );
}
