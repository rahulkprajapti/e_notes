import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const AddNote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({
    title: "",
    tag: "",
    description: " ",
  });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.tag, note.description);
    setNote({
      title: "",
      tag: "",
      description: "",
    });
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
            value={note.title}
            placeholder="Enter Title "
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
             id="description"
             name="description"
             value={note.description}
             placeholder="Enter Description"
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
            name="tag"
            id="tag"
            value={note.tag}
            placeholder="Tag"
            onChange={onChange}
            minLength={3}
            required
          />
        </div>
        <button
          disabled={note.title.length < 5 || note.description.length < 5}
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
        >
          Add Note
        </button>
      </form>
    </div>
  );
};
export default AddNote;
