import React, { useState, useEffect } from 'react';

const LowCodeForm = () => {

const [count, setCount] = useState(0);

useEffect(() => {
    document.title = `You clicked ${count} times`;
  });




return (
    <div>
     <h1>Welcome Sample</h1>
     <p>Count: {count}</p>
     <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default LowCodeForm;