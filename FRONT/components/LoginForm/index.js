import React from 'react';
import ReactDOM, { render } from "react-dom";

const LoginForm = () => {

    let inputEmail = document.querySelector('email'); 
    let inputPassword = document.querySelector('password');

    const handleChangeEmail = (event) => {
        inputEmail = event.target.value;
        //changeEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        inputPassword = event.target.value;
        //changePassword(event.target.value);
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        //if (!isLogged) {
            //login();
        //}
        console.log("mon event : ",event);
        let form = new FormData(document.querySelector('form'));
        console.log("mon form :",form);
        const response = await fetch("http://localhost:3000/users/signUp",
        {method:'POST',body:form});
        console.log("ma response a signUp : ",response);
    };

    return (
        <div className="loginForm">
            <h2 className="loginForm-Title">Connectez-vous !</h2>
            <p className="loginForm-Error"></p>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="loginForm-Element">
                    <input
                        name="email"
                        id="email"
                        placeholder="Adresse Email"
                        //onChange={handleChangeEmail}
                        //value={emailValue}
                        //value=""
                    />
                </div>
                <div className="loginForm-Element">
                <input
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    //onChange={handleChangePassword}
                    //value={passwordValue}
                    //value=""
                />
                </div>
                <button
                type="submit"
                className="login-form-button"
                >
                CONNEXION
                </button>
            </form>
        </div>
    )
}

export default LoginForm;