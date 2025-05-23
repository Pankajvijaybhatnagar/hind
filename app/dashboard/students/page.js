"use client";

import AddStudentForm from "@/component/dashboard/AddStudentForm";
import StudentsList from "@/component/dashboard/StudentsList";
import Pagination from "@/context/Pagination";
import React, { useState } from "react";

const page = () => {
  const [islistShow, setIsListShow] = React.useState(true);
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

  const handleListShow = () => {
    setIsListShow(!islistShow);
  };

  return (
    <>
      {islistShow ? (
        <>
          <button onClick={handleListShow} className="btn btn-primary">
            Add new
          </button>
                  <StudentsList students={students} />
                  <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        </>
      ) : (
        <>
          <button onClick={handleListShow} className="btn btn-primary">
            All students
          </button>
          <AddStudentForm />
        </>
      )}
    </>
  );
};

export default page;
