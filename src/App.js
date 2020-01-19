import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import User from './components/users/User.js'
import Search from './components/users/Search.js'
import Alert from './components/layout/Alert.js'
import About from './components/pages/About.js'
import './App.css';

class App extends Component {

  //Overall State for App
  state = {
    users: [],
    user: {},
    userRepos: [],
    loading: false,
    input: '',
    alert: null
  }

  //Updates the text field in state when something is typed into the search bar
  changeText = (text) => {
    this.setState({
      input: text
    })
  }


  //This hits the github api and gets users based on the text entered in the search field
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


  //Clears the users from state
  clearUsers = () => {
    this.setState({
      users: []
    })
  }


  // Get info for an individual user
  getUser = async (username) => {
    this.setState({loading: true})

    fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(user => {this.setState({
        user: user,
        loading: false
      })
    })
  }


  // Get repos for an individual user
  getUserRepos = async (username) => {
    this.setState({loading: true})

    fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(repos => {this.setState({
        userRepos: repos,
        loading: false
      })
    })
  }


  //Updates the alert field of state if someone has searched without entering a search term
  //There is a timout on the function so that the alert disappears after some period
  setAlert = (msg, type) => {
    this.setState({
      alert: {msg, type}
    })
    setTimeout(() => this.setState({alert: null}), 5000)
  }


  render() {
    const {users, user, loading, input, alert, userRepos} = this.state
    console.log(userRepos)


    return (

      <Router>
        <Fragment>
          <Navbar title=' Github Finder' icon={'fab fa-github'}/>
          <Switch>
          <Route exact={true} path='/' render={props => (
            <Fragment>
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
          )}
          />
          <Route exact={true} path='/about' component={About}/>
          <Route exact={true} path='/users/:login' render={props => (
              <User {...props} getUser={this.getUser} getUserRepos={this.getUserRepos} repos={userRepos} user={user} loading={loading}/>
            )}/>

          </Switch>
        </Fragment>
      </Router>
    );
  }
}

export default App;


// _rsc
// _cer
