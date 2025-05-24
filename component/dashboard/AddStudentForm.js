import React from 'react';
import Styles from "./Dashboard.module.css"

const AddStudentForm = ({ studentData, setStudentData }) => {
  
  const handleChange = (type, value) => {
    console.log(type,value)
    // setStudentData(...studentData)
  }

  return (
    <div>

      <div>
        <form style={{fontSize:"0.9rem"}} className={Styles.formContainer}>
          <div className="">
            <label className="form-label">Full Name</label>
            <input onInput={(e)=>handleChange(e.target.name)} name='name' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Father's Name</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Mother's Name</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Date of Birth</label>
            <input type="date" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Aadhar Card Number</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Enrolment Number</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Enrolment Date</label>
            <input type="date" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Course Name</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Course Status</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Academic Division</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Course Duration</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Total Obtained Marks</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Overall Percentage</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Grade</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Final Result</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Certificate Issue Date</label>
            <input type="date" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Training Centre</label>
            <input type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3">
            <label className="form-label">Photo</label>
            <input type="file" placeholder='image should be 1/1' className="form-control form-control-sm" />
          </div>

          <button type="submit" className="btn btn-primary btn-sm">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
