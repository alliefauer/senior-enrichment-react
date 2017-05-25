import React, { Component } from 'react';

import Navbar from './Navbar';
import Campuses from './Campuses';

export default class Root extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return (
         <div>
                <Navbar />
         <div id="main" className="container-fluid">
            <Campuses />
          </div>
      </div>
    )
}
}