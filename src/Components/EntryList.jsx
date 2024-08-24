import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function EntryList({ entries, deleteEntry }) {
  return (
    <div>
      <h2>Travel Entries</h2>
      {entries.length === 0 ? (
        <p>No entries available. Start adding some!</p>
      ) : (
        <ul className="list-group">
          {entries.map((entry) => (
            <li key={entry.id} className="list-group-item">
              <h5>{entry.title}</h5>
              <p>
                <strong>Location:</strong> {entry.location}
              </p>
              <p>
                <strong>Date:</strong> {entry.date}
              </p>
              <p>{entry.description}</p>
              <div className="d-flex justify-content-between">
                <Link to={`/edit/${entry.id}`} className="btn btn-warning">
                  Edit
                </Link>
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EntryList;
