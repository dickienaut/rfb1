import React, { useReducer } from 'react';
import GithubContext from './githubContext.js'
import GithubReducer from './githubReducer.js'
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types'


const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  }

  const [state, dispatch] = useReducer(GithubReducer, initialState)


  //This hits the github api and gets users based on the text entered in the search field
  const searchUsers = async (text) => {
    setLoading()

    fetch(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    .then(res => res.json())
    .then(users => {
      dispatch({
        type: SEARCH_USERS,
        payload: users.items
      })
    })
  }


  // Get info for an individual user
  const getUser = async (username) => {
    setLoading()

    fetch(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    .then(res => res.json())
    .then(user => {
      dispatch({
        type: GET_USER,
        payload: user
      })
    })
  }


  // Get repos for an individual user
  const getUserRepos = async (username) => {
    setLoading()


    fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      .then(res => res.json())
      .then(repos => {
        dispatch({
          type: GET_REPOS,
          payload: repos
        })
    })
  }


  //Clears the users from state
  const clearUsers = () => dispatch({type: CLEAR_USERS})


  const setLoading = () => {
    dispatch({type: SET_LOADING})
  }


  return(

    <GithubContext.Provider value={{
      users: state.users,
      user: state.user,
      repos: state.repos,
      loading: state.loading,
      searchUsers,
      clearUsers,
      getUser,
      getUserRepos
      }}
    >
      {props.children}
    </GithubContext.Provider>
  )
}

export default GithubState;
