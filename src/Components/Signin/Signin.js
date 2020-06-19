import React, { Component } from 'react';
import './Signin.css'

class Signin extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
        <div class="myForm">
            <div class="formInstructionsDiv formElement">
            <h2 class="formTitle" >Sign In</h2>
            <p class="instructionsText">Log Into Your Account</p>
            </div>
            <div class="middle">
            
            <label>
                <input class="inputRequest formContentElement" type="text" placeholder="Email" required/>
            </label>
            <label>
                <input class="inputRequest formContentElement" type="password" placeholder="Enter password" required/>
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

export default Signin;