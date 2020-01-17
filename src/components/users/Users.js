import React, {Component} from 'react'
import UserItem from './UserItem.js'


class Users extends Component {
  state = {
    users: [
      {
        id: 1,
        login: 'mojombo',
        avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
        html_url: "https://github.com/mojombo"
      },

      {
        id: 2,
        login: "defunkt",
        avatar_url: "https://avatars0.githubusercontent.com/u/2?v=4",
        html_url: "https://api.github.com/users/defunkt"
      },

      {
        id: 3,
        login: "pjhyett",
        avatar_url: "https://avatars0.githubusercontent.com/u/3?v=4",
        html_url: "https://github.com/pjhyett"
      }
    ]
  }


  render () {
    const {users} = this.state

    return(
      <div style={userStyle}>
        {users.map(user => <UserItem key={user.id} id={user.id} login={user.login} avatar={user.avatar_url} url={user.html_url}/>)}
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
