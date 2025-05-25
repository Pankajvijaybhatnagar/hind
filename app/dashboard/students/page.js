"use client";

import AddStudentForm from "@/component/dashboard/AddStudentForm";
import StudentsList from "@/component/dashboard/StudentsList";
import Pagination from "@/context/Pagination";
import React, { useState } from "react";

const page = () => {
  const [islistShow, setIsListShow] = React.useState(true);
  const [studentData, setStudentData] = useState({
    name: '',
    fatherName: '',
    motherName: '',
    dateOfBirth: '',
    aadharCardNumber: '',
    enrolmentNumber: '',
    enrolmentDate: '',
    courseName: '',
    courseStatus: '',
    academicDivision: '',
    courseDuration: '',
    totalObtainedMarks: '',
    overallPercentage: '',
    grade: '',
    finalResult: '',
    certificateIssueDate: '',
    trainingCentre: '',
    avatar: null,
  });


  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(5);
  const [students, setStudents] = useState([
    {
      name: "RAJAN SINGH",
      avatar: "/images/about_2_img_copy.jpg",
      fatherName: "DALJEET SINGH",
      motherName: "LAKH VEER KAUR",
      dateOfBirth: "22-DEC-1991",
      aadharCardNo: "6982278482403",
      enrolmentNo: "NIED2201316107HR",
      enrolmentDate: "02-Jul-2022",
      courseName: "Diploma in English ( DE )",
      courseStatus: "Completed",
      academicDivision: "ENGLISH SPOKEN",
      courseDuration: "02/07/2022 to 02/01/2023 (6 Months)",
      totalObtainedMarks: "483/600",
      overallPercentage: "80.5",
      grade: "A",
      finalResult: "PASS",
      certificateIssueDate: "10/03/2023",
      trainingCentre: "SECTOR-15 , YAMUNA NAGAR, HARYANA",
    },
    {
      name: "RAJAN SINGH",
      avatar: "/images/about_2_img_copy.jpg",
      fatherName: "DALJEET SINGH",
      motherName: "LAKH VEER KAUR",
      dateOfBirth: "22-DEC-1991",
      aadharCardNo: "6982278482403",
      enrolmentNo: "NISE2201316107HR",
      enrolmentDate: "02-Jul-2022",
      courseName: "Diploma in English ( DE )",
      courseStatus: "Completed",
      academicDivision: "ENGLISH SPOKEN",
      courseDuration: "02/07/2022 to 02/01/2023 (6 Months)",
      totalObtainedMarks: "483/600",
      overallPercentage: "80.5",
      grade: "A",
      finalResult: "PASS",
      certificateIssueDate: "10/03/2023",
      trainingCentre: "SECTOR-15 , YAMUNA NAGAR, HARYANA",
    },
  ]);

  const handleAddNewStudent = () => {
    setStudentData({
      name: '',
      fatherName: '',
      motherName: '',
      dateOfBirth: '',
      aadharCardNumber: '',
      enrolmentNumber: '',
      enrolmentDate: '',
      courseName: '',
      courseStatus: '',
      academicDivision: '',
      courseDuration: '',
      totalObtainedMarks: '',
      overallPercentage: '',
      grade: '',
      finalResult: '',
      certificateIssueDate: '',
      trainingCentre: '',
      avatar: null,
    })
    setIsListShow(false)
  }

  const handleListShow = () => {
    setIsListShow(!islistShow);
  };

  const handleEditStudent = (student) => {
    setStudentData(student);
    setIsListShow(false);
    
  }

  return (
    <>
      {/* <button onClick={()=>console.log(studentData)}>cosole</button> */}
      {islistShow ? (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            Showing {students.length} students
            <button onClick={handleAddNewStudent} className="btn btn-primary btn-sm">
              Add new student
            </button>
          </div>
          <StudentsList students={students} handleEditStudent={handleEditStudent} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
            <span className="fs-6 fw-bolder">Adding New Student</span>
            
          <button onClick={handleListShow} className="btn btn-primary">
            All students
          </button>
          </div>
          <AddStudentForm studentData={studentData} setStudentData={setStudentData} />
        </>
      )}
    </>
  );
};

export default page;
