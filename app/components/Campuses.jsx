import React, { Component } from 'react';

import Campus from './Campus';


export default class Campuses extends Component {
//  { /*constructor(props) {
//     super(props)
//     this.state = Object.assign({}, store.getState(), {campuses: []})
//   }*/}
 

componentDidMount() {
    this.props.getDeezCampuses();
}


  render() {
    console.log(this.props)
    return (
        <div className="container-fluid campuses">
            <div className="row">
                {/*{this.state.campuses && this.state.campuses.map(campus => {
                    return (<Campus imgUrl={campus.imageUrl} link={campus.id}/>)
                    })}*/}
            </div>
        </div>
    )
}
}
