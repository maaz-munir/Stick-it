import React, { useState, useCallback,useEffect } from 'react';
import Navbar from './Navbar';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Note from './Note';

const HomePage = () => {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))||[]);
  const [colour,setColour] = useState(()=>localStorage.getItem('colour')||'#A5B4FC');


  const handleColourChange = (colour) =>{
    setColour(colour);
    localStorage.setItem('colour',colour);
  }

  // Function to add a new note
  const addNewNote = () => {
    const newNote = {
      id: Math.random().toString(),
      heading: '',
      body: '',
    };
    setNotes([...notes, newNote]);
  };

  // Save notes to local storage whenever 'notes' state changes
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  // Function to update a note
  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) => (note.id === updatedNote.id ? updatedNote : note));
    setNotes(updatedNotes);
  };

  // remove/delete a note
  const deleteNote =(id)=>{
      setNotes(notes.filter((note)=>note.id!==id));
      console.log(id);
  }


  return (
    <div className="h-screen">
      <Navbar handleColourChange={handleColourChange} />
      <div className="flex flex-col items-center justify-center flex-grow bg-gray-100">
        {/* Your content goes here */}
        <p className="text-lg">Start organizing your sticky notes!</p>
        <button onClick={addNewNote} className="p-2 m-4 bg-indigo-600 text-white rounded hover:indigo-800">
            Add New Note
        </button>
      <DndProvider backend={HTML5Backend}>
        <div className="h-screen">
          <div className="flex flex-wrap">
            {notes.map((note) => (
              <Note key={note.id} note={note} updateNote={updateNote} colour={colour} deleteNote={()=>deleteNote(note.id)}/>
            ))}
          </div>
        </div>
      </DndProvider>
      </div>
    </div>
  );
};

export default HomePage;
