import React, { useState } from 'react'
import ToDoSmile from "../assets/ToDoSmile.mp4";
import { FaBackspace } from 'react-icons/fa';
import { Link } from "react-router-dom";

function ToDoList_Hooks() {
    const [newItem, setNewItem] = useState("")
    const [list, setList] = useState([])

    function addItem() {

        if (!newItem) {
            alert("Enter an item.");
            return;
        }
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        }
        setList(oldList => [...oldList, item])
        setNewItem("");
        console.log(list);
    }
    function deleteItem(id) {
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }
    return (
        <div>
            <div className="main">
                <div className="overlay"></div>
                <video src={ToDoSmile} autoPlay loop muted />
                <div className="list_div">
                    <Link to="/" className="go_main_page_arrow"><FaBackspace /></Link>
                    <h1 className="app-title">To_Do_List with Hooks</h1>

                    <input
                        className="toDo_input"
                        placeholder="Add an item..."
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                    />

                    <button className="add_button" onClick={() => addItem()}>Add</button>

                    <ul>
                        {list.map(item => {
                            return (
                                <li key={item.id}>{item.value}
                                    <button onClick={() => deleteItem(item.id)}><i class="material-icons">x</i></button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ToDoList_Hooks