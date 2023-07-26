import React, {useState} from 'react'
import { GithubPicker } from 'react-color';
import { Link } from 'react-router-dom'

const Navbar = ({handleColourChange}) => {

  const [showColourPicker, setShowColourPicker]=useState(false);
  const [selectedColour,setSelectedColour]=useState('#A5B4FC')

  const handleColourPicker =()=>{
    setShowColourPicker((prevState)=>!prevState);
    // alert('Hello');
  }

  const onColorChange = (colour) =>{
    handleColourChange(colour.hex);
    setSelectedColour(colour.hex);
  }

  return (
    <nav className="bg-indigo-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or brand */}
        <Link to="/" className="text-white text-4xl font-bold italic">
          Stick iT!
        </Link>

        <ul className='flex'>
            <li className='text-pink-50 text-2xl pl-40'>
                {localStorage.name}'s Notes
            </li>
        </ul>

        {/* Navigation links */}
        <ul className="flex space-x-4">
          <button className="nav-link text-zinc-300 hover:text-blue-300" onClick={handleColourPicker}>Choose Colour</button>
          {showColourPicker &&
            <div style={{position:'absolute'}} className='mt-8'>
              <GithubPicker color={selectedColour} onChangeComplete={onColorChange}/>  
            </div>
          }
          <li>
            <Link to="/about" className="nav-link text-zinc-300 hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/Github" className="nav-link text-zinc-300 hover:text-blue-300">
              Github
            </Link>
          </li>
          <li>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' target='_blank' className='nav-link text-zinc-200'>Surprise!</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar