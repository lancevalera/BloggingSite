import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import './blogpost.css';

import Header from '../Header/header.js';
import PostContent from './postcontent.js';
import UpdateDelete from './updatedelete.js';

export default class BlogPost extends Component {
  constructor(props){
    super(props);

    this.state = {
      post: null
    }
  }

  componentWillMount(){
    Meteor.call('posts.getById', this.props.router.match.params.postId, (err, result) => {
      if(err)
        console.log(err)
      else
        this.setState({post: result[0]});
    });
    console.log(this.props);
  }

  deletePost(){
    Meteor.call('post.delete', this.state.post._id, (err, result) => {
      if(err)
        console.log(err)
      else
        this.props.router.history.push('/');
    })
  }

  renderPost() {
    if(this.state.post)
      return <PostContent body={this.state.post.body} header={this.state.post.header} author={this.state.post.author}
              title={this.state.post.title} dateCreated={this.state.post.dateCreated}/>
    else
      return null;
  }

  renderUpdateDelete() {
    if(this.state.post && this.props.user){
      if(this.state.post.authorID._str == this.props.user._id._str)
        return (<div style={{width: '120%'}}> <UpdateDelete onDelete={this.deletePost.bind(this)} postId={this.state.post._id}/> </div>);
      else
        return null;
    } else {
      return null;
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <Header image='/images/profile.jpeg' textValue='' small={true}/>
        <div className='container content-center blog-container'>
        {this.renderUpdateDelete()}
        {this.renderPost()}
        </div>
      </div>
    );
  }
}
