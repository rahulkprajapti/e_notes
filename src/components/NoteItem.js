import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div> 
      <div className="card mx-3">
        <div className="card-body">
          <div className="d-flex align-items-center">
          <h5 className="card-title">{note.title}</h5>
          </div>
          <p className="card-text">{note.description}
          </p>
          <i className="fa-solid fa-trash-can mx-2"></i>
          <i className="fa-sharp fa-solid fa-file-pen mx-2"></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
