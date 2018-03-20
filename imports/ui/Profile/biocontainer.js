import React, { Component } from 'react';

import './profile.css';

//represents the area for the bio, firstname, and lastname
export default class BioContainer extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className='col-sm-4'>
        <h3 style={{textAlign: 'center'}}> {this.props.userInfo.fname + ' ' + this.props.userInfo.lname} </h3>
        <div className='biocontainer'>
          <p></p>
        </div>
      </div>
    );
  }
}
