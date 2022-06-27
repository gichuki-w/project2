import React from 'react'
import './Header.css'

import { Link } from 'react-router-dom'



export default function Header() {
  return (
    <header className='mainHeader'>
        <Link to='/'>Logo</Link>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </header>
  )
}
