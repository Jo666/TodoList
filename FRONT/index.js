import React from 'react';
import ReactDOM, { render } from "react-dom";

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


/*
const Header = ({ baseAmount, setBaseAmount }) => {
    const handleOnChange = (event) => {
      // convertion de la string en number
      const newBaseAmount = Number(event.target.value);
      setBaseAmount(newBaseAmount);
    };
  
    return (
      <header className="header">
        <h1 className="header__title">Converter</h1>
        <p className="header__base-amount">
          <input
            className="header__input"
            type="number"
            // toString ici permet de ne plus avoir le zéro qui se met devant
            // lorsqu'on efface tout et qu'on écrit une nouvelle valeur
            value={baseAmount.toString()}
            onChange={handleOnChange}
          />
          <span>Euro</span>
        </p>
      </header>
    );
  };*/

const App = () => (
      <Header />
);

render(<App />,document.getElementById('root'));