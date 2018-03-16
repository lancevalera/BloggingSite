import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import '../../now-ui-kit.css';
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

  renderPost() {
    if(this.state.post)
      return <PostContent body={this.state.post.body} header={this.state.post.header} author={this.state.post.author}
              title={this.state.post.title} />
    else
      return null;
  }

  renderUpdateDelete() {
    if(this.state.post && this.props.user){
      if(this.state.post.authorID == this.props.user._id)
        return (<div> <UpdateDelete /> </div>);
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
