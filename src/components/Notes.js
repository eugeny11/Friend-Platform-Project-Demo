import React, { useState, useRef, useEffect } from "react";
import Note from "./Note";

function Notes() {
  let textareaRef = useRef();
  const initialState = JSON.parse(window.localStorage.getItem("notes")) || [];
  const [notes, setNotes] = useState(initialState);

  useEffect(() => {
    window.localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const saveNote = (e) => {
    e.preventDefault();
    const value = textareaRef.current.value;
    let today = new Date(),
      date =
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate() +
        " " +
        today.getHours() +
        ":" +
        today.getMinutes();

    let note = {
      title: value,
      date: date,
      id: Math.random(),
    };

    setNotes([...notes, note]);
    console.log(notes);
    textareaRef.current.value = "";
    
  };

 

  return (
    <>
      <div className="notes">
        <textarea className="input" ref={textareaRef} />

        <button className="button" onClick={saveNote}>
          Сохранить
        </button>

        {notes ? (
          <div>
            {notes.map((note) => (
              <Note note={note} notes={notes} setNotes={setNotes}/>
            ))}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
}

export default Notes;
