import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

import './navbar.css';

import NavbarLinks from './navbarlinks.js';

//represents the navbar
export default class Navbar extends Component {

  render() {
    return (
      <div>
      <nav className={"navbar navbar-expand-lg fixed-top " + (this.props.isLoggedIn ? 'bg-primary' : 'navbar-transparent')}>
        <div className="container">
        <div className="navbar-translate">
            <Link to='/' className="navbar-brand">
               BloggingSite
           </Link>

        </div>

        <div className="collapse navbar-collapse justify-content-end" id="navigation">
          <NavbarLinks loggedIn={this.props.isLoggedIn} />
        </div>
      </div>
    </nav>
    </div>
    );
  }
}
