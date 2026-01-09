import NoteItem from "./NoteItem";

function NoteList({ notes, onDelete }) {
  return (
    <div style={{ marginTop: "20px" }}>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default NoteList;


