import React, { Component } from 'react';

export default class Cards extends Component {

  render() {
    console.log(this.props);
    return (
      <div className='card home-card'>
        <div className='card-body changemin'>
          <h5 className="card-title">{this.props.body.title}</h5>
          <p className='card-text description'>{this.props.body.header}</p>
          <p className='card-text author'> {this.props.body.author} </p>
        </div>
      </div>
    );
  }
}
