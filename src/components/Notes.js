import React, { useEffect } from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div>
      <AddNote></AddNote>
      <h1>Your Notes </h1>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
