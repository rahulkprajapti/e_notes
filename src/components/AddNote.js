import React, { useState } from "react";
import { useContext } from "react";
import Notes from "./Notes";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote]= useState({title:"", description:"", tag:""});
  const handleOnClick = () => {};
  const onChange = (e) => {
    setNote(
        {...note,[e.target.name]: e.target.value}
    );
  };
  return (
    <div className="container my-3">
      <div>
        <h1>Add a Note </h1>
        <form>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            /> 
          </div>
          <div className="form-group">
            <label htmlFor="description" onChange={onChange}>
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleOnClick}
          >
            Submit
          </button>
        </form>
        <Notes></Notes>
      </div>
    </div>
  );
};

export default AddNote;
