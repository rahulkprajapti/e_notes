import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext, useRef } from "react";
// UseRef Hook is used to pas the reference to the element
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
const Notes = (props) => {
  let history = useNavigate();
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  useEffect(() => {
    // If token is not null then show all notes else redirect to login page 
    if(localStorage.getItem('token')!=null || localStorage.getItem('token')!=undefined){
      getNotes();
    }else{ 
      history("/login");  
    }
    
  }, []);
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    etag: "",
    edescription: "",
  });
  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      etag: currentNote.tag,
      edescription: currentNote.description,
    });
     
  };

  const handleClick = (e) => {
    // Invoke edit note function before close the box
    editNote(note.id, note.etag, note.etitle, note.edescription);
    refClose.current.click();
    props.showAlert("Note Updated successfully ","success");
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  // After add note component use popup to update note
  // To add popup use bootstrap modal
  // https://getbootstrap.com/docs/5.0/components/modal/
  return (
    <div>
      <AddNote showAlert={props.showAlert}></AddNote>

      <button
        ref={ref}
        type="button"
        className="btn btn-primary my-3 d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {" "}
                Edit Note
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={note.etitle}
                    placeholder="Enter Title"
                    onChange={onChange}
                    minLength={5}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="edescription"
                    value={note.edescription}
                    id="edescription"
                    placeholder="Description"
                    onChange={onChange}
                    minLength={5}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="tag">Tag</label>
                  <input
                    type="text"
                    className="form-control"
                    name="etag"
                    value={note.etag}
                    id="etag"
                    placeholder="Tag"
                    onChange={onChange}
                    minLength={3}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
              disabled={note.etitle.length<5 || note.edescription.length<5}
                onClick={handleClick}
                type="button"
                className="btn btn-primary"
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <h1>Your Notes </h1>
      <div className="container">
      {notes.length===0 && 'No notes to display'}
      </div>
      
      <div className="row my-3">
        {notes.map((note) => {
          return (
            <NoteItem key={note._id} note={note} updateNote={updateNote} showAlert={props.showAlert}/>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
