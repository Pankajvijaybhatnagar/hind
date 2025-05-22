"use client";

import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import VerifyCertificateContainer from "@/component/VeriyCertificate/VerifyCertificateContainer";
import VerifyCertificateForm from "@/component/VeriyCertificate/VerifyCertificateForm";

import React from "react";

const page = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [certificateId, setCertificateId] = React.useState("");
 const [studentData, setStudentData] = React.useState({
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
  trainingCentre: "SECTOR-15 , YAMUNA NAGAR, HARYANA"
});


  return (
    <Layout>
      <BreadcrumbSection
        header="Verify certificate"
        title="Verify certificate"
      />

      <div className="tf__verify_certificate">
        <div className="container">
          <div className="mt-3 py-3">
            <VerifyCertificateForm
              certificateId={certificateId}
              setCertificateId={setCertificateId}
            />
          </div>
          <div className="mt-3 py-3">
            <VerifyCertificateContainer studentData={studentData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
