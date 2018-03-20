import React, { Component } from 'react';

import './createpost.css';

import { Posts } from '../../api/posts.js';

//represents the post creation form
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

  //checks to see if the user exits, redirect if not
  //checks to see if there is a postId to indicate that this is an update and not a create
  componentWillMount() {
    if(this.props.user)
      this.setState({
        authorID: this.props.user._id,
        author: this.props.user.fname + ' ' + this.props.user.lname
      });
    else
      this.props.router.history.push("/login");

    //redirect if logged in user is not the author of the document
    if(this.props.router.match.params.postId != null)
      Meteor.call('posts.getById', this.props.router.match.params.postId, (err, results) => {
        if(err){
          console.log(err)
        }else{
          if(results[0].authorID == this.props.user._id)
            this.setState({
              title: results[0].title,
              header: results[0].header,
              body: results[0].body
            })
          else
            this.props.router.history.push("/");
        }
      })
  }

  //sets the value of the state variable to the value of the input field
  handleChange(e){
    var target = e.target;
    var value = target.value;
    var name = target.name;

    this.setState({
      [name]: value
    });

    console.log(name);
  }

  //calls update or insert based on the existance of postId
  //redirect to home once done
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
      <form onSubmit={this.submitPost.bind(this)}>
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
          <input value='Post' className="btn btn-primary btn-round post-button" type='submit' />
        </div>
        </form>
      </div>
    );
  }
}
