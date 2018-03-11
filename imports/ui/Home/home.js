import React, { Component } from 'react';

import '../../now-ui-kit.css';
import './home.css';
import Header from '../Header/header.js';
import Cards from './card.js';


// App component - represents the whole app
export default class Home extends Component {

  render() {
    return (
      <div>
      <Header image='/images/home.jpeg' textValue='Your home page' />

      <div className='container'>
        <ul className='nav nav-tabs justify-content-center'>
          <li className='nav-item'> ALL </li>
        </ul>
      </div>

      <div className='container maincontent'>
        <div className='row'>
          <h3> Popular </h3>
          <Cards />
        </div>
      </div>
    </div>
    );
  }
}
