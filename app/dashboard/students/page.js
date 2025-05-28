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
    name: "",
    fatherName: "",
    motherName: "",
    dateOfBirth: "",
    aadharCardNumber: "",
    enrolmentNumber: "",
    enrolmentDate: "",
    courseName: "",
    courseStatus: "",
    academicDivision: "",
    courseDuration: "",
    totalObtainedMarks: "",
    overallPercentage: "",
    grade: "",
    finalResult: "",
    certificateIssueDate: "",
    trainingCentre: "",
    avatar: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const router = useRouter();
  const [filters, setFilters] = useState({
    name: "",
    enrolmentNo: "",
    courseName: "",
    courseStatus: "",
    academicDivision: "",

    pageSize: 10,
  });
  const [students, setStudents] = useState([]);

  const handleAddNewStudent = () => {
    setStudentData({
      name: "",
      fatherName: "",
      motherName: "",
      dateOfBirth: "",
      aadharCardNumber: "",
      enrolmentNumber: "",
      enrolmentDate: "",
      courseName: "",
      courseStatus: "",
      academicDivision: "",
      courseDuration: "",
      totalObtainedMarks: "",
      overallPercentage: "",
      grade: "",
      finalResult: "",
      certificateIssueDate: "",
      trainingCentre: "",
      avatar: null,
    });
    setIsListShow(false);
  };

  const handleListShow = () => {
    setIsListShow(!islistShow);
  };

  const handleEditStudent = (student) => {
    setStudentData(student);
    setIsListShow(false);
  };

  const getStudents = async (page) => {
    setIsLoading(true);
    setError(null);
    try {
      // makeing query from filters
      const query = new URLSearchParams({
        ...filters,
      }).toString();
      const response = await fetch(
        `${conf.apiBaseUri}/certificates?page=${currentPage}&${query}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you store token in localStorage
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (data.error) {
        localStorage.removeItem("token");
        router.push("/login");
        return;
      }

      setStudents(data?.data);
      setTotalPages(data?.pagination?.totalPages);
      setTotalRecords(data?.pagination?.totalRecords);
    } catch (error) {
      console.log("Error fetching students:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getStudents();
  }, [filters, currentPage]);

  return (
    <>
      {/* <button onClick={()=>console.log(studentData)}>cosole</button> */}
      {islistShow ? (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <div className="d-flex gap-1">
              <input
                onChange={(e) =>
                  setFilters({ ...filters, name: e.target.value })
                }
                className="form-control form-control-sm my-0 py-1"
                placeholder="Name"
              />
              <input
                onChange={(e) =>
                  setFilters({ ...filters, fatherName: e.target.value })
                }
                className="form-control form-control-sm my-0 py-1"
                placeholder="Father Name"
              />
              <input
                onChange={(e) =>
                  setFilters({ ...filters, aadharCardNumber: e.target.value })
                }
                className="form-control form-control-sm my-0 py-1"
                placeholder="Aadhar"
              />
              <input
                onChange={(e) =>
                  setFilters({ ...filters, enrolmentNumber: e.target.value })
                }
                className="form-control form-control-sm my-0 py-1"
                placeholder="Enrollment"
              />
              <input
                onChange={(e) =>
                  setFilters({ ...filters, courseName: e.target.value })
                }
                className="form-control form-control-sm my-0 py-1"
                placeholder="Course"
              />
            </div>
            <button
              onClick={handleAddNewStudent}
              className="btn btn-primary btn-sm"
            >
              Add new
            </button>
          </div>
          {students.length > 0 ? (
            <>
              <StudentsList
                totalPages={totalPages}
                students={students}
                handleEditStudent={handleEditStudent}
                isLoading={isLoading}
                currentPage={currentPage}
              />
              <span className="d-flex justify-content-between align-items-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
                <span>
                  Showing {students.length}/{totalRecords} students
                </span>
              </span>
            </> ): (
            <div className="text-center mt-5">
                <h4>No student found</h4>
                <button
              onClick={handleAddNewStudent}
              className="btn btn-outline-primary btn-sm"
            >
              Add new
            </button>
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="d-flex justify-content-between align-items-center mb-0">
            <span className="fs-6 fw-bolder">{studentData.id ? "Updating":"Add new"}  Student</span>

            <button onClick={handleListShow} className="btn btn-primary btn-sm">
              All students
            </button>
          </div>
          <AddStudentForm
            studentData={studentData}
              setStudentData={setStudentData}
              getStudents={getStudents}
              setIsListShow={setIsListShow}
          />
        </>
      )}
    </>
  );
};

export default page;
