import { useState } from "react";

function Child(props){
    return(
    <>
    <button id={props.co} onClick={()=>props.cc(props.co)} >{props.co}</button>
   
        <h1>{props.coS}</h1>
        </>
    )
}

function Parent(){
    const[colour,setColour] = useState("yellow");

    function updateColour(data){
        setColour(data)
        console.log({data})
        
    }

    return(
        <div style={{
            backgroundColor: colour,
            height: "200px",
            padding: "20px",
            textAlign: "center",
            border: "2px solid black",
          }}>
        

        <Child co="green" cc={updateColour}/>
        <Child co="red" cc={updateColour}/>
        <Child co="purple" cc={updateColour}/>
        <h2 > hi</h2>
        {colour}
        </div>
        
       
    );
}


export default Parent;