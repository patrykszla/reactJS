import React from 'react';
//props jest obiektem
const UsersList = (props) => {
    console.log(props);
        //metoda map zwraca kazdy element tablicy jako tablice
    //tworzymy listItems metoda map(do reacta) na tablicy users musimy sie odwolac przez props
    const listItems = props.usersList.map((user, index) =>
    <li key={index} onClick={()=>props.deleteUser(index)}>{user}</li>    //w react kazdy element musi miec klucz najprosciej po indexie
                                //rozpoznaje ktorego kliknalem po indexie
    
    );
   

    console.log(listItems);
    return (
        <ul className="users-list">
            {listItems}
        </ul> 
    )
} 


export default UsersList;