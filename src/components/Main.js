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
            <h1 className="app-main-title">Welcome to my site</h1>
            <div >
            <Link to="/hook"><button className="link_style">ToDoList_Hooks</button></Link>
            <Link to="/class"><button className="link_style">ToDoList_Component</button></Link>
            </div>
        </div>
    </div>
  )
}
