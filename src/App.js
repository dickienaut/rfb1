import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar.js'
import UserItem from './components/users/UserItem.js'
import './App.css';

class App extends Component {
  render() {
    return (

      <Fragment>
        <Navbar title=' Github Finder' icon={'fab fa-github'}/>
        <UserItem />
      </Fragment>
    );
  }
}

export default App;
