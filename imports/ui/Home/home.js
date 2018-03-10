import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './home.css';

const style = {
  backgroundImage: "url(" + window.location.protocol + '//' +  window.location.host + '/images/home.jpeg'  + ")"
}


// App component - represents the whole app
export default class Home extends Component {

  render() {
    return (
      <div>
      <div className="page-header page-header-small" filter-color="blue">
        <div className="page-header-image" style={style}></div>
        <div className="container">
          <div className="content-center">
            <h1> Your home page </h1>
          </div>
        </div>
      </div>

      <div className='container'>
        <ul className='nav nav-tabs justify-content-center'>
          <li className='nav-item'> ALL </li>
        </ul>
      </div>

      <div className='container maincontent'>
      <div className='content-center'>
        <div className='card'>
          <div className='card-body'>
            <h5 className="card-title">Card title</h5>
            <p className='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        </div>
      </div>
      </div>
    );
  }
}
