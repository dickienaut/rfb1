import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false
  }

  componentDidMount() {
    this.setState({
      loading: true
    })

    fetch(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    .then(res => res.json())
    .then(users => this.setState({
      users: users
    }))

    this.setState({
      loading: false
    })

  }


  render() {
    const {users, loading} = this.state
    console.log(loading)
    return (

      <Fragment>
        <Navbar title=' Github Finder' icon={'fab fa-github'}/>
        <div className='container'>
          <Users loading={loading} users={users}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
