import React, { Component } from 'react';

import '../../now-ui-kit.css';

export default class Cards extends Component {

  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className="card-title">Card title</h5>
          <p className='card-text description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className='card-text author'> Posted By: </p>
        </div>
      </div>
    );
  }
}
