import {  useState } from "react";

function Childd(props){
    return(
    <button  onClick={()=>props.cname(`${props.name}`)}>{props.name}</button>);
}

function Parentt(){
    const[message,setMessage] = useState("");

    function settingName(data){
        setMessage(data);
        console.log({message})
    }

    return(
        <>
            <h1>child Parent</h1>
            <Childd name="alan" cname={settingName}/>

            <p> {message}</p>
        </>
    )


}


export default Parentt;