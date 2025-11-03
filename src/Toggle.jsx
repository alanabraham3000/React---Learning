import { useState } from "react";


function ToggleButton(){
    const[bin,setBin]=useState(true);
    return(
       <div> <input type="checkbox" checked={bin} onChange={(e)=> setBin(e.target.checked )}/> hi
         {bin? <h6> checked</h6> : <h6> unchecked</h6>}
         
        </div>
    ); 
};

export default ToggleButton;