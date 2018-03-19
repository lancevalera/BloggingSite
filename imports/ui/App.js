import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor';
import Cookies from 'universal-cookie';

import '../now-ui-kit.css';

import Navbar from './Navbar/navbar.js';
import Home from './Home/home.js';
import Profile from './Profile/profile.js';
import CreatePost from './CreatePost/createpost.js';
import BlogPost from './BlogPost/blogpost.js';
import LoginRegister from './LoginRegister/loginregisterform.js';

// App component - represents the whole app
export default class App extends Component {
  constructor(props){
    Meteor.subscribe('users');
    super(props);

    this.state = {
      user: null
    }
  }

  //checks to see if user session is already created
  componentWillMount(){
    const cookies = new Cookies();
    if(cookies.get('user') != 'null'){
      this.setUser(cookies.get('user'));
    }
  }

  //creates user session
  setUser(userToBeSet){
    this.setState({user: userToBeSet});
    const cookies = new Cookies();
    cookies.set('user', this.state.user, {maxAge: 1200*60});
  }

  render() {
    return (
    <div>
    <BrowserRouter history={browserHistory}>
      <div>
      <div>
        <Navbar isLoggedIn={this.state.user}/>
        </div>
          <Switch>
            <Route exact path='/' render={(props) => <Home router={props} user={this.state.user} />}/>
            <Route path='/login' render={(props) => <LoginRegister router={props} onLogin={this.setUser.bind(this)} />}/>
            <Route path='/profile/:userId' render={(props) => <Profile router={props} />} />
            <Route path='/create' render={(props) => <CreatePost router={props} user={this.state.user} /> } />
            <Route path='/post/:postId' render={(props) => <BlogPost router={props} user={this.state.user}/> } />
            <Route path='/register' render={(props) => <LoginRegister router={props} onRegister={this.setUser.bind(this)}/>} />
            <Route path='/edit/:postId' render={(props) => <CreatePost router={props} user={this.state.user} />} />
          </Switch>
      </div>
      </BrowserRouter>
    </div>
    );
  }
}
