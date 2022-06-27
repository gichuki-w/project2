import React from 'react'
import Home from './Home'
import About from './About'
import './Pages.css'
import Header from './Header'
import Footer from './Footer'


import {BrowserRouter, Route, Routes} from 'react-router-dom'


export default function Pages() {
  return (

    <BrowserRouter>
      <div className='Pages'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />} />
          <Route path='*' element={<p>URL not found JG</p>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>

  )
}
