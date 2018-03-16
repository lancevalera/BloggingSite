import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';


export default class UpdateDelete extends Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <button className="btn btn-primary btn-round addbutton">Delete</button>
        
        <button className="btn btn-primary btn-round addbutton">Update</button>
      </div>
    );
  }
}
