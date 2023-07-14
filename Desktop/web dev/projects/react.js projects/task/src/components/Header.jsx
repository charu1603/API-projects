import React from 'react'
import "../styles/Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
   <nav>
    <h1>Assignment . </h1>
    <main>
    <Link to='/'>Home</Link>
    <Link to='/Userapi'>User API</Link>
    <Link to='/Users/:id'>Users</Link>
   </main>
   </nav>
  )
}
export default Header ;
