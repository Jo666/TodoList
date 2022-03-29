import React from 'react';
import ReactDOM, { render } from "react-dom";
import {useState,useEffect} from 'react';
import { BrowserRouter,Routes,Route,Redirect } from 'react-router-dom'

const TestRouter = () => (<h1>Page 1</h1>)

const TestRouter2 = () => (<main><h1>Page 2</h1></main>)

const App = () => {

    let [isLogged,setIsLogged] = useState(false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<TestRouter />} />
                <Route exact path = "/" element={<TestRouter2 />} />
            </Routes>
        </BrowserRouter>
    );
}

render(<App />,document.getElementById('root'));