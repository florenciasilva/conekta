import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';


if (process.env.NODE_ENV !== 'production') {
    let axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}


ReactDOM.render(<App />, document.getElementById('root'));