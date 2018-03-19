import React, { Component } from 'react';

import './profile.css';

import Header from '../Header/header.js';
import PostList from './postlist.js'

export default class Profile extends Component {
  constructor(props){
    super(props);

    this.state = {
      userInfo: {},
      userPosts: []
    };
  }

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

  renderPosts(){
    if(this.state.userPosts.length != 0)
      return <PostList posts={this.state.userPosts} />
  }

  render() {
    return (
      <div>
      <Header image='/images/profile.jpeg' textValue='' small={true}/>

        <div className="container piccontainer">
          <div className='col-sm-4'>
          <div style={{textAlign: 'center'}}>
            <img src={window.location.protocol + '//' +  window.location.host + '/images/profile_placeholder.png'} alt='Image' className='rounded-circle' />
          </div>
        </div>
        </div>

        <div className='container' style={{marginBottom: '5%'}}>
          <div className='row' style="margin-top: 2%; margin-bottom: 2%;" style={{marginTop: '2%', marginBottom: '2%'}}>
            <div className='col-sm-4'>
              <h3 style={{textAlign: 'center'}}> {this.state.userInfo.fname + ' ' + this.state.userInfo.lname} </h3>
              <div className='biocontainer'>
                <p></p>
              </div>
            </div>
          <div className='col-sm-8' style={{boderLeft: '2px solid gray'}}>
            <div className='contentcontainer content-center'>
              <h5> Recently Posted Content: </h5>
              {this.renderPosts()}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
