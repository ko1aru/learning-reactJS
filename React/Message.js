import React, { Component, useState } from 'react';

const Message = () => {
    const [message, setMessage] = useState('Welcome')
    const handleChange = (e) => {
        setMessage('Thank you')
    }

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={handleChange}>Subscribe</button>
        </div>
    )
}

export default Message;