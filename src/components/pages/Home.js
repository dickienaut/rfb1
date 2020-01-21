import React from 'react';
import Users from '../users/Users.js'
import Search from '../users/Search.js'

const Home = ({props}) => {
  return(
    <div>
      <Search />
      <Users />
    </div>
  )
};

export default Home;
