import React, { Component } from 'react';

import '../../now-ui-kit.css';

const style = {
  backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + '/images/home.jpeg'  + ")"
}


// App component - represents the whole app
export default class Header extends Component {
  constructor(props){
    super(props);

    this.state = {
      backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + this.props.image  + ")"
    }
  }

  render() {
    return (
      <div className={'page-header ' + (this.props.small ? 'page-header-small' : '')}>
        <div className="page-header-image" style={this.state}></div>
        <div className="container">
          <div className="content-center">
            <h1> {this.props.textValue} </h1>
          </div>
        </div>
      </div>
    );
  }
}
