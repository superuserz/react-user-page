import { useState } from 'react'

import React from 'react'

const INITIAL_NAME = '';
const INITIAL_AGE = '';

function AddUser(props) {
    const [name, setName] = useState(INITIAL_NAME);
    const [age, setAge] = useState(INITIAL_AGE);
    const handleSubmit = () => {
        props.processSubmittedData({
            name: name,
            age: age
        })
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }

    return (
        <div>
            <div className="add-user-container">
                <label>Name</label>
                <input type="text" name="name" id="name" value={name} onChange={nameChangeHandler}></input>
                <label>Age</label>
                <input type="number" name="age" id="age" value={age} onChange={ageChangeHandler}></input>
                <button className="form-button" onClick={handleSubmit}>Add User</button>
            </div>
        </div>


    )
}

export default AddUser