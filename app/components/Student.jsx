import React, { Component } from 'react';

const Student = (props) => {
    return (
            <tr>
        <th>{props.name}</th>
        <th>{props.email}</th>
        <th>{props.campus}</th>
        <th><button type="button" className="btn btn-danger btn-xs">X</button></th>
        </tr>
     
    )
}

export default Student;