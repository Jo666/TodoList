import React from 'react';
import ReactDOM, { render } from "react-dom";

const Hello = () => (
    <div>Hello World!</div>
);

const App = () => (
      <Hello />
);

render(<App />,document.getElementById('root'));