import React from 'react';
import ReactDOM, { render } from "react-dom";

const LoginForm = () => {

    const handleChangeEmail = (event) => {
        //changeEmail(event.target.value);
    };
    const handleChangePassword = (event) => {
        //changePassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        //if (!isLogged) {
            //login();
        //}
    };

    return (
        <div className="loginForm">
            <h2 className="loginForm-Title">Connectez-vous !</h2>
            <p className="loginForm-Error">{loginError}</p>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <div className="loginForm-Element">
                    <input
                        name="email"
                        id="email"
                        placeholder="Adresse Email"
                        onChange={handleChangeEmail}
                        value={emailValue}
                    />
                </div>
                <div className="loginForm-Element">
                <input
                    name="password"
                    type="password"
                    placeholder="Mot de passe"
                    onChange={handleChangePassword}
                    value={passwordValue}
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