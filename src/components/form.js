import React, { useState } from 'react';


const Form = (props) => {
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConfirm, setPasswordConfirm] = useState("");

    const createUser = (event) => {
        // Prevent browser refresh default from submit
        event.preventDefault();

        const newUser = {firstName, lastName, email, password, passwordConfirm};
        console.log("Welcome", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };

    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>First Name :</label>
                <input type="text" value={firstName} onChange={ (event) => setFirstName(event.target.value)} />
            </div>
            <div>
                <label>Last Name :</label>
                <input type="text" value={lastName} onChange={ (event) => setLastName(event.target.value)} />
            </div>
            <div>
                <label>Email :</label>
                <input type="text" value={email} onChange={ (event) => setEmail(event.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="text" value={password} onChange={ (event) => setPassword(event.target.value)} />
            </div>
            <div>
                <label>Password Confirmation :</label>
                <input type="text" value={passwordConfirm} onChange={ (event) => setPasswordConfirm(event.target.value)} />
            </div>
            
    </form>
    <h3>Your Form Data</h3>
    <p>First Name : {firstName} </p>
    <p>Last Name : {lastName}</p>
    <p>Email : {email}</p>
    <p>Password : {password}</p>
    <p>Confirm Password : {passwordConfirm}</p>
    </div>

    );



};

export default Form;