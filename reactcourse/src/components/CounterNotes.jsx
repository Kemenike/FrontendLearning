import "./Counter.css"
import React, { useState } from 'react';

function Counter () {
    // const [cart, setCart] = useState({
    //     item: "apple", 
    //     quantity: 1});
    const [currentCount, adjustValue] = useState(0);
    function btn__increment () {
        adjustValue(currentCount + 1);
        // If you want to change multiple things at the same time, use a callback.
            /* 
                example {works}: 
                adjustValue((prevCount) => prevCount + 1)
                adjustValue((prevCount) => prevCount + 1)

                example {fails}:
                adjustValue(currentCount + 1);
                adjustValue(currentCount + 1);
            */
    }
    function btn__decrement () {
        adjustValue(currentCount - 1);
    }
    
    // function addApple() {
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity + 1,
    //     }));
    // }
    // function subApple() {
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity - 1,
    //     }));
    // }

    return (
        <div className="counter__wrapper">
            <button className="btn btn__decrement" onClick={btn__decrement}>-</button>
            <h1>{currentCount}</h1>
            {/* <h1>{cart.item + " " + cart.quantity}</h1> */}
            <button className="btn btn__increment" onClick={btn__increment}>+</button>
        </div>
    );     
}

export default Counter;