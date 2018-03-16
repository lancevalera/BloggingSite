import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import {Link} from 'react-router-dom';


export default class UpdateDelete extends Component {
  constructor(props){
    super(props);
  }

  handleDelete(){
    this.props.onDelete();
  }

  render() {
    console.log(this.props);
    return (
      <div style={{float: 'right'}}>
        <button className="btn btn-primary btn-round btn-simple deletebtn" onClick={this.handleDelete.bind(this)}>Delete</button>

        <Link to={'/edit/'+this.props.postId} className="btn btn-primary btn-round btn-simple updatebtn">Update</Link>
      </div>
    );
  }
}
