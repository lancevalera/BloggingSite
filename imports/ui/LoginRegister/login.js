import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './login.css';

//represents the login form
export default class Login extends Component {

  //finds the user's profile based on the username and password given
  //calls the onLogin function passed by the parent
  handleSignIn(e) {
    e.preventDefault();
    Meteor.call('user.find', this.refs.username.value, this.refs.password.value, (err, result) => {
      if(err){
        console.log(err)
      }else{
        var user = {
          fname: result.fname,
          lname: result.lname,
          username: result.username,
          _id: result._id
        }
        this.props.onLogin(user);
        this.props.router.history.push("/");
      }
    })
  }

  render() {
    return (
          <form className="form" onSubmit={this.handleSignIn.bind(this)}>
              <div className="content" style={{margin: 'auto'}}>
                <div className="input-group form-group-no-border input-lg">
                    <input type="text" ref="username" placeholder="Username" className="form-control" style={{color: 'white'}} />
                </div>
                <div className="input-group form-group-no-border input-lg">
                    <input type="password" ref="password" placeholder="Password" className="form-control" style={{color: 'white'}} />
                </div>
              </div>
              <div className="footer text-center submitbtn">
                  <input type='submit' value='Login' className="btn btn-primary btn-round bluebtn" style={{width: '100%'}} />
              </div>
              <div className='pull-left'>
                <Link to='/register' className='nav-link' style={{color: 'white'}}><span> Create Account </span></Link>
              </div>
          </form>
    );
  }
}
