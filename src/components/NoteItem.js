import { React, useContext } from "react";
import noteContext from "../context/notes/noteContext";
const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote, editNote } = context;
  const { note, updateNote } = props;
  return (
    <div>
      <div className="card mx-3 my-2">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description}</p>
          <p className="card-text">{note.tag}</p>
          <i
            className="fa-solid fa-trash-can mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
          <i
            className="fa-sharp fa-solid fa-file-pen mx-2"
            onClick={()=>{updateNote(note)}}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
