import { useState } from "react";

import { ThemeContext } from "./context/light";
import React,{useContext} from "react";

const colors = () => {
    const color = useContext(ThemeContext);
}


function Todo(){

    const[todolist,setTodolist] = useState([]);
    const[inputText,setInputText] = useState("");

    function AddToList(inputText){
        if(inputText.trim() === "" ) return;
        setTodolist([...todolist,inputText]);
        setInputText("");
        
    }

    function deleteItem(index) {
        const updatedList = todolist.filter((element,i) => i !== index);
        setTodolist(updatedList);
      }
    
      
    return(
        <>
            
            


            <input type="text" name="" id="enter text here" onChange={(e)=>setInputText(e.target.value)} />  
           <p>{inputText}</p>
            <button onClick={()=>AddToList(inputText) } id="ok"> add </button>
            <button onClick={()=>setTodolist([])}>clear</button>
            
            <h1>hi</h1>
            <h2>helo</h2>

            <ul>
                {todolist.map((ass,index)=>(<li key={index}>{ass} 
                    <button onClick={()=>deleteItem(index)} >dlt</button>
                </li>))   }     
            </ul>
        </>
        
    )

}


export default Todo; 