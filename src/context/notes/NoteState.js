import React, { useState } from "react";
//import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "1",
      user: "62e2d499685beae374456f1f",
      title: "title test 1",
      description: "Description Test 1",
      tag: "Test tag 1",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "2",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    
    {
      _id: "3",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "4",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(notesInitial);

  // Add a note 
  const addNote = (title, tag, description)=>{
    console.log('Adding a new note');
    const note ={
      _id: "5",
      user: "62e2d499685beae374456f1f",
      title: title,
      description: description,
      tag: tag,
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  }
  // Delete a note
  const deleteNote = (id)=>{
    console.log('Deleting note using id:->', id);
    const newNote= notes.filter((note)=>{
      return note._id!==id;
    })
    setNotes(newNote);
  }
  // Edit a note
  const editNote = ()=>{
    
  }
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
