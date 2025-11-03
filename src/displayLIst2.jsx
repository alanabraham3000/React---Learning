function Movie({title}){
    return <li><input type="checkbox"/> {title.name}</li>
};

function DisplayList2(){
    const friends =[
        {id:1, name:"alana"},
        {id:2, name : "alan2"},
        {id:3, name : "aalan2"},
        
    ];

    return(
        <ul >
            {friends.map((friend)=><Movie title={friend}/>)}
        </ul>
    )
}

export default DisplayList2;