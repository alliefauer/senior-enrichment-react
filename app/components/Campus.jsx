import React, { Component } from 'react';


// export default class Campus extends Component {
//   constructor(props) {
//     super(props)
//   }

//   componentDidMount() {

//   }

//   render() {
//       console.log(props);
//     return (
//      <div className="col-xs-6"><img src={imgUrl}/></div>
//     )
// }
// }

const Campus = (props) => {
    return (
        <div className="col-xs-6"><a href ={`/students/${props.link}`}><img src={props.imgUrl}/></a></div>
    )
}

export default Campus;