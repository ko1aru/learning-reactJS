import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState('');

    function incCount() {
        setCount(count + 1);
        setMsg('Incremented!');
        setTimeout(() => setMsg(''), 1000);
    };

    function handleReset() {
        setCount(0);
        setMsg('Resetted!');
        setTimeout(() => setMsg(''), 800);
    };

    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={incCount}>Increment</button>
            <button onClick={handleReset}>Reset</button>
            {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
            {msg && <p>{msg}</p>}
        </div>
    );
};

export default Counter;