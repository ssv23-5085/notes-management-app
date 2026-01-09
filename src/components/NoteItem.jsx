function NoteItem({ note, onDelete }) {
  return (
    <div className="note-card">
      <h3>{note.title}</h3>

      {note.description && <p>{note.description}</p>}

      <button onClick={() => onDelete(note.id)}>
        Delete
      </button>
    </div>
  );
}

export default NoteItem;

