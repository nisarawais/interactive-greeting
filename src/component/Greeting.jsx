import React, { useState } from 'react';

const Greeting = () => {

    const [name, setName] = useState({});
    const handleChange = event => {
        setName({
            ...name, [event.target.name]: event.target.value
        });
    }
   return(
    <>
        <body>
            <p className= "greeting">Hi, {name} ! It is nice to meet you virtually!"</p>
        </body>
    </>
   );
};

export default Greeting;