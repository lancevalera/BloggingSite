import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './home.css';
import Header from '../Header/header.js';
import Cards from './card.js';

import { Posts } from '../../api/posts.js';

export default class Home extends Component {
  constructor(props){
    super(props);

    var allPosts = Posts.find({}).fetch();

    this.state = {
      posts: allPosts
    }
  }

  renderCards() {
    console.log(this.state);
    return this.state.posts.map((post) => (
      <Cards key={post._id} body={post} />
    ));
  }

  render() {
    console.log(this.props);
    return (
      <div>
      <Header image='/images/home.jpeg' textValue='' small={true}/>

      <div className='container'>
        <ul className='nav nav-tabs justify-content-center'>
          <li className='nav-item'> ALL </li>
        </ul>
      </div>

      <div className='container maincontent'>
        <div className='col-md-8 content-center'>
          <h3> Popular </h3>
          {this.renderCards()}
        </div>
      </div>
    </div>
    );
  }
}
