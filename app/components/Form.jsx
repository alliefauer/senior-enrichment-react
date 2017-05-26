import React, { Component } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = { nameInputValue: '',
                       emailInputValue: '',
                       campusInputValue: '1'
                    }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCampusChange = this.handleCampusChange.bind(this);
        this.addNewStudent = this.addNewStudent.bind(this);
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

      addNewStudent(event) {
          event.preventDefault();
          axios.post('/api/students', {name: this.state.nameInputValue, 
              email: this.state.emailInputValue,
              campusId: this.state.campusInputValue})
                .then(res => dispatch(create(res.data)))
                .catch(err => console.error('unsuccessful'))


      }



      render() {
          const props = Object.assign({}, this.state)

    return (

        <div className="row">
          <form className='form-group' style={{marginTop: '20px'}} onSubmit={this.addNewStudent}>
              <div className="col-xs-3">
      <input
        className='form-control'
        placeholder="name"
        onChange={this.handleNameChange}
      />
      </div>
      <div className="col-xs-3">
      <input
        className='form-control'
        placeholder="email"
        onChange={this.handleEmailChange}
      />
      </div>
      <div className="col-xs-2">
          <select name="campuses"className="form-control" onChange={this.handleCampusChange}>
  <option value="1">Luna</option>
  <option value="2">Terra</option>
  <option value="3">Titan</option>
  <option value="4">Mars</option>
</select >
</div>
<div className="col-xs-2">
    <button
                type="submit"
                className="btn btn-success"
        >Add Student
              </button>
              </div>
    </form>
    </div>

    )
}
}