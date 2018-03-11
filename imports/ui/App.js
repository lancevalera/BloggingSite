import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

import '../now-ui-kit.css';

import Login from './Login/login.js';
import Navbar from './Navbar/navbar.js';
import Home from './Home/home.js';
import Profile from './Profile/profile.js';

// App component - represents the whole app
export default class App extends Component {

  render() {
    return (
    <div>
      <div className=''>
        <Navbar />
      </div>
      <div className=''>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/login' component={Login}/>
            <Route path='/home' component={Home}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
          </BrowserRouter>
      </div>
    </div>
    );
  }
}
