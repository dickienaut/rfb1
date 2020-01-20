import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext.js'

const Search = ({ setAlert }) => {
  const githubContext = useContext(GithubContext)


  //Updates the text field in state when something is typed into the search bar
  const changeText = (text) => {
    githubContext.setInput(text)
  }


  const onSubmit = (e) => {
    e.preventDefault();
    if(githubContext.input === ''){
      setAlert('Please enter some text.', 'light')
    }
    githubContext.searchUsers(githubContext.input)
  }

  return (

    <div>
      <form className='form' onSubmit={onSubmit}>
        <input onChange={(event) => changeText(event.target.value)} type='text' name='text' placeholder='Search Users....' value={githubContext.input}/>
        <input type='submit' value='Search' className='btn btn-dark btn-block'/>
      </form>
      {githubContext.users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear Users</button>
       )}
    </div>
  );
}

export default Search;
