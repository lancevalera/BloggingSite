import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import './profile.css';

import Header from '../Header/header.js';

//represents the area where post history is shown
export default class PostList extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
  }

  //returns a list of links to the posts by the user
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
      <div className='col-sm-8' style={{boderLeft: '2px solid gray'}}>
        <div className='contentcontainer content-center'>
          <h5> Recently Posted Content: </h5>
          <div className="list-group">
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}
