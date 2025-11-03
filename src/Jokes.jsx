//step 5

import { useEffect,useState } from "react";

function Joke(){
    const[joke,setJoke] = useState ();

    useEffect (()=>{
        async function fetchJoke() {
            const response = await fetch("https://api.chucknorris.io/jokes/random");//return a promise
            const data = await response.json();//// read raw response body and convert to js obect, also return promise
            setJoke(data.value);
            //document.title= "react app by alna ";
        }
        fetchJoke();
    },[])

    return (
        <div>
          <h2>Random Joke 🤣</h2>
          <p>{joke}</p>
          
        </div>
      );
}

export default Joke;