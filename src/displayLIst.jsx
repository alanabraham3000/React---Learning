    function DisplayList(){
        const friends = [
            {id:1 , name:"alan"},
            {id:2 , name:"alan2"},
            {id:3 , name:"alan3"},
            ];
        

        return(
            <ul>
                {friends.map((friend)=> (
                    <li key={friend.id}>{friend.name}</li>
                ))}
            </ul>
        );
    }

    export default DisplayList;