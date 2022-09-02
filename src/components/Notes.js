import React from "react";
import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
const Notes = () => {
  const context = useContext(noteContext);
  const { notes,addNote } = context;
  return (
    <div>
      <h1>Your Notes </h1>
      <div className="row my-3">
        {notes.map((note) => {
          return <NoteItem note={note}></NoteItem>;
        })}
      </div>
    </div>
  );
};

export default Notes;
