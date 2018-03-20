import React, { Component } from 'react';

import {Link} from 'react-router-dom';

//represents the cards that can be seen in the home page
export default class Cards extends Component {

  render() {
    return (
      <div className='card home-card'>
        <div className='card-body changemin'>
          <Link to={'/post/'+this.props.body._id} className='title-description'>
            <h5 className="card-title">{this.props.body.title}</h5>
            <p className='card-text description'>{this.props.body.header}</p>
          </Link>
          <Link to={'/profile/'+this.props.body.authorID} >
            <p className='card-text author'> {this.props.body.author} </p>
          </Link>
        </div>
      </div>
    );
  }
}
