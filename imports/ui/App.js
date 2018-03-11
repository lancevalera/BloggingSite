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
  constructor(props){
    super(props);

    this.state = {
      user: null
    }
  }

  login(username, password){
    this.setState({
      user: true
    })
  }

  render() {
    return (
    <div>
    <BrowserRouter>
      <div className=''>
        <Navbar isLoggedIn={this.state.user}/>
          <Switch>
            <Route exact path='/' render={(props) => <Home something="hi"/>}/>
            <Route path='/login' render={(props) => <Login something="hi" onLogin={this.login.bind(this)}/>}/>
            <Route path='/home' component={Home}/>
            <Route path='/profile' component={Profile}/>
          </Switch>
      </div>
      </BrowserRouter>
    </div>
    );
  }
}
