import React, {Component} from 'react';
//import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import './styles/normalize.css'
import './styles/App.css';
import HttpsRedirect from 'react-https-redirect';

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
      </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
      </a>
        </header>
      </div>
      </HttpsRedirect>
    )
  }

}

export default App;
