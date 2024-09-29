import { useState } from 'react';
 
const useCounter = (initialValue = 0, step = 1) => {

    const [count, setCount] = useState(initialValue);

    const increment = () => {
        console.log('increment');
        setCount(count + step);
    };

    const decrement = () => {
        setCount(count - step);
    };

    const reset = () => {
        setCount(initialValue);
    };

    return { count, increment, decrement, reset };
};

export default useCounter;