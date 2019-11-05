import React from 'react';

//props jest obiektem
const Heading = (props) => {
    console.log(props);
    return <h1>{props.text}</h1>;
} 


export default Heading;