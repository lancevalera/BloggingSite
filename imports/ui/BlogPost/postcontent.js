import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import './blogpost.css';

import Header from '../Header/header.js';


export default class PostContent extends Component {
  constructor(props){
    super(props);
  }

  renderDate(){
    var date = new Date(this.props.dateCreated);

    var month = date.getMonth() + 1;
    var day = date.getDate();
    var year = date.getFullYear();

    return month + '/' + day + '/' + year;
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <div className='header'>
          <div className='title'>
            <h3>{this.props.title}</h3>
          </div>
          <div className='desc'>
            <h5>{this.props.header}</h5>
          </div>
          <div className='author'>
            <p>{this.props.author} | {this.renderDate()}</p>
          </div>
          </div>

          <div className='body'>
            <p>{this.props.body}</p>
          </div>

        </div>
      </div>
    );
  }
}
