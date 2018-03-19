import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class NavbarLinks extends Component {

  render() {
    return (
      <div>
      {(this.props.loggedIn) ?
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to='/' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to={'/profile/'+this.props.loggedIn._id} className="nav-link">Profile</Link>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">Sign out</a>
            </li>
            </ul>
            :
            <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/login' className="nav-link">Sign in</Link>
            </li>
            </ul>
          }
      </div>
    );
  }
}
