import React from 'react'
import Contact from './Component/Contact'
import  Aboutus from './Component/AboutUs'
import Home from './Component/Home'

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css'


const App = () => {
  return (
    <>

      
 <Router>
        <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/about' exact element={<Aboutus/>}/>
        <Route path='/contact' exact element={<Contact/>}/>
        </Routes>
      </Router>
      

    </>
  )
}

export default App