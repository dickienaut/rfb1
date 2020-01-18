import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import Search from './components/users/Search.js'
import Alert from './components/layout/Alert.js'
import './App.css';

class App extends Component {

  state = {
    users: [],
    loading: false,
    input: '',
    alert: null
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
      .then(users => {
        if(users.items) {
        this.setState({
              users: users.items,
              loading: false
            })}
          else {
            this.setState({
              users: [],
              loading: false
            })
          }}
          )

    this.setState({
      input: ''
    })
  }


  clearUsers = () => {
    this.setState({
      users: []
    })
  }


  setAlert = (msg, type) => {
    this.setState({
      alert: {msg, type}
    })
    setTimeout(() => this.setState({alert: null}), 5000)
  }


  render() {
    const {users, loading, input, alert} = this.state
    console.log()

    return (

      <Fragment>
        <Navbar title=' Github Finder' icon={'fab fa-github'}/>
        <div>
          {alert ? <Alert alert={alert}/> : null}
          <Search
            input={input}
            changeText={this.changeText}
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
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
