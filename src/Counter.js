import React from "react";
import useCounter from "./useCounter";

 
const Counter = () => {
    const{ count, increment, decrement, reset } = useCounter( 0, 1 );
    return (
        <div>
            <h1>Count : { count } </h1>
            <button  onClick={ increment }> Increment </button> &nbsp;
            <button  onClick={ decrement }> Decrement</button> &nbsp;
            <button  onClick={ reset }>Reset</button>
        </div>
    );
};

export default Counter;