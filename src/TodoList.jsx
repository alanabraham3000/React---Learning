import { useEffect, useState } from "react";
import NavBar from './nav';
function TodoList(){

    const[text,setText]=useState("");
    const[toList,settoList]= useState([]);//pending list
    const[completedList,setcompletedList]= useState([]);//completed list

    
    //load items from local storage
    useEffect(()=>{       
        const savedPending = JSON.parse(localStorage.getItem("pendingTasks")) || [] ; 
        const savedCompleted = JSON.parse(localStorage.getItem("completeList")) || [];
        settoList(savedPending);
        setcompletedList(savedCompleted);
    },[]);

    //save items to local storage
    useEffect(()=>{
        localStorage.setItem("pendingTasks",JSON.stringify(toList));
        localStorage.setItem("completeList",JSON.stringify(completedList));

    },[toList,completedList]);


    // item added to pending list
    function Enterlist(text){ 
        if(text.trim() === "" ) return;
        settoList([...toList, text])
        setText("");

    }

    //item deleted from pending list
    function deleteItem(index){ 
       const updatedList= toList.filter((element,i)=> i !== index)
        settoList(updatedList)
    }

    //item transfered from pending to completed list
    function completeList(index) {
        const task = toList.find((_, i) => i === index); 
        setcompletedList([...completedList, task]);
        deleteItem(index); 
      }

    // clear items in pending list
    function clearPending(){ 
        settoList([]) // remove items from list
        localStorage.removeItem("pendingTasks") // remove item from local storage
    }
      
    return(
        <>  
            <NavBar/>
            <input type="text" name="" id="enter text here" value={text}  onChange={(e)=>setText(e.target.value)}/>
            {text}
            <button onClick={()=>Enterlist(text)}>click here</button>

            <ul>
                <h3>pending tasks</h3> <button onClick={()=>clearPending()}>clear list</button>
                {
                    toList.length ===0 ? <p>no</p> : toList.map((i,index)=>(<li key={index}>{i}
                        <button onClick={()=>deleteItem(index)}>delete</button>
                        <button onClick={()=>completeList(index)}>complete</button>
                    </li>))
                }
            </ul>

            <ul>
                <h3>completed list</h3>
                {completedList.length === 0? <p>nothing completed</p> :completedList.map((i,index)=>(<li key={index}>{i}</li>))}
            </ul>
        </>
    )

}

export default TodoList;