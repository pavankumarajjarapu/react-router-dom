import React from 'react'
import { Link } from 'react-router-dom'

function Navi() {
  return (
    <div>
      <nav>
        <Link to={"/"}> Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/signup"}>Signup</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
    </div>
  )
}

export default Navi
