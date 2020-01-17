import React from 'react';


const Navbar = ({title, icon}) => {

  return(

    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon}/>
        {title}
      </h1>
    </nav>
  )
}


export default Navbar;
