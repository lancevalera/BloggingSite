import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import '../../now-ui-kit.css';

export default class NavbarLinks extends Component {

  render() {
    return (
      <div>
      {(this.props.loggedIn) ?
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link to='/home' className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
                <Link to='/profile' className="nav-link">Profile</Link>
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
