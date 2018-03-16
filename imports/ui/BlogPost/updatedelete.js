import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


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

        <button className="btn btn-primary btn-round btn-simple updatebtn">Update</button>
      </div>
    );
  }
}
