import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

import { withTracker } from 'meteor/react-meteor-data';

import './home.css';

import Header from '../Header/header.js';
import Cards from './card.js';

//represents the home page
export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: null
    }
  }

  //gets all posts, sets it to the state
  componentWillMount() {
    Meteor.call('posts.getAll', (err, result) => {
      if(err)
        console.log(err);
      else{
        this.setState({posts: result});
        }
    });
  }

  //render the cards for the posts
  renderCards() {
    if(this.state.posts)
      return this.state.posts.map((post) => (
        <Cards key={post._id} body={post} />
      ));
    else
      return null;
  }

  //render the add post button if the user session exists
  renderAddButton(){
    if(this.props.user != null)
      return <Link to='/create' className="btn btn-primary btn-round addbutton">Add Post</Link>
  }

  render() {
    Meteor.subscribe('posts');
    return (
      <div>
      <Header image='/images/home.jpeg' textValue={this.props.user ? 'Hello ' + this.props.user.fname : ''} small={true}/>

      <div className='container'>
        <ul className='nav nav-tabs justify-content-center'>
          <li className='nav-item'> ALL </li>
        </ul>
      </div>

      <div className='container maincontent'>
      {this.renderAddButton()}
        <div className='col-md-12'>
          <h3> Newest </h3>
          {this.renderCards()}
        </div>
      </div>
    </div>
    );
  }
}
