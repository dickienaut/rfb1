import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import './App.css';

class App extends Component {

  state = {
    users: []
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(users => this.setState({
      users: users
    }))
  }



  render() {
    const {users} = this.state
    console.log()
    return (

      <Fragment>
        <Navbar title=' Github Finder' icon={'fab fa-github'}/>
        <div className='container'>
          <Users users={users}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
