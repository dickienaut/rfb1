import React, { useEffect, Fragment } from 'react';
import Spinner from '../layout/Spinner.js'
import { Link } from 'react-router-dom'
import Repos from '../repos/Repos.js'

const User = ({getUser, getUserRepos, loading, repos, user, match}) => {

  useEffect(() => {
    getUser(match.params.login)
    getUserRepos(match.params.login)
  }, [])


  const {name, avatar_url, location, bio, blog, company, login, html_url, followers, following, public_repos, public_gists, hireable } = user


  if (loading) return ( <Spinner />)


  return (

    <Fragment>
      <Link exact to='/' className='btn btn-light'>Back to Search</Link>
      Hireable: {' '}
      {hireable ? (<i className='fas fa-check text-success'/>) : (<i className='fas fa-times-circle text-danger'/>)}
      <div className='card grid-2'>
        <div className='all-center'>
          <img className='round-img' src={avatar_url} alt='Nothing here...' style={{width: '150px'}}/>
          <h1>{name ? name : login}</h1>
          <p>Location: {location ? location : 'No location info'}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Biography</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>Visit Github Profile</a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Company:</strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {login && (
                <Fragment>
                  <strong>Blog:</strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers} </div>
        <div className='badge badge-success'>Following: {following} </div>
        <div className='badge badge-danger'>Public Repos: {public_repos} </div>
        <div className='badge badge-dark'>Public Gists {public_gists} </div>
      </div>
      <div>
        <Repos repos={repos}/>
      </div>
    </Fragment>
  );
}

export default User;
