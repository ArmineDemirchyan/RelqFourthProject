import {Component} from "react";
import ToDoVideoBg from "../assets/ToDoBg.mp4"


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
        <div className="content">
        
        <h1 className="app-title">My List</h1>
        <div className="container">
        <div
         style={{
            padding: 30,
            textAlign: "left",
            maxWidth: 500,
            margin: "auto"
          }}
        >
        Add an Item...
          <br/>
          <input
            type = "text"
            placeholder = "Type item here..."
            value = {this.state.newItem}
            onChange = {e => this.updateInput("newItem", e.target.value)}
          />
          <button className="add-btn btn-floating"  onClick = {() => this.addItem()}> <i class="material-icons"> + </i></button>
          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return(
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deletItem(item.id)}><i class="material-icons">x</i></button>
                </li>
               
              )             
            })}
          </ul>
          
        </div>
    </div>
      
        </div>
      </div>
    )
  }
 
}
export default ClassComponent;