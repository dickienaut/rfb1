import React, { Component } from 'react';

class Search extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    if(this.props.input === ''){
      this.props.setAlert('Please enter some text.', 'light')
    }
    this.props.searchUsers(this.props.input)
  }


  render() {
    const {changeText, input, clearUsers, showClear} = this.props
    console.log()

    return (

      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input onChange={(event) => changeText(event.target.value)} type='text' name='text' placeholder='Search Users....' value={input}/>
          <input type='submit' value='Search' className='btn btn-dark btn-block'/>
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>Clear Users</button>
         )}
      </div>

    );
  }

}

export default Search;
