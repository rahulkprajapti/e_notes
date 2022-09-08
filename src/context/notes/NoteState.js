import React, { useState } from "react";
//import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:3000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  // Get all notes
  const getNotes = async () => {
    let url = `${host}/api/notes/getnotes`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMmQ0OTk2ODViZWFlMzc0NDU2ZjFmIn0sImlhdCI6MTY2MTI0OTM4MX0.EyjjMjPua2xCFI2AXK2v9jtApSXkZApiMXCAbnozjcU",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add a note
  const addNote = async (title, tag, description) => { 
    let url = `${host}/api/notes/addnotes`; 
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMmQ0OTk2ODViZWFlMzc0NDU2ZjFmIn0sImlhdCI6MTY2MTI0OTM4MX0.EyjjMjPua2xCFI2AXK2v9jtApSXkZApiMXCAbnozjcU",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    // concat note in notes array
    setNotes(notes.concat(note))
  };
  // Delete a note
  const deleteNote = async (id) => { 
    // API Call
    let url = `${host}/api/notes/deletenotes/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMmQ0OTk2ODViZWFlMzc0NDU2ZjFmIn0sImlhdCI6MTY2MTI0OTM4MX0.EyjjMjPua2xCFI2AXK2v9jtApSXkZApiMXCAbnozjcU",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    //------------------------
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  // Edit a note
  const editNote = async (id, tag, title, description) => {
    // Api Call---
    let url = `${host}/api/notes/updatenotes/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJlMmQ0OTk2ODViZWFlMzc0NDU2ZjFmIn0sImlhdCI6MTY2MTI0OTM4MX0.EyjjMjPua2xCFI2AXK2v9jtApSXkZApiMXCAbnozjcU",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ tag, title, description }),
    });
    const json = response.json();
    let newNote = JSON.parse(JSON.stringify(notes));
    //-------------
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].tag = tag;
        newNote[index].description = description;
        newNote[index].title = title;
        break;
      }
      setNotes(newNote);
    }
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
