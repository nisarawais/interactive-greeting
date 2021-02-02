import React from 'react';
const Greeting = ({ name }) => {
   return(
    <>
        <body>
            <p className= "greeting">Hi, {name}! It is nice to meet you virtually!"</p>
        </body>
    </>
   );
};
export default Greeting;