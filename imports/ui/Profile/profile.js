import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './profile.css';

import Header from '../Header/header.js';

export default class Profile extends Component {

  render() {
    console.log(this.props);
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

        <div className='container'>
          <div className='row' style="margin-top: 2%; margin-bottom: 2%;" style={{marginTop: '2%', marginBottom: '2%'}}>
            <div className='col-sm-4'>
              <h3 style={{textAlign: 'center'}}> JAMES SCHULTZ </h3>
              <div className='biocontainer'>
                <p></p>
              </div>
            </div>
          <div className='col-sm-8' style={{boderLeft: '2px solid gray'}}>
            <div className='contentcontainer content-center'>
              <h5> Recently Posted Content: </h5>
              <ul className="list-group">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
