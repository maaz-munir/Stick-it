import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [showTextField, setShowTextField] = useState(!localStorage.getItem('name'));
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSaveName = () => {
    if (name.trim() !== '') {
      localStorage.setItem('name', name);
      setShowTextField(false);
      navigate('/home');
    }
  };

  const handleContinue = () => {
    navigate('/home');
    console.log('Continue button clicked!');
  };


  return (
    <div className="h-screen bg-violet-300">
      <div className="w-full bg-indigo-600 flex flex-col items-center justify-center py-20">
        <h1 className="font-serif text-8xl italic">Stick iT</h1>
        <h3 className="py-5 font-sans text-2xl">Simplify your sticky notes with our application!</h3>
      </div>
      
      {/* second part of component */}
      <div className="py-20 w-full flex justify-center items-center flex-col">
        {showTextField ? (
          <div className="flex items-center">
            <input 
              type="text"
              id="name"
              className="text-center w-19/20 py-2 ml-20 border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Write your name here"
              value={name}
              onChange={handleInputChange}
              autoComplete="off"
            />
            <button className="ml-2 px-4 py-2 w-1/2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800" onClick={handleSaveName}>
              Lets go!
            </button>
          </div>
        ) : (
          <div>
            <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-800" onClick={handleContinue}>
              Continue where you left off, {name}!
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
