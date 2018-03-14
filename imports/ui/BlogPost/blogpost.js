import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './blogpost.css';

import Header from '../Header/header.js';

import { Posts } from '../../api/posts.js';

export default class BlogPost extends Component {
  constructor(props){
    super(props);

    this.state = {
      post: null
    }
  }

  componentWillMount(){
    console.log(this.props);
    var postValue = Posts.find({_id: this.props.router.match.params.postId}).fetch();
    this.setState({post: postValue[0]})
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header image='/images/profile.jpeg' textValue='' small={true}/>

        <div className='container content-center blog-container'>
          <div className='title'>
            <h3>{this.state.post.title}</h3>
          </div>
          <div className='desc'>
            <h5>{this.state.post.header}</h5>
          </div>
          <div className='author'>
            <p>{this.state.post.author}</p>
          </div>
          <div className='body'>
            <p>{this.state.post.body}</p>
          </div>
        </div>
      </div>
    );
  }
}
