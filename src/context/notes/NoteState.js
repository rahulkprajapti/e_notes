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
    console.log("Adding a new note");
    let url = `${host}/api/notes/addnotes`;
    console.log("url==>", url);
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
    const note = {
      _id: "5",
      user: "62e2d499685beae374456f1f",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete a note
  const deleteNote = (id) => {
    console.log("Deleting note using id:->", id);
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

    //-------------
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.tag = tag;
        element.description = description;
        element.title = title;
      }
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
