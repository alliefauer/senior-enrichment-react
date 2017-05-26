import React, {Component} from 'react';

export default() => {
   
   return (
        <div className="row">
          <form className='form-group' style={{marginTop: '20px'}} onSubmit={newStudent}>
              <div className="col-xs-3">
      <input
        className='form-control'
        placeholder="name"
        onChange={nameChange}
      />
      </div>
      <div className="col-xs-3">
      <input
        className='form-control'
        placeholder="email"
        onChange={emailChange}
      />
      </div>
      <div className="col-xs-2">
          <select name="campuses"className="form-control" onChange={campusChange}>
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