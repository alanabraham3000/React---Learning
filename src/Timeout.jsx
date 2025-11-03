import { useState,useEffect } from "react";

function Timeoutt(){

    const[time,setTime] = useState("");

   useEffect(() => {
        const timer = setTimeout(()=>{
            setTime("this is gonna be long")
        },3000);

        return() => clearTimeout(timer);
   },[])

    return(
        <>
            <h1>{time}</h1>
        </>
    )
}




export default Timeoutt