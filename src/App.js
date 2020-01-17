import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar.js'
import './App.css';

class App extends Component {
  render() {
    return (

      <Fragment>
        <Navbar title=' Github Finder' icon={'fab fa-github'}/>
        <h1>Welcome to the App</h1>
      </Fragment>
    );
  }
}

export default App;
