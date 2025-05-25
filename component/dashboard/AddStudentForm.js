import React, { useState } from 'react';
import Styles from "./Dashboard.module.css";

const AddStudentForm = ({studentData,setStudentData}) => {


  const handleChange = (type, value) => {
    setStudentData(prevData => ({
      ...prevData,
      [type]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(studentData);
    // You can add further logic to handle the form submission, like sending data to an API
  };

  return (
    <div>
      <div>
        <form style={{ fontSize: "0.9rem" }} className={Styles.formContainer} onSubmit={handleSubmit}>
          <div className="">
            <label className="form-label">Full Name</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='name' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Father's Name</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='fatherName' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Mother's Name</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='motherName' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Date of Birth</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='dateOfBirth' type="date" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Aadhar Card Number</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='aadharCardNumber' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Enrolment Number</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='enrolmentNumber' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Enrolment Date</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='enrolmentDate' type="date" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Course Name</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='courseName' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Course Status</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='courseStatus' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Academic Division</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='academicDivision' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Course Duration</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='courseDuration' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Total Obtained Marks</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='totalObtainedMarks' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Overall Percentage</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='overallPercentage' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Grade</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='grade' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Final Result</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='finalResult' type="text" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Certificate Issue Date</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='certificateIssueDate' type="date" className="form-control form-control-sm" />
          </div>

          <div className="">
            <label className="form-label">Training Centre</label>
            <input onInput={(e) => handleChange(e.target.name, e.target.value)} name='trainingCentre' type="text" className="form-control form-control-sm" />
          </div>

          <div className="mb-3">
            <label className="form-label">Photo</label>
            <input onChange={(e) => handleChange('avatar', e.target.files[0])} type="file" className="form-control form-control-sm" />
          </div>

          <button type="submit" className="btn btn-primary btn-sm">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
