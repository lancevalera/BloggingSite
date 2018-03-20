import React, { Component } from 'react';

import './profile.css';

//represents the profile picture container
export default class ProfilePic extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <div className="container piccontainer">
          <div className='col-sm-4'>
          <div style={{textAlign: 'center'}}>
            <img src='/images/profile_placeholder.png' alt='Image' className='rounded-circle' />
          </div>
        </div>
        </div>
    );
  }
}
