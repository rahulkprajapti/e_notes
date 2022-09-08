import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", tag: "", description: "defalut" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.tag, note.description);
  };
  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };
  return (
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
            placeholder="Enter Title"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            name="description"
            id="description"
            placeholder="Description"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tag">Tag</label>
          <input
            type="text"
            className="form-control"
            name="tag"
            id="tag"
            placeholder="Tag"
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Add Note
        </button>
      </form>
    </div>
  );
};
export default AddNote;
