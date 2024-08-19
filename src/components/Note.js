import React from "react";

const Note = ({ note, notes, setNotes }) => {
  return (
    <div className="note" key={note.id}>
      <div className="note_date_and_title">
        <div className="note_date">{note.date}</div> {note.title}
      </div>
      <div className="icons">
        <button className="icon">
          <img src="img/icon_envelope.svg" alt="envelope" />
        </button>
        <button className="icon">
          <img src="img/icon_edit_btn.svg" alt="edit" />
        </button>
        <button className="icon">
          <img src="img/icon_trash_btn.svg" alt="envelope" />
        </button>
      </div>
    </div>
  );
};

export default Note;
