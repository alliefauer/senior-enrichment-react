import React, { Component } from 'react';
import axios from 'axios';

import Navbar from './Navbar'
import Student from './Student'
import Form from './Form'

export default class Students extends Component {
  constructor(props) {
    super(props)
    this.state = {students : []}

  }

  componentDidMount() {
    axios.get('/api/students/')
  .then(students => students.data)
  .then(students => {
      this.setState({students : students})
  })
  .catch(err => {
    console.error('error');
    console.error(err);
  });

  
}





  render() {
      

      const students = this.state.students;
    return (
      <div> 
            <Navbar />
         <div id="main" className="container-fluid">
             <Form />
             <table className="table table-striped">
                 <tbody>
           {students && students.map(student => {
             return (  <Student name={student.name}
                            email={student.email}
                             campus={student.campus.name}
                             value={student.id}
                             campusId={student.campusId}
                             /> )
           })
               }
               </tbody>
               </table>
          </div>
      </div>
    )
}
}