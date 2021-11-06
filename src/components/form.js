import React, { useState } from 'react';


const Form = (props) => {
    // create getters, setters and state for each of my form items
    const[firstName, setFirstName] = useState("");
    const[lastName, setLastName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[passwordConfirm, setPasswordConfirm] = useState("");
    const[nameError, setNameError] = useState("");

    // createUser not needed for what we were assigned, but keeping for future reference.
    const createUser = (event) => {
        // Prevent browser refresh default on submit
        event.preventDefault();
        // building a new user object
        //const newUser = {firstName, lastName, email, password, passwordConfirm}; Don't need since we're not building a newUser
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setPasswordConfirm("");
    };

    //Handling errors with a handler.  As far as I can tell so far you would need one for each form field that you want to validate
    const handleChangeFirstName = (event) => {
        //must look at the event.target.value.length instead of the firstName.length like we do in the inline validations for consistency
        if (event.target.value.length < 2) {
            setNameError("First name must be at least 2 characters long!")
        } else {
            setNameError("");
            setFirstName(event.target.value);
        }
    }
    //Form creation, label and inputs no submit since we want it all in real time 
    return(
        <div>
            
        <form onSubmit={ createUser }>
           
            <div>
                {/*Handling First Name validation with a handler*/}
                <label>First Name :</label>
                <input type="text" onChange={ (event) => handleChangeFirstName(event)} />
                {nameError && <p>{nameError}</p>}
                {/*(firstName.length < 2 && firstName.length > 0) && <p style={{color:"red"}}>First Name must be at least 2 characters long.</p> */}
            </div>
            <div>
                <label>Last Name :</label>
                <input type="text" value={lastName} onChange={ (event) => setLastName(event.target.value)} />
                {(lastName.length < 2 && firstName.length > 0) && <p p style={{color:"red"}}>Last Name must be at least 2 characters long.</p>}
            </div>
            <div>
                <label>Email :</label>
                <input type="text" value={email} onChange={ (event) => setEmail(event.target.value)} />
                {(email.length < 5 && email.length > 0)&& <p p style={{color:"red"}}>Email must be at least 5 characters in length.</p>}
            </div>
            <div>
                <label>Password</label>
                <input type="text" value={password} onChange={ (event) => setPassword(event.target.value)} />
                {(password.length < 8 && password.length > 0) && <p p style={{color:"red"}}>Password must be 8 characters or more</p>}
            </div>
            <div>
                <label>Password Confirmation :</label>
                <input type="text" value={passwordConfirm} onChange={ (event) => setPasswordConfirm(event.target.value)} />
                {passwordConfirm !== password && <p p style={{color:"red"}}>Password confirm must match password</p>}
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