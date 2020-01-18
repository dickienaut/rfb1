import React, { Component } from 'react';

class Search extends Component {

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.props.input)
  }

  render() {
    const {changeText, input} = this.props
    console.log()
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input onChange={(event) => changeText(event.target.value)} type='text' name='text' placeholder='Search Users....' value={input}/>
          <input type='submit' value='Search' className='btn btn-dark btn-block'/>
        </form>
      </div>
    );
  }

}

export default Search;


// _rsc
// _cer
