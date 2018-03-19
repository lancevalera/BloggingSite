import React, { Component } from 'react';

export default class DropdownLinks extends Component {

  render() {
    return (
      <div>
      <a href="#" className='dropdown-toggle' id='navbarDropdownMenuLink1' data-toggle='dropdown'>
        <span className='button-bar'></span>
        <span className='button-bar'></span>
        <span className='button-bar'></span>
      </a>

      <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
        <a className="dropdown-item" href="#">About</a>
        <a className="dropdown-item" href="#">Contact Us</a>
        <div className="dropdown-divider"></div>
        {(this.props.loggedIn) ? <a className="dropdown-item" href="#">Logout</a> : '' }
      </ul>
      </div>
    );
  }
}
