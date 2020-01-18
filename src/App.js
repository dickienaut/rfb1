import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import Search from './components/users/Search.js'
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false,
    input: ''
  }


  changeText = (text) => {
    this.setState({
      input: text
    })
  }


  searchUsers = async (text) => {
    this.setState({
      loading: true
    })

    fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(users => this.setState({
              users: users.items,
              loading: false
            }))

    this.setState({
      input: ''
    })
  }


  clearUsers = () => {
    this.setState({
      users: []
    })
  }


  render() {
    const {users, loading, input} = this.state
    console.log()

    return (

      <Fragment>
        <Navbar title=' Github Finder' icon={'fab fa-github'}/>
        <div>
          <Search
            input={input}
            changeText={this.changeText}
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            />
        </div>
        <div className='container'>
          <Users loading={loading} users={users}/>
        </div>
      </Fragment>

    );
  }
}

export default App;
