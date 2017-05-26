import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router';

const Student = (props) => {

     const deleteStudents = (key) => {
         console.log('deleting')
     axios.delete(`/api/students/student/${key}`)
    .catch(err => {
      console.error('error');
    })
  }

    return (
            <tr>
        <th>{props.name}</th>
        <th>{props.email}</th>
        <th><Link to={`/students/${props.campusId}`}>{props.campus}</Link></th>
        <th><button onClick={function() {deleteStudents(props.value) } } key={props.key} type="button" className="btn btn-danger btn-xs">X</button></th>
        </tr>
     
    )
}

export default Student;