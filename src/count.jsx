import {useState} from "react";

function Counting(){
    const[count,setCount]= useState(0);

    function addition(){
        setCount(count+1);
    }
    return(
        <div>
        <button onClick = {addition}>add </button>
        <button onClick = {() => setCount(count-1)}>sub</button>
        <h1> {count}</h1>
        </div>
    );
}

export default Counting;