import Image from "next/image";
import React, { useEffect } from "react";
import Styles from "./Certificate.module.css";
import conf from "@/lib/config";

const VerifyCertificateContainer = ({ studentData }) => {
  const handlePrint = () => {
    window.print();
  };

   useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <>
      <div className="text-end my-3">
        {/* <button className="btn btn-primary" onClick={handlePrint}>
          Print Certificate
        </button> */}
      </div>

      <div className={`${Styles.bgclr} print-area`}>
        <img className={Styles.headerlogo} src={"/images/logo-2.png"} />
        <h5 className="my-3">Candidate Certificate Online Verification</h5>
        <div className={Styles.photocontainer}>
          <img
            className={Styles.studentavatar}
            height={300}
            width={200}
            src={`${conf.apiBaseUri}/uploads/${studentData.avatar}`}
          />
          
          <Image
            height={80}
            width={100}
            // className={Styles.stamp}
            style={{position:"absolute",top:"50%" , right:"50%", padding:"40px 10px"}}
            src={"/images/stamp.png"}
          />
          
        </div>

        {/* Personal Details */}
        <div className="my-2"></div>

        <h5 className="mt-5">Personal Details</h5>
        <table className="table table-sm mt-3">
         
          
          <tbody>
            <tr>
              <td>Candidate Name</td>
              <td>{studentData.name}</td>
            </tr>
            <tr>
              <td>Father's Name</td>
              <td>{studentData.fatherName}</td>
            </tr>
            <tr>
              <td>Mother's Name</td>
              <td>{studentData.motherName}</td>
            </tr>
            <tr>
              <td>Date of Birth</td>
              <td>{studentData.dateOfBirth}</td>
            </tr>
            <tr>
              <td>Aadhar Card No</td>
              <td>{studentData.aadharCardNumber}</td>
            </tr>
          </tbody>
        </table>

        {/* Academic Details */}
        <h5 className="mt-1">Academic Details</h5>
        <table className="table table-sm mt-3">
          
          <tbody>
            <tr>
              <td>Roll No</td>
              <td>{studentData.rollNo}</td>
            </tr>
            <tr>
              <td>Enrolment No</td>
              <td>{studentData.enrolmentNumber}</td>
            </tr>
            
            <tr>
              <td>Course Name</td>
              <td>{studentData.courseName}</td>
            </tr>
            
            <tr>
              <td>Course Duration</td>
              <td>{studentData.courseDuration}</td>
            </tr>
            <tr>
              <td>Total Obtained Marks</td>
              <td>{studentData.totalObtainedMarks}</td>
            </tr>
            <tr>
              <td>Overall Percentage</td>
              <td>{studentData.overallPercentage}</td>
            </tr>
            <tr>
              <td>Grade</td>
              <td>{studentData.grade}</td>
            </tr>
            <tr>
              <td>Final Result</td>
              <td>{studentData.finalResult}</td>
            </tr>
            <tr>
              <td>Certificate Diploma Issue Date</td>
              <td>
              {studentData.certificateIssueDate
      ? new Date(studentData.certificateIssueDate)
          .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
          .replace(' ', ', ')
      : 'N/A'}
              </td>
            </tr>
            <tr>
              <td>Authorized Study and Training Centre</td>
              <td>{studentData.trainingCentre}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VerifyCertificateContainer;
