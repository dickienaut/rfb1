import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar.js'
import Alert from './components/layout/Alert.js'
import User from './components/users/User.js'
import About from './components/pages/About.js'
import Home from './components/pages/Home.js'

import GithubState from './context/github/GithubState.js'
import AlertState from './context/alert/AlertState.js'
import './App.css';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar title=' Github Finder' icon={'fab fa-github'}/>
            <Alert />
            <Switch>
              <Route exact={true} path='/' component={Home}/>
              <Route exact={true} path='/about' component={About}/>
              <Route exact={true} path='/users/:login' component={User}/>
            </Switch>
          </Fragment>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;


// _rsc
// _cer
