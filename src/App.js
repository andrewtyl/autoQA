import React, {Component} from 'react';
//import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';
import './styles/normalize.css'
import './styles/App.css';
import HttpsRedirect from 'react-https-redirect';
//import components
import UploadAllChannels from './components/UploadAllChannels';
import UploadEmail from './components/UploadEmail';
import UploadVoice from './components/UploadVoice';
import UploadChat from './components/UploadChat';
import Results from './components/Results';
const parse = require('csv-parse');
const fs = require('fs');

class App extends Component {
  render() {
    return (
      <HttpsRedirect>
      <div className="App">
        <UploadAllChannels />
        <UploadEmail />
        <UploadVoice />
        <UploadChat />
        <Results />
      </div>
      </HttpsRedirect>
    )
  }

}

export default App;
