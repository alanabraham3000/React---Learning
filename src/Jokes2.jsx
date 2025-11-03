import { useState,useEffect } from "react";


function ChangeTitle(){

    const[count,setCount] = useState(0);

    useEffect(()=>{
        document.title =`count ${count}`;
    },[count])


    return( <>
            <input type="button" value="hi" onClick={()=>setCount(count+1)} />
        </>)
}

export default ChangeTitle;

