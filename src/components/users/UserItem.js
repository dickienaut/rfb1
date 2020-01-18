import React from 'react'


const UserItem = ({user}) => {

  return(
    
    <div className="card text-center">
      <img src={user.avatar_url} alt='' className='round-img' style={{width: '60px'}}/>
      <h3>{user.login}</h3>
      <div>
        <a href={user.html_url} value='Github Link' className='btn btn-dark btn-sm my-1'>
        Link to Github
        </a>

      </div>
    </div >
  )
}

export default UserItem;
