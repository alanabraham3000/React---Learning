import { useEffect, useState } from "react";

function Timer(){

    const[timee,setTimee] = useState(10);
    useEffect(()=>{
            if (timee === 1) return;
    

    const timo = setInterval(()=>{
            setTimee((timee)=> timee-1);
    },1000);

    return() => clearTimeout(timo);

    },[timee]);

    return(
        <>
            <h1>{timee}</h1>
            {timee === 0 && <p>Time's up! </p>}
        </>
    )

}

export default Timer;