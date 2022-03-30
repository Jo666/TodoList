import React from 'react';
import ReactDOM, { render } from "react-dom";
import {useState,useEffect} from 'react';
import { BrowerRouter } from 'react-router-dom'

/*********** Stateless Component */
const Hello = (props) => (
    <div>Hello World!
        <p>test coucou {props.name}</p>
    {props.name != "toto" && "pas le droit de se connecter"}
    </div>
);


/****************** Stateful Component  */
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    handleSubmit(event) {
        alert('Le nom a été soumis : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Nom :
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
          </form>
        );
    }
}


const Compteur = (props) => {

    let [count,setCount] = useState(0);
    const handleOnClick = (e) => {
        setCount(count + 1);
        props.setIsLogged(true);
    }

    useEffect(() => {
        document.title = `Vous avez cliqué ${count} fois7`;
        console.log(props.isLogged);
    })
    
    return (
        <div>
            <p>Vous avez cliqué {count} fois</p>
            <button onClick={handleOnClick}> Cliquez içi </button>
        </div>
    );
};


const App = () => {

    let [isLogged,setIsLogged] = useState(false);

    return (
        <BrowerRouter>
            <Compteur isLogged={isLogged} setIsLogged={setIsLogged}/>
        </BrowerRouter>
    );
}

render(<App />,document.getElementById('root'));