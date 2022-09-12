import {Component} from "react";
import ToDoVideoBg from "../assets/ToDoBg.mp4";
import {FaBackspace} from 'react-icons/fa';
import { Link } from "react-router-dom";

class ClassComponent extends Component{
  constructor(props){
    super(props);
    this.state = {
      newItem:"",
      list:[]
    }
  }
  updateInput(key, value){
    this.setState({
      [key]: value
    })
  }
  addItem(){
    const newItem = {
      id:1 + Math.random(),
      value: this.state.newItem.slice()
    }
    const list = [...this.state.list];
    list.push(newItem)

    this.setState({
      list,
      newItem:""
    });
  }
  deletItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(xndzor => xndzor.id!== id);
    this.setState({list: updatedList})
  }
  render(){
    return(
      <div className="main">
        <div className="overlay"></div>       
        <video src={ToDoVideoBg} autoPlay loop muted/>
        
        <div className="list_div">
        <Link to="/" className="go_main_page_arrow"><FaBackspace/></Link>
        
        <h1 className="app-title">To_Do_List with ClassComponent</h1>
          <input
            className="toDo_input"
            type = "text"
            placeholder = "Type item here..."
            value = {this.state.newItem}
            onChange = {e => this.updateInput("newItem", e.target.value)}
          />
          <button className="add_button"  onClick = {() => this.addItem()}> <i class="material-icons"> + </i></button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return(
                
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deletItem(item.id)}><i class="material-icons">x</i></button>
                </li>
               
              )             
            })}
          </ul>
          
        </div>
    </div>
      
        
      
    )
  }
 
}
export default ClassComponent;