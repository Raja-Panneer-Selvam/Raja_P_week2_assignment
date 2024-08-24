import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function EditEntry({ entries, updateEntry }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [entry, setEntry] = useState(null);

  useEffect(() => {
    const foundEntry = entries.find((e) => e.id === parseInt(id));
    if (foundEntry) setEntry(foundEntry);
  }, [id, entries]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEntry(entry);
    navigate("/entries");
  };

  if (!entry) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Travel Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={entry.title}
            onChange={(e) => setEntry({ ...entry, title: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            value={entry.location}
            onChange={(e) => setEntry({ ...entry, location: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={entry.date}
            onChange={(e) => setEntry({ ...entry, date: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            className="form-control"
            value={entry.description}
            onChange={(e) =>
              setEntry({ ...entry, description: e.target.value })
            }
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Update Entry
        </button>
      </form>
    </div>
  );
}

export default EditEntry;
