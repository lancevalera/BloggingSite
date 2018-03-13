import React, { Component } from 'react';

import '../../now-ui-kit.css';

export default class Cards extends Component {

  render() {
    console.log(this.props);
    return (
      <div className='card'>
        <div className='card-body'>
          <h5 className="card-title">{this.props.body.title}</h5>
          <p className='card-text description'>{this.props.body.header}</p>
          <p className='card-text author'> {this.props.body.author} </p>
        </div>
      </div>
    );
  }
}
