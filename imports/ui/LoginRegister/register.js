import React, { Component } from 'react';

const style = {
  backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + '/images/login.jpeg'  + ")"
}

export default class Register extends Component {

  handleRegister(e) {
    e.preventDefault();
    if(this.refs.password.value == this.refs.passwordconfirm.value){
      var newUser = {
        fname: this.refs.fname.value,
        lname: this.refs.lname.value,
        username: this.refs.uname.value,
        password: this.refs.password.value
      };

    Meteor.call('user.insert', newUser, (err, result) => {
      if(err){
        console.log(err);
      }else{
        newUser = {
          fname: this.refs.fname.value,
          lname: this.refs.lname.value,
          username: this.refs.uname.value
        }
        this.props.router.history.push('/');
        this.props.onRegister(newUser);
    }
  });
    }
  }

  render() {
    return (
        <form className="form" onSubmit={this.handleRegister.bind(this)}>
            <div className="content">
                <div className="input-group form-group-no-border input-lg">
                    <input type="text" required ref='fname' placeholder="First name" className="form-control" />
                </div>

            <div className="input-group form-group-no-border input-lg">
                  <input type="text" required ref='lname' placeholder="Last name" className="form-control" />
            </div>

                      <div className="input-group form-group-no-border input-lg">
                        <input type="text" required ref='uname' placeholder="Username" className="form-control" />
                      </div>

                      <div className="input-group form-group-no-border input-lg">
                        <input type="password" required ref='password' placeholder="Password" className="form-control" />
                      </div>

                      <div className="input-group form-group-no-border input-lg">
                        <input type="password" required ref='passwordconfirm' placeholder="Confirm Password"
                         className="form-control" />
                      </div>
                    </div>

                    <div className="footer text-center submitbtn">
                      <button type='submit' className="btn btn-primary btn-round greenbtn" style={{width: '100%'}}>Submit</button>
                    </div>
                </form>
    );
  }
}
