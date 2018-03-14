import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './createpost.css';

import { Posts } from '../../api/posts.js';

// App component - represents the whole app
export default class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: null,
      header: null,
      body: null,
      authorID: null
    }
    if(this.props.user)
      this.state = {
        title: null,
        header: null,
        body: null,
        authorID: this.props.user._id,
        author: this.props.user.fname + ' ' + this.props.user.lname
      }
    else
      this.props.router.history.push("/login");

       this.handleChange = this.handleChange.bind(this);
       this.submitPost = this.submitPost.bind(this);
  }

  handleChange(e){
    var target = e.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value
    });

    console.log(name);
  }

  submitPost(e) {
    e.preventDefault();
    Posts.insert(this.state);
    this.props.router.history.push("/");
  }

  render() {
    return (
      <div className='container component-body'>
        <div className='row'>
        <h4> Your Blog Title </h4>
          <div className="form-group">
            <input type="text" name='title' value={this.state.title} onChange={this.handleChange} placeholder="Think big bold letters" className="form-control" />
          </div>
        </div>

        <div className='row'>
        <h4> Your Blog Description </h4>
          <div className="form-group">
            <input type="text" name='header' value={this.state.postDesc} onChange={this.handleChange} placeholder="A witty (or not) one liner" className="form-control" />
          </div>
        </div>
        <div className='row'>
        <h4> Your Blog Body </h4>
          <textarea className="form-control" value={this.state.postBody} onChange={this.handleChange} name='body' placeholder="Your actual blog" rows="5" />
        </div>

        <div className='button-container'>
          <button className="btn btn-primary btn-round post-button" onClick={this.submitPost}>Post</button>
        </div>
      </div>
    );
  }
}
