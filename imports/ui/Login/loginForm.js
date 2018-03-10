import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './login.css';
/*import backgroundImage from 'process.env.PUBLIC_URL + images/login.jpeg';
*/
const style = {
  backgroundImage: "url(" +  window.location.href + 'images/login.jpeg'  + ")"
}

// App component - represents the whole app
export default class LoginForm extends Component {

  render() {
    return (
        <form className="form" method="" action="">
          <div className="content" style={{margin: 'auto'}}>
            <div className="input-group form-group-no-border input-lg">
              <input type="text" placeholder="Username" className="form-control" style={{color: 'white'}} />
            </div>
            <div className="input-group form-group-no-border input-lg">
              <input type="text" placeholder="Password" className="form-control" style={{color: 'white'}} />
            </div>
          </div>
          <div className="footer text-center submitbtn">
              <button className="btn btn-primary btn-round bluebtn" style={{width: '100%'}}>Login</button>
          </div>
          <div className='pull-left'>
              <a className='nav-link' style={{color: 'white'}}><span> Create Account </span></a>
          </div>
      </form>
    );
  }
}
