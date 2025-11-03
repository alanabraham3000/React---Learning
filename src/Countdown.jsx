import { useState,useEffect } from "react";

function Counntdown(){
    const[count,setCount] = useState(10);

    useEffect(()=>{
        if(count === 0) return
    

    const timeout = setInterval(()=>{
        setCount((count)=>count-1);
    },1000)

    return() => clearInterval(timeout)

    },[count] )
    return(
        <>
            {count}
        </>
    )
}


export default Counntdown;