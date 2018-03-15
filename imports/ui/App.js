import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'
import { browserHistory } from 'react-router'
import { Meteor } from 'meteor/meteor';

import '../now-ui-kit.css';

import Login from './Login/login.js';
import Navbar from './Navbar/navbar.js';
import Home from './Home/home.js';
import Profile from './Profile/profile.js';
import CreatePost from './CreatePost/createpost.js';
import BlogPost from './BlogPost/blogpost.js';
import Register from './Register/register.js';

import { Users } from '../api/users.js';

// App component - represents the whole app
export default class App extends Component {
  constructor(props){
    Meteor.subscribe('users');
    super(props);

    this.state = {
      user: null
    }
  }

  setUser(userToBeSet){
    this.setState({user: userToBeSet});
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
            <Route path='/login' render={(props) => <Login router={props} onLogin={this.setUser.bind(this)} />}/>
            <Route path='/profile' render={(props) => <Profile router={props} user={this.state.user} />} />
            <Route path='/create' render={(props) => <CreatePost router={props} user={this.state.user} /> } />
            <Route path='/post/:postId' render={(props) => <BlogPost router={props} user={this.state.user}/> } />
            <Route path='/register' render={(props) => <Register router={props} onRegister={this.setUser.bind(this)}/>} />
          </Switch>
      </div>
      </BrowserRouter>
    </div>
    );
  }
}
