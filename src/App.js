import React, { Fragment, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import User from './components/users/User.js'
import Search from './components/users/Search.js'
import Alert from './components/layout/Alert.js'
import About from './components/pages/About.js'
import './App.css';

const App = () => {

  //Overall State for App
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [userRepos, setUserRepos] = useState([])
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(null)


  //This hits the github api and gets users based on the text entered in the search field
  const searchUsers = async (text) => {
    setLoading(true)

    fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(users => {
        if(users.items) {
          setUsers(users.items)
          setLoading(false)
        }
          else {
            setUsers([])
            setLoading(false)
          }}
        )
  }


  //Clears the users from state
  const clearUsers = () => {
    setUsers([])
  }


  // Get info for an individual user
  const getUser = async (username) => {
    setLoading(true)

    fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(user => {
        setUser(user)
        setLoading(false)

    })
  }


  // Get repos for an individual user
  const getUserRepos = async (username) => {
    setLoading(true)


    fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(repos => {
        setUserRepos(repos)
        setLoading(false)
    })
  }


  //Updates the alert field of state if someone has searched without entering a search term
  //There is a timout on the function so that the alert disappears after some period
  const showAlert = (msg, type) => {
    setAlert({msg, type})

    setTimeout(() => setAlert(null), 5000)
  }

  console.log(loading)

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
              searchUsers={searchUsers}
              clearUsers={clearUsers}
              showClear={users.length > 0 ? true : false}
              setAlert={showAlert}
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
            <User {...props} getUser={getUser} getUserRepos={getUserRepos} repos={userRepos} user={user} loading={loading}/>
          )}/>

        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;


// _rsc
// _cer
