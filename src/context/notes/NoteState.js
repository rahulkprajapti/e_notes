import React, { useState } from "react";
//import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 1",
      description: "Description Test 1",
      tag: "Test tag 1",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },{
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },{
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },
    {
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },{
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    },{
      _id: "6304c98dd823188722b536c0",
      user: "62e2d499685beae374456f1f",
      title: "title test 2",
      description: "Description Test 2",
      tag: "Test tag 2",
      date: "2022-08-23T12:33:35.861Z",
      __v: 0,
    }
  ];
  const [notes, setNotes] = useState(notesInitial);

  return (
    <noteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
