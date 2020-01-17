import React, {Component} from 'react';


class Navbar extends Component {
  render() {
    const {title, icon} = this.props

    return(

      <nav className='navbar bg-primary'>
        <h1>
          <i className={icon}/>
          {title}
        </h1>
      </nav>
    )
  }
}


export default Navbar;
