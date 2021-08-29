import { useState } from 'react'
import AlertModal from '../modal/AlertModal'

import React from 'react'

const INITIAL_NAME = '';
const INITIAL_AGE = '';
const INITIAL_EMAIL = '';
const INITIAL_CONTACT = '';

function AddUser(props) {
    const [name, setName] = useState(INITIAL_NAME);
    const [age, setAge] = useState(INITIAL_AGE);
    const [email, setEmail] = useState(INITIAL_EMAIL);
    const [contact, setContact] = useState(INITIAL_CONTACT);
    const [errors, setErrors] = useState(INITIAL_CONTACT);
    const handleSubmit = () => {
        if (validRequest()) {
            props.processSubmittedData({
                name: name,
                age: age,
                email: email,
                contact: contact
            })
        }
    }
    const nameChangeHandler = (e) => {
        setName(e.target.value);
    }

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    }
    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    }
    const contactChangeHandler = (e) => {
        setContact(e.target.value);
    }
    const handleAlertSubmit = () => {
        setErrors(null);
    }
    const validRequest = () => {
        if (name.trim() === '' || age.trim() === '' || email.trim() === '' || contact.trim() === '') {
            setErrors({
                title: 'Invalid Input',
                message: 'Please Make Sure to provide non-empty values.'
            })
            return false;
        }
        return true
    }
    return (
        <div>
            <div className="add-user-container">
                <label>Name</label>
                <input type="text" name="name" id="name" value={name} onChange={nameChangeHandler}></input>
                <label>Age</label>
                <input type="number" name="age" id="age" value={age} onChange={ageChangeHandler}></input>
                <label>Email</label>
                <input type="text" name="email " id="email" value={email} onChange={emailChangeHandler}></input>
                <label>Contact</label>
                <input type="text" name="contact" id="contact" value={contact} onChange={contactChangeHandler}></input>
                <button className="form-button" onClick={handleSubmit}>Add User</button>
            </div>
            {errors && <AlertModal title={errors.title} message={errors.message} handleAlertSubmit={handleAlertSubmit}></AlertModal>}
        </div>
    )
}
export default AddUser