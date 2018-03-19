import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './login.css';

const style = {
  backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + '/images/login.jpeg'  + ")"
}

// App component - represents the whole app
export default class Login extends Component {

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

                </div>
            </div>
        </div>
      </div>
    );
  }
}
