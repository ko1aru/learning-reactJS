import React, { useState } from 'react';

const Addition = () => {
    const[num1, setNum1] = useState(0);
    const[num2, setNum2] = useState(0);
    const[sum, setSum] = useState(null);

    const calculateSum = (e) => {
        e.preventDefault();
        setSum(parseFloat(num1) + parseFloat(num2));
    }

    const handleChange1 = (e) => {
        setNum1(e.target.value);
    }
    const handleChange2 = (e) => {
        setNum2(e.target.value);
    }

    return (
        <form onSubmit={calculateSum}>
            <div>
                <label for="num1">Number 1: </label>
                <input type="number" value={num1} onChange={handleChange1} />
            </div>
            <div>
                <label for="num2">Number 2: </label>
                <input type="number" value={num2} onChange={handleChange2} />
            </div>
            {sum && <p>Sum is: {sum} </p>}
            <button type="submit">Submit</button>
        </form>
    )
}

export default Addition;