const initialState = {
  student: {},
  students: []
}

//constants
const ADD_STUDENT = 'ADD_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS'

//action creators
export const addStudent = student => {
    return {
        type: ADD_STUDENT,
        student 
    }
}

export const getStudents = students => {
  return {
    type: GET_STUDENTS,
  students
}
}

//dispatcher
export const addNewStudent = (name, email, campus) => dispatch => {
              axios.post('/api/students', 
              {name: name, 
              email: email,
              campusId: campus})
                .then(res => dispatch(addStudent(...res.data)))
                .catch(err => console.error('unsuccessful'))
 }


export const getAllStudents = () =>  dispatch =>  {
     axios.get('/api/students/')
      .then(students => students.data)
      .then(res => dispatch(getStudents(res)))
      .catch(err => console.error('unsuccessful'))
}


//reducer
export default function reducer(state = initialState, action)  {
  const newState = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_STUDENT' :
        newState.student = action.student;
        // newState.emailInputValue = action.email; 
        // newState.campusInputValue = action.campusId;
        break;
    case 'GET_STUDENTS' : 
        newState.students = action.students;
        break;
    default: 
    return state
  }
  return newState;
};


