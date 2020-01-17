import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import './App.css';

class App extends Component {
  render() {
    return (

      <Fragment>
        <Navbar title=' Github Finder' icon={'fab fa-github'}/>
        <div className='container'>
          <Users />
        </div>
      </Fragment>
    );
  }
}

export default App;
