import React from "react";
import Image from "next/image";

const StudentsList = ({ students }) => {
  return (
    <div>
     <table className="table table-hover table-border table-sm table-responsive">
  <thead>
    <tr>
      <th scope="col">Sr</th>
      <th scope="col">Img</th>
      <th scope="col">CandidateName</th>
      <th scope="col">Father</th>
      <th scope="col">Mother</th>
      <th scope="col">DOB</th>
      <th scope="col">Aadhar No</th>
      <th scope="col">Enrolment No</th>
      <th scope="col">Enrolment date</th>
      <th scope="col">Course</th>
      <th scope="col">Course status</th>
      <th scope="col">Academic division</th>
      <th scope="col">Course duration</th>
      <th scope="col">Obtained Marks</th>
      <th scope="col">Overall %</th>
      <th scope="col">Grade</th>
      <th scope="col">Final Result</th>
      <th scope="col">Certificate issued date</th>
      <th scope="col">Training Center</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student, i) => (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>
          <img
            src={student.avatar.startsWith('/') ? student.avatar : `/images/${student.avatar}`}
            alt="avatar"
            width={100}
            height={100}
            style={{ objectFit: 'cover', borderRadius: '5px' }}
          />
        </td>
        <td>{student.name}</td>
        <td>{student.fatherName}</td>
        <td>{student.motherName}</td>
        <td>{student.dateOfBirth}</td>
        <td>{student.aadharCardNo}</td>
        <td>{student.enrolmentNo}</td>
        <td>{student.enrolmentDate}</td>
        <td>{student.courseName}</td>
        <td>{student.courseStatus}</td>
        <td>{student.academicDivision}</td>
        <td>{student.courseDuration}</td>
        <td>{student.totalObtainedMarks}</td>
        <td>{student.overallPercentage}</td>
        <td>{student.grade}</td>
        <td>{student.finalResult}</td>
        <td>{student.certificateIssueDate}</td>
        <td>{student.trainingCentre}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
  );
};

export default StudentsList;
