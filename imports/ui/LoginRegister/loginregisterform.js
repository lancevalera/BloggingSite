import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './login.css';

import Login from './login.js';
import Register from './register.js';

const style = {
  backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + '/images/login.jpeg'  + ")"
}

//represents the page for login / register
export default class LoginRegister extends Component {
  render() {
    return (
      <div className="page-header" filter-color="blue">
        <div className="page-header-image" style={style}></div>
        <div className="container">
            <div className="col-md-4 content-centerlogin content-center">
                <div className="card card-login card-plain">
                  {this.props.children}
                </div>
            </div>
        </div>
      </div>
    );
  }
}
