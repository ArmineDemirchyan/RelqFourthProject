import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import ClassComponent from './ClassComponent/ClassComponent';
import Main from './components/Main';
import ToDoList_Hooks from './Hooks/ToDoList_Hooks';


function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route  path = '/' element ={<Main/>}/>
     <Route path ='/class' element={<ClassComponent/>} />
     <Route path ='/hook' element={<ToDoList_Hooks/>} />
     </Routes> 
      </BrowserRouter>
  )
}

export default App





