import axios from 'axios';
import React from 'react';

const initialState = {
    all : {},
    selected: ''
}

const GET_CAMPUSES = 'GET_CAMPUSES';

export const getAll = (campuses) => {
    console.log('got getALl')
  return {
    type: GET_CAMPUSES,
  campuses
}
}

export const getAllCampuses = () =>  {
    return dispatch => {
    axios.get('/api/campuses/')
      .then(campuses => campuses.data)
      .then(res => dispatch(getAll(res)))
        // .then(campuses => console.log(campuses))
      
      .catch(err => console.error('unsuccessful'))
    }
}

export default function reducer(state = initialState, action)  {
  const newState = Object.assign({}, state);
  console.log(action.type);
  switch (action.type) {
    case 'GET_CAMPUSES' :
        newState.all = action.campuses;
        break;
    default: 
    return state
  }
  return newState;
};
