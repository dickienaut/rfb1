import React, { Component } from 'react';

class User extends Component {

  componentDidMount() {
    const { match: { params } } = this.props
    this.props.getUser(params.login)

  }

  render() {
    const {name, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user
    console.log()
    return (
      <div>{login}</div>
    );
  }

}

export default User;
