import React, { Fragment, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Users from './components/users/Users.js'
import User from './components/users/User.js'
import Search from './components/users/Search.js'
import Alert from './components/layout/Alert.js'
import About from './components/pages/About.js'

import GithubState from './context/github/GithubState.js'
import './App.css';

const App = () => {

  //Overall State for App

  const [alert, setAlert] = useState(null)


  //Updates the alert field of state if someone has searched without entering a search term
  //There is a timout on the function so that the alert disappears after some period
  const showAlert = (msg, type) => {
    setAlert({msg, type})

    setTimeout(() => setAlert(null), 5000)
  }

  console.log()

  return (
    <GithubState>
      <Router>
        <Fragment>
          <Navbar title=' Github Finder' icon={'fab fa-github'}/>
          <Switch>
            <Route exact={true} path='/' render={props => (
              <Fragment>
                <div>
                  {alert ? <Alert alert={alert}/> : null}
                  <Search setAlert={showAlert}/>
                </div>
                <div className='container'>
                  <Users />
                </div>
              </Fragment>
              )}
            />
            <Route exact={true} path='/about' component={About}/>
            <Route exact={true} path='/users/:login' component={User}/>
          </Switch>
        </Fragment>
      </Router>
    </GithubState>
  );
}

export default App;


// _rsc
// _cer
