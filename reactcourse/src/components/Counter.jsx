import "./Counter.css"
import React, { useState } from 'react';

function Counter () {
    const [container, adjustContainer] = useState([]);
    function addPlus () {
        adjustContainer(prevContainer => [...prevContainer, "+"]); 
    }
    function addSub () {
        adjustContainer(prevContainer => [...prevContainer, "-"]);  
    }

    return (
        <div className="counter__wrapper">
            <button className="btn addSub" onClick={addSub}>-</button>
            {container}
            <button className="btn addPlus" onClick={addPlus}>+</button>
        </div>
    );     
}

export default Counter;