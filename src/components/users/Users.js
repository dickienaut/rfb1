import React, { useContext } from 'react'
import UserItem from './UserItem.js'
import Spinner from '../layout/Spinner.js'
import GithubContext from '../../context/github/githubContext.js'


const Users = () => {
  const githubContext = useContext(GithubContext)
  const {loading, users} = githubContext
  console.log(users)
  return(

    <div style={userStyle}>
      {loading && users ? <Spinner /> : users.map(user => <UserItem key={user.id} user={user} />)}
    </div>
  )
}


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
