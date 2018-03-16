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
        <button className="btn btn-primary btn-round btn-simple">Delete</button>

        <button className="btn btn-primary btn-round btn-simple">Update</button>
      </div>
    );
  }
}
