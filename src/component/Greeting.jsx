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
        <header>
            <h1>Test</h1>
        </header>
    </>
   );
};

export default Greeting;