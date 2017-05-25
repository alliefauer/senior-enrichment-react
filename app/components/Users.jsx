import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar'
// import Students from './Students'

export default class Users extends Component {
  constructor(props) {
    super(props)
    this.state = {names : [],
                  emails: [],
                  campus: []}
  }

  componentDidMount() {
    axios.get('/api/students/')
  .then(students => students.data)
  .then(students => {
      this.setState({names : students.map(student => student.name),
      emails : students.map(student => student.email),
    campus: students.map(student => student.campus.name) })
  })
  .catch(err => {
    console.error('error');
    console.error(err);
  });
  }

  render() {
      console.log('state: ', this.state)
    return (
      <div>
            <Navbar />
         <div id="main" className="container-fluid">
            {/*<Students />*/}
          </div>
      </div>
    )
}
}