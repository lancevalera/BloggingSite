import React, { Component } from 'react';

import './profile.css';

import Header from '../Header/header.js';
import PostList from './postlist.js';
import ProfPic from './profilepicture.js';
import BioContainer from './biocontainer.js';

//represents the user profile page
export default class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInfo: {},
      userPosts: []
    };
  }

  //gets the posts by a user, gets the user profile
  componentWillMount(){
    var userId = this.props.router.match.params.userId;

    Meteor.call('posts.getByUser', userId, (err, result) => {
      if(err)
        console.log(err)
      else
        this.setState({userPosts: result})
    });

    Meteor.call('user.getById', userId, (err, result) => {
      if(err)
        console.log(err)
      else
        this.setState({userInfo: {
            fname: result.fname,
            lname: result.lname
        }
      });
    })
  }

  render() {
    return (
      <div>
      <Header image='/images/profile.jpeg' textValue='' small={true}/>
        <ProfPic />
        <div className='container' style={{marginBottom: '5%'}}>
          <div className='row' style="margin-top: 2%; margin-bottom: 2%;" style={{marginTop: '2%', marginBottom: '2%'}}>
            <BioContainer userInfo={this.state.userInfo} />
            <PostList posts={this.state.userPosts} />
        </div>
      </div>
    </div>
    );
  }
}
