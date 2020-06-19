import React, { Component } from 'react';
import './Register.css'
class Register extends Component {
    render() {
        return (
<div>
     <div class="wrapper">
        <div class="myForm">
            <div class="formInstructionsDiv formElement">
            <h2 class="formTitle" >Sign Up</h2>
            <p class="instructionsText">Please fill in this form to create an account</p>
            </div>
            <div class="fillContentDiv formElement">
            <div class="names formContentElement">  
            <input class="inputRequest " type="text" placeholder="First Name" required/>

            <input class="inputRequest " type="text" placeholder="Last Name" required/>

        </div>
            
            <label>
                <input class="inputRequest formContentElement" type="text" placeholder="Email" required=""/>
            </label>
            <label>
                <input class="inputRequest formContentElement" type="password" placeholder="Enter password" required/>
            </label>
            <label>
                <input class="inputRequest formContentElement" type="password" placeholder="Confirm password" required/>
            </label>
        
            </div>
            <div class="submitButtonDiv formElement">
            
            <button class="submitButton">Sign Up</button>
            </div>
        </div>
</div>
            </div>
        );
    }
}

export default Register;