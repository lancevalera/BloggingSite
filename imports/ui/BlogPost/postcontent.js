import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import '../../now-ui-kit.css';
import './blogpost.css';

import Header from '../Header/header.js';


export default class PostContent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <div className='title'>
            <h3>{this.props.title}</h3>
          </div>
          <div className='desc'>
            <h5>{this.props.header}</h5>
          </div>
          <div className='author'>
            <p>{this.props.author}</p>
          </div>
          <div className='body'>
            <p>{this.props.body}</p>
          </div>
        </div>
      </div>
    );
  }
}
