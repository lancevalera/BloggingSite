import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './login.css';

import Login from './login.js';
import Register from './register.js';

const style = {
  backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + '/images/login.jpeg'  + ")"
}

export default class LoginRegister extends Component {

  renderForms(){
    if(this.props.router.location.pathname == '/login')
      return <Login onLogin={this.props.onLogin.bind(this)} router={this.props.router}/>
    else if(this.props.router.location.pathname == '/register')
      return <Register onRegister={this.props.onRegister.bind(this)} router={this.props.router}/>
  }

  render() {
    return (
      <div className="page-header" filter-color="blue">
        <div className="page-header-image" style={style}></div>
        <div className="container">
            <div className="col-md-4 content-centerlogin content-center">
                <div className="card card-login card-plain">
                  {this.renderForms()}
                </div>
            </div>
        </div>
      </div>
    );
  }
}
