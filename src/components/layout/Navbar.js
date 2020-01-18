import React from 'react';
import {Link} from 'react-router-dom'


const Navbar = ({title, icon}) => {

  return(

    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}/>
        {title}
      </h1>
      <Link exact to='/'>Home</Link>
      <Link exact to='/about'>About</Link>
    </nav>
  )
}


export default Navbar;
