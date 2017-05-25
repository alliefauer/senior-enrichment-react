import React, { Component } from 'react';
import axios from 'axios';

import Campus from './campus';

export default class Campuses extends Component {
  constructor(props) {
    super(props)
    this.state = {campuses : []}
  }

  componentDidMount() {
   axios.get('/api/campuses/')
  .then(campuses => campuses.data)
  .then(campuses => {
    this.setState({campuses: campuses})
  })
  .catch(err => {
    console.error('error');
    console.error(err);
  });
}


  render() {
      const props = Object.assign({}, this.state)
    return (
        <div className="container-fluid campuses">
            <div className="row">
                {this.state.campuses && this.state.campuses.map(campus => {
                    return (<Campus imgUrl={campus.imageUrl} link={campus.id}/>)
                    })}
            </div>
        </div>
    )
}
}