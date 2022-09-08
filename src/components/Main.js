import React from 'react'
import "../App.css"
import { Link } from 'react-router-dom'
import VideoBg from "../assets/VideoBg.mp4"
export default function Main() {
  
  return (
    <div className="main">
        <div className="overlay"></div>
        <video src={VideoBg} autoPlay loop muted/>
        <div className="content">
            <h1>Welcome to my site</h1>
            <Link to="/hook">ToDoList_Hooks</Link>
            <Link to="/class">ToDoList_Component</Link>
        </div>
    </div>
  )
}
