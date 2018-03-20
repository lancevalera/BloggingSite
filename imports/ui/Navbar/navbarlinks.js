import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie';

//represents the navbar links found on the right of the navbar
export default class NavbarLinks extends Component {

  //removes the user cookie, refresh the browser to get rid of state
  signOut(e){
    e.preventDefault();

    const cookies = new Cookies();

    cookies.remove('user');
    window.location.reload();
  }

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
                <a href="#" className="nav-link" onClick={this.signOut.bind(this)}>Sign out</a>
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
