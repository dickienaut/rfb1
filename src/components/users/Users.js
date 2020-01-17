import React, {Component} from 'react'
import UserItem from './UserItem.js'


class Users extends Component {

  render () {
    const {users} = this.props
    console.log(users)

    return(
      <div style={userStyle}>
        {users.map(user => <UserItem key={user.id} user={user} />)}
      </div>
    )
  }
}


const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
}

export default Users;
