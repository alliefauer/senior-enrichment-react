import React, { Component } from 'react';

export default class Navbar extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
            <div className="navbar-header">
                <a className="navbar-brand" href="/">Margaret Hamilton Interplanetary Academy of JavaScript</a>
            </div>
                <ul className="nav navbar-nav navbar-right">
                    <li ><a href="/">Campuses</a></li>
                    <li><a href="/students">Students</a></li>
                </ul>
            </div>
    </nav>
    )
}
}