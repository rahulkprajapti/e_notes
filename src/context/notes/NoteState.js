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
        "auth-token":localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('response==>', response);
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
        "auth-token":localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    // concat note in notes array
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = async (id) => {
    // API Call
    let url = `${host}/api/notes/deletenotes/${id}`;
    await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
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
    console.log("edit details==>", url);
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem('token'),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },

      body: JSON.stringify({ tag, title, description }),
    });
    const json = await response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    //-------------
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag; 
        break; 
      }
    }
    setNotes(newNotes);
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
