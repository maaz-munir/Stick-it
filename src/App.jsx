import React from 'react'
import LandingPage from './components/LandingPage'
import {Routes, Route} from 'react-router-dom'
import HomePage from './components/HomePage'

const App = () => {
  return( 
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<HomePage/>}/>
    </Routes>
  )
}

export default App