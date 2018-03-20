import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import {Link} from 'react-router-dom';

//represents the update and delete buttons
export default class UpdateDelete extends Component {
  constructor(props){
    super(props);
  }

  //calls the parent's delete function
  handleDelete(){
    this.props.onDelete();
  }

  render() {
    return (
      <div style={{float: 'right'}}>
        <button className="btn btn-primary btn-round btn-simple deletebtn" onClick={this.handleDelete.bind(this)}>Delete</button>

        <Link to={'/edit/'+this.props.postId} className="btn btn-primary btn-round btn-simple updatebtn">Update</Link>
      </div>
    );
  }
}
