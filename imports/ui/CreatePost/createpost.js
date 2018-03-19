import React, { Component } from 'react';

import './createpost.css';

import { Posts } from '../../api/posts.js';

// App component - represents the whole app
export default class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      header: '',
      body: '',
      authorID: '',
      dateCreated: new Date()
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitPost = this.submitPost.bind(this);
  }

  componentWillMount() {
    if(this.props.user)
      this.setState({
        authorID: this.props.user._id,
        author: this.props.user.fname + ' ' + this.props.user.lname
      });
    else
      this.props.router.history.push("/login");

    if(this.props.router.match.params.postId != null)
      Meteor.call('posts.getById', this.props.router.match.params.postId, (err, results) => {
        if(err){
          console.log(err)
        }else{
          console.log(results);
          this.setState({
            title: results[0].title,
            header: results[0].header,
            body: results[0].body
          })
        }
      })
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

    if(this.props.router.match.params.postId != null)
      Meteor.call('post.update', this.props.router.match.params.postId, this.state, (err, results) => {
        if(err){
          console.log(err)
        }else{

        }
      });
    else
      Meteor.call('posts.insert', this.state, (err, results) => {
        if(err)
          console.log(err)
      });

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
            <input type="text" name='header' value={this.state.header} onChange={this.handleChange} placeholder="A witty (or not) one liner" className="form-control" />
          </div>
        </div>
        <div className='row'>
        <h4> Your Blog Body </h4>
          <textarea className="form-control" value={this.state.body} onChange={this.handleChange} name='body' placeholder="Your actual blog" rows="5" />
        </div>

        <div className='button-container'>
          <button className="btn btn-primary btn-round post-button" onClick={this.submitPost}>Post</button>
        </div>
      </div>
    );
  }
}
