import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import './blogpost.css';

import Header from '../Header/header.js';
import PostContent from './postcontent.js';
import UpdateDelete from './updatedelete.js';

//represents a detailed blog post
export default class BlogPost extends Component {
  constructor(props){
    super(props);

    this.state = {
      post: null
    }
  }

  //gets the blogpost using it's postId as the search parameter
  componentWillMount(){
    Meteor.call('posts.getById', this.props.router.match.params.postId, (err, result) => {
      if(err)
        console.log(err)
      else
        this.setState({post: result[0]});
    });
  }

  //deletes the post based on the post id
  deletePost(){
    Meteor.call('post.delete', this.state.post._id, (err, result) => {
      if(err)
        console.log(err)
      else
        this.props.router.history.push('/');
    })
  }

  //renders the post if the data is ready
  renderPost() {
    if(this.state.post)
      return <PostContent body={this.state.post.body} header={this.state.post.header} author={this.state.post.author}
              title={this.state.post.title} dateCreated={this.state.post.dateCreated}/>
    else
      return null;
  }

  //renders the update and delete buttons if the user and author are the same person
  renderUpdateDelete() {
    if(this.state.post && this.props.user){
      if(this.state.post.authorID == this.props.user._id)
        return (<div style={{width: '120%'}}> <UpdateDelete onDelete={this.deletePost.bind(this)} postId={this.state.post._id}/> </div>);
      else
        return null;
    } else {
      return null;
    }
  }

  render() {
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
