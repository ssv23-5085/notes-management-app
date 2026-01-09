import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Loader from "./components/Loader";
import EmptyState from "./components/EmptyState";
import "./App.css";


function App() {
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fake loading (simulates API call)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Add note
  const addNote = (note) => {
    if (!note.title.trim()) return;

    setNotes((prevNotes) => [...prevNotes, note]);
  };

  // Delete note
  const deleteNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.filter((note) => note.id !== id)
    );
  };

  return (
     <div className="app-container">
    <div style={{ maxWidth: "700px", margin: "40px auto" }}>
      <h1>Notes Management App</h1>

      {isLoading && <Loader />}

      {!isLoading && notes.length === 0 && <EmptyState />}

      {!isLoading && notes.length > 0 && (
        <NoteList notes={notes} onDelete={deleteNote} />
      )}

      {!isLoading && <NoteForm onAddNote={addNote} />}
    </div>
    </div>
  );
}

export default App;

