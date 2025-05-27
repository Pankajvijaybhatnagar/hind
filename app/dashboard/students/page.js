"use client";

import AddStudentForm from "@/component/dashboard/AddStudentForm";
import StudentsList from "@/component/dashboard/StudentsList";
import Pagination from "@/context/Pagination";
import conf from "@/lib/config";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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


  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0)
  const router = useRouter()
  const [filters, setFilters] = useState({
    name: '',
    enrolmentNo: '',
    courseName: '',
    courseStatus: '',
    academicDivision: '',
   
    pageSize: 10,
  });
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

  const getStudents = async (page) => {
    try {
      // makeing query from filters
      const query = new URLSearchParams({
        ...filters,
      }).toString();
      const response = await fetch(`${conf.apiBaseUri}/certificates?page=${currentPage}&${query}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // Assuming you store token in localStorage
          
        },
      });
      const data = await response.json();
      console.log(data)
      if (data.error ) {
        localStorage.removeItem("token")
        router.push("/login")
        return
        
      }
      
      setStudents(data?.data);
      setTotalPages(data?.pagination?.totalPages);
      setTotalRecords(data?.pagination?.totalRecords)
    } catch (error) {
      console.log("Error fetching students:", error);
    }
  }

  useEffect(() => {
    getStudents();
  }, [filters,currentPage]);

  return (
    <>
      {/* <button onClick={()=>console.log(studentData)}>cosole</button> */}
      {islistShow ? (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            
            <div className="d-flex gap-1" >
              <input onChange={(e)=>setFilters({...filters,name:e.target.value})} className="form-control form-control-sm my-0 py-1" placeholder="Name" />
              <input onChange={(e)=>setFilters({...filters,fatherName:e.target.value})} className="form-control form-control-sm my-0 py-1" placeholder="Father Name" />
              <input onChange={(e)=>setFilters({...filters,aadharCardNumber:e.target.value})} className="form-control form-control-sm my-0 py-1" placeholder="Aadhar" />
              <input onChange={(e)=>setFilters({...filters,enrolmentNumber:e.target.value})} className="form-control form-control-sm my-0 py-1" placeholder="Enrollment" />
              <input onChange={(e)=>setFilters({...filters,courseName:e.target.value})} className="form-control form-control-sm my-0 py-1" placeholder="Course" />
            </div>
            <button onClick={handleAddNewStudent} className="btn btn-primary btn-sm">
              Add new
            </button>
          </div>
          <StudentsList totalPages={totalPages} students={students} handleEditStudent={handleEditStudent} />
          <span className="d-flex justify-content-between align-items-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
          <span>Showing {students.length}/{totalRecords} students</span>
          </span>
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
