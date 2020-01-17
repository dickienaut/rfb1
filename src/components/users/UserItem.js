import React, {Component} from 'react'


class UserItem extends Component {


  render() {
    const {login, id, avatar, url} = this.props

    return(
      <div className="card text-center">
        <img src={avatar} alt='' className='round-img' style={{width: '60px'}}/>
        <h3>{login}</h3>
        <div>
          <a href={url} value='Github Link' className='btn btn-dark btn-sm my-1'>
          Link to Github
          </a>

        </div>
      </div >
    )

  }
}

export default UserItem;
