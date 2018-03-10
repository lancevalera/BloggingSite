import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './navbar.css';

// App component - represents the whole app
export default class navbar extends Component {

  render() {
    return (
      <div>
      <nav className="navbar navbar-expand-lg fixed-top bg-primary navbar-transparent">
        <div className="container">
          <div className='dropdown button-dropdown'>
            <a href="#" className='dropdown-toggle' id='navbarDropdownMenuLink1' data-toggle='dropdown'>
              <span className='button-bar'></span>
              <span className='button-bar'></span>
              <span className='button-bar'></span>
            </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1">
            <a className="dropdown-item" href="#">About</a>
            <a className="dropdown-item" href="#">Contact Us</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Logout</a>
          </ul>
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
    	    <ul className="navbar-nav" >
                <li className="nav-item">
                    <a className="nav-link">
                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Profile</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
</div>
    );
  }
}
