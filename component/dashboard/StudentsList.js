import React from "react";
import Image from "next/image";
import Pagination from "@/context/Pagination";

const StudentsList = ({ students,handleEditStudent }) => {
  return (
    <div>
      <table style={{fontSize: '0.85rem'}} className="table table-hover table-border table-sm table-responsive text-sm">
        <thead>
          <tr>
            <th scope="col">Sr</th>
            <th scope="col">Img</th>
            <th scope="col">CandidateName</th>
            <th scope="col">Father</th>
            {/* <th scope="col">Mother</th> */}
            {/* <th scope="col">DOB</th> */}
            <th scope="col">Aadhar No</th>
            <th scope="col">Enrolment No</th>
            <th scope="col">Enrolment date</th>
            <th scope="col">Course</th>
            <th scope="col">Course status</th>
            {/* <th scope="col">Academic division</th>
            <th scope="col">Course duration</th>
            <th scope="col">Obtained Marks</th>
            <th scope="col">Overall %</th>
            <th scope="col">Grade</th>
            <th scope="col">Final Result</th> */}
            <th scope="col">Cert issued on</th>
            <th scope="col">Actions</th>
            {/* <th scope="col">Training Center</th> */}
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>
                <Image
                  src={student.avatar.startsWith('/') ? student.avatar : `/images/${student.avatar}`}
                  alt="avatar"
                  width={30}
                  height={30}
                  style={{ objectFit: 'cover', borderRadius: '5px' }}
                />
              </td>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              {/* <td>{student.motherName}</td>
              <td>{student.dateOfBirth}</td> */}
              <td>{student.aadharCardNo}</td>
              <td>{student.enrolmentNo}</td>
              <td>{student.enrolmentDate}</td>
              <td>{student.courseName}</td>
              <td>{student.courseStatus}</td>
              {/* <td>{student.academicDivision}</td>
              <td>{student.courseDuration}</td>
              <td>{student.totalObtainedMarks}</td>
              <td>{student.overallPercentage}</td>
              <td>{student.grade}</td>
              <td>{student.finalResult}</td> */}
              <td>{student.certificateIssueDate}</td>
              <td>
                
                  <i className="fa fa-edit"></i>
                <button  className="btn btn-success btn-sm me-1">
                </button>
                <button className="btn btn-danger btn-sm">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
              {/* <td>{student.trainingCentre}</td> */}
            </tr>
          ))}
        </tbody>
      </table>


    </div>
  );
};

export default StudentsList;
