import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './login.css';

import LoginForm from './loginForm.js';
/*import backgroundImage from 'process.env.PUBLIC_URL + images/login.jpeg';
*/
const style = {
  backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + '/images/login.jpeg'  + ")"
}

// App component - represents the whole app
export default class Login extends Component {

  render() {
    return (
      <div className="page-header" filter-color="blue">
        <div className="page-header-image" style={style}></div>
        <div className="container">
            <div className="col-md-4 content-center">
                <div className="card card-login card-plain">
                  <LoginForm />
                </div>
            </div>
        </div>
      </div>
    );
  }
}
