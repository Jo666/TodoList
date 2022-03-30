import React from 'react';
import ReactDOM, { render } from "react-dom";
import {useState,useEffect} from 'react';
import { BrowserRouter,Routes,Route,Redirect } from 'react-router-dom'
import LoginForm from './components/LoginForm'

const TestRouter = () => (<main><h1>Page 1</h1></main>)

const App = () => {

    let [isLogged,setIsLogged] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<LoginForm />} />
                <Route exact path = "/" element={<TestRouter />} />
            </Routes>
        </BrowserRouter>
    );
}

render(<App />,document.getElementById('root'));