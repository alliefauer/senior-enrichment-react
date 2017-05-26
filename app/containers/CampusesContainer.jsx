import {connect} from 'react-redux';
import React from 'react';
import Campuses from '../components/Campuses'
import {getAllCampuses} from '../reducers/campuses';




const mapState = function(state) {
    return state
}
const mapDispatch = function(dispatch) {
   getDeezCampuses : () => {
       dispatch(getAllCampuses());
   }
}

export default connect(mapState, mapDispatch)(Campuses);