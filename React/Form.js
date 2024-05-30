import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        contact: '',
        gender: '',
        subjects: [],
        resume: null,
        url: '',
        choice: '',
        about: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if(type === 'checkbox') {
            setFormData((prevState) => ({
                ...prevState,
                subjects: checked
                    ? [...prevState.subjects, value]
                    : prevState.subjects.filter((subject) => subject !== value)
            }));
        } else if (type === 'file') {
            setFormData({
                ...formData,
                resume: e.target.files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            contact: '',
            gender: '',
            subjects: [],
            resume: null,
            url: '',
            choice: '',
            about: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted!', formData);
    };

    return(
        <div>
            <h2>Form in React</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name*: </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder='Enter first name: '
                        required
                    />
                </div>

                <div>
                    <label>Last Name*: </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder='Enter last name'
                        required
                    />
                </div>

                <div>
                    <label>Email*: </label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder='Enter your email-id'
                        required
                    />
                </div>

                <div>
                    <label>Contact*: </label>
                    <input
                        type="tel"
                        name='contact'
                        value={formData.contact}
                        onChange={handleChange}
                        placeholder='Enter Mobile no.'
                        required
                    />
                </div>

                <div>
                    <label>Gender*: </label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={formData.gender === 'male'}
                        onChange={handleChange}
                        required
                    />
                    <label>Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={formData.gender === 'female'}
                        onChange={handleChange}
                        required
                    />
                    <label>Female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        checked={formData.gender === 'other'}
                        onChange={handleChange}
                        required
                    />
                    <label>Other</label>
                </div>

                <div>
                    <label>Your Best Subjects: </label>
                    <input
                        type="checkbox"
                        name="subjects"
                        value="english"
                        checked={formData.subjects.includes('english')}
                        onChange={handleChange}
                    />
                    <label>English</label>
                    <input
                        type="checkbox"
                        name="subjects"
                        value="maths"
                        checked={formData.subjects.includes('maths')}
                        onChange={handleChange}
                    />
                    <label>Maths</label>
                    <input
                        type="checkbox"
                        name="subjects"
                        value="physics"
                        checked={formData.subjects.includes('physics')}
                        onChange={handleChange}
                    />
                    <label>Physics</label>
                    <input
                        type="checkbox"
                        name="subjects"
                        value="chemistry"
                        checked={formData.subjects.includes('chemistry')}
                        onChange={handleChange}
                    />
                    <label>Chemistry</label>
                </div>

                <div>
                    <label>Upload Resume: </label>
                    <input
                        type="file"
                        name="resume"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Enter URL: </label>
                    <input
                        type="url"
                        name="url"
                        value={formData.url}
                        onChange={handleChange}
                        placeholder='Enter URL'
                    />
                </div>

                <div>
                    <label>Select your choice: </label>
                    <select
                        name="choice"
                        value={formData.choice}
                        onChange={handleChange}
                    >
                        <option value="" disabled>Select your Ans</option>
                        <option value="option 1">Option 1</option>
                        <option value="option 2">Option 2</option>
                        <option value="option 3">Option 3</option>
                    </select>
                </div>

                <div>
                    <label>About</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleChange}
                        placeholder='About Yourself'
                    />
                </div>

                <div>
                    <button type="reset" onClick={handleReset}>Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Form;