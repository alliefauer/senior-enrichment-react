import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';
import {connect} from 'react-redux'
import {addNewStudent} from '../reux/action-creators/actions'
import Form from '../components/Form'

class FormContainer extends Component {
    constructor(props) {
        super(props)
        this.state = { nameInputValue: '',
                       emailInputValue: '',
                       campusInputValue: '1'
                    }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCampusChange = this.handleCampusChange.bind(this);
        this.addStudent = this.addStudent.bind(this);
    }

    addStudent(this.state) {
        event.preventDefault();
        addNewStudent(...this.state);
    }
   

      handleNameChange (event) {
          const value = event.target.value;
          this.setState({
              nameInputValue: value
          })
          
      }

      handleEmailChange (event) {
          const value = event.target.value;
          this.setState({
              emailInputValue: value
          })
          console.log(this.state)
      }

      handleCampusChange (event) {
          const value = event.target.value;
          this.setState({
              campusInputValue: value
          })
      }

   
    
//make one function


      render() {

    return (

        <FormContainer 
            newStudent = {this.addNewStudent}
            nameChange = {this.handleNameChange}
            emailChange = {this.handleEmailChange}
            campusChange = {this.handleCampusChange}
            />

    )


}
}


const mapState = function(state) {
    return {};
}

const mapDispatch = function(dispatch) {
    return {};
}

({nameInputValue, emailInputValue, campusInputValue}) => ({nameInputValue, emailInputValue, campusInputValue})
const mapDispatch = { addNewStudent }
export default connect(mapState, mapDispatch)(Form)