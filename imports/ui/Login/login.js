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

  handleSignIn(e) {
    e.preventDefault();
    console.log(this.refs.username);
    this.props.onLogin(this.refs.username.value, this.refs.password.value);
  }

  render() {
    console.log(this.props);
    return (
      <div className="page-header" filter-color="blue">
        <div className="page-header-image" style={style}></div>
        <div className="container">
            <div className="col-md-4 content-center">
                <div className="card card-login card-plain">

                <form className="form" onSubmit={this.handleSignIn.bind(this)}>
                  <div className="content" style={{margin: 'auto'}}>
                    <div className="input-group form-group-no-border input-lg">
                      <input type="text" ref="username" placeholder="Username" className="form-control" style={{color: 'white'}} />
                    </div>
                    <div className="input-group form-group-no-border input-lg">
                      <input type="text" ref="password" placeholder="Password" className="form-control" style={{color: 'white'}} />
                    </div>
                  </div>
                  <div className="footer text-center submitbtn">
                      <input type='submit' value='Login' className="btn btn-primary btn-round bluebtn" style={{width: '100%'}} />
                  </div>
                  <div className='pull-left'>
                      <a className='nav-link' style={{color: 'white'}}><span> Create Account </span></a>
                  </div>
                </form>

                </div>
            </div>
        </div>
      </div>
    );
  }
}
