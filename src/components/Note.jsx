import React, { useState } from 'react';

const Note = ({ note, updateNote, colour, deleteNote}) => {
  const [heading, setHeading] = useState(note.heading);
  const [body, setBody] = useState(note.body);


  const handleHeadingChange = (e) => {
    setHeading(()=>e.target.value);
    console.log("e.target.value:  ",e.target.value);
    console.log("heading:  ",heading);
    note.heading=e.target.value;
    updateNote({...note,heading:e.target.value})
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
    note.body=e.target.value;
    updateNote({ ...note, body: e.target.value });
  };

  return (
    <div
      style={{
        cursor:'move',
        backgroundColor: colour, // bg-colour of note, add functionality to change colour by
        width: '300px',
        height: '300px',
        margin: '10px', // margin bw notes
      }}
    >
        <div className='flex space-x-4'>
            <input
                type="text"
                placeholder='Enter Title'
                value={heading}
                onChange={handleHeadingChange}
                className="text-lg font-semibold bg-transparent w-full outline-none px-2"
            />
            <button className='hover:bg-slate-900' onClick={deleteNote}>❌</button>
        </div>
      <textarea rows="10"
        placeholder='Enter the contents of your Stick iT note here'
        value={body}
        // placeholder='Write your content here'
        onChange={handleBodyChange}
        className="mt-2 bg-transparent w-full  resize-none outline-none px-2"
      />
    </div>
  );
};

export default Note;
