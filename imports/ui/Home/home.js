import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { withTracker } from 'meteor/react-meteor-data';

import '../../now-ui-kit.css';
import './home.css';
import Header from '../Header/header.js';
import Cards from './card.js';

import { Posts } from '../../api/posts.js';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: null
    }
  }

  componentWillMount() {
    var allPosts;
    var postIsReady = Meteor.subscribe('posts');
    allPosts = Posts.find().fetch();
    this.setState({
      posts: allPosts
    })
  }

  renderCards() {
    console.log(this.state);
    return this.state.posts.map((post) => (
      <Link to={'/post/' + post._id} key={post._id}><Cards key={post._id} body={post} /></Link>
    ));
  }

  renderAddButton(){
    if(this.props.user != null)
      return <Link to='/create' className="btn btn-primary btn-round addbutton">Add Post</Link>
  }

  render() {
    console.log(this.props);
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
          <h3> Popular </h3>
          {this.renderCards()}
        </div>
      </div>
    </div>
    );
  }
}
