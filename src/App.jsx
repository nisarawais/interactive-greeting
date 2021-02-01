import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Greeting from './component/Greeting';


const App = () => {
    return(
        <div className = "container">
            <Greeting/>
        </div>
    );
}

export default App;