import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import '../../now-ui-kit.css';
import './navbar.css';

import NavbarLinks from './navbarlinks.js';
import DropdownLinks from './dropdownlinks.js'

export default class navbar extends Component {

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-primary navbar-transparent">
        <div className="container">
          <div className='dropdown button-dropdown'>
            <DropdownLinks loggedIn={this.props.isLoggedIn} />
        </div>
        <div className="navbar-translate">
            <a className="navbar-brand">
               BloggingSite
           </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
   	          <span className="navbar-toggler-bar bar1"></span>
	            <span className="navbar-toggler-bar bar2"></span>
	            <span className="navbar-toggler-bar bar3"></span>
 	          </button>
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
