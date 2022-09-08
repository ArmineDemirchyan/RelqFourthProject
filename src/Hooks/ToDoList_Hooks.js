import React from 'react'
import {useState} from 'react'
import ToDoSmile from "../assets/ToDoSmile.mp4"
function ToDoList_Hooks() {
    const [newItem, setNewItem] = useState("")
    const [list, setList] =useState([])

    function addItem(){

        if(!newItem){
            alert("Enter an item.");
            return;
        }
        const item = {
            id: Math.floor(Math.random() * 1000),
            value:newItem
        }
        setList(oldList => [...oldList, item])
        setNewItem("");
        console.log(list);
    }
    function deleteItem(id){
        const newList = list.filter(item => item.id !== id);
        setList(newList);
    }
  return (
    <div>
        <div className="main">
        <video src={ToDoSmile} autoPlay loop muted/>
        <div className="list_div">
        <h1>To_Do_List with Hooks</h1>
        
        <input
            className="toDo_input"
            placeholder="Add an item..."
            value={newItem}
            onChange ={e => setNewItem(e.target.value)}
        />

        <button className="add_button" onClick={() => addItem()}>Add</button>
        
        <ul>
             {list.map(item =>{
               return (
                <div>
                <li key={item.id}>{item.value} 
                <button className="" onClick={() => deleteItem(item.id)}>x</button>
                </li>
                </div>
               )
            })} 
        </ul> 
        </div>
    </div>
    </div>
    
  )
}

export default ToDoList_Hooks