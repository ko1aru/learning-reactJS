import React, { useState } from 'react';
import validator from 'validator';

const PasswordValidator = () => {
    const [password, setPassword] = useState("");
    const [strength, setStrength] = useState("");

    function handleChange(e) {
        setPassword(e.target.value);
    };

    function handleSubmit(e) {
        e.preventDefault();
        
        const conditions = {
            minLength: 8,
            minLowercase: 1,
            minUppercase: 1,
            minNumber: 1,
            minSymbols: 1,
            returnScore: true 
        };

        const isStrong = validator.isStrongPassword(password, conditions);
//        console.log(isStrong);

        if(isStrong > 47) {
            setStrength("Strong Password");
            setTimeout(() => setStrength(''), 2000);
        } else {
            setStrength("Not strong enough");
            setTimeout(() => setStrength(''), 2000);
        }
    };

    return(
        <div>
            <h2>Password Validator in ReactJS</h2>

            <form onSubmit={handleSubmit}>
                <label>Password: </label>
                <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder='Enter the password'
                />

                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>

            <div>{strength}</div>
        </div>
    );
};

export default PasswordValidator;