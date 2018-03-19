import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './profile.css';

import Header from '../Header/header.js';

export default class PostList extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  renderList(){
    return this.props.posts.map((post) => (
      <Link to={'/post/' + post._id} key={post._id} className="list-group-item list-group-item-action">
        <span className='post-title'>{post.title}</span>
        <br />
        {post.header}
        <br />
      </Link>
    ));
  }

  render() {
    console.log(this.state);
    return (
      <div className="list-group">
        {this.renderList()}
      </div>
    );
  }
}
