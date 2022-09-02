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
    const note ={
      _id: "5",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2 --added..",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    };
    setNotes(notes.push(note));
  }
  // Delete a note
  const deleteNote = ()=>{
    
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
