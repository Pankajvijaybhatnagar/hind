"use client";

import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import VerifyCertificateContainer from "@/component/VeriyCertificate/VerifyCertificateContainer";
import VerifyCertificateForm from "@/component/VeriyCertificate/VerifyCertificateForm";
import conf from "@/lib/config";

import React, { useEffect } from "react";

const page = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [certificateId, setCertificateId] = React.useState("");
  const [studentData, setStudentData] = React.useState({});
  const [isStudent,setIsStudent]=React.useState(false)

  const getCertificate = async (enrollmentNo = null) => {
    try {
      const response = await fetch(
        `${conf.apiBaseUri}/certificate?e=${enrollmentNo}`, 
        {
          method: "GET",
           mode: 'cors',
        }
        
        
      );
      const data = await response.json();
      console.log(data.student)
      
      if (data.student) {
        setStudentData(data.student);
        setIsStudent(true)
      }
    } catch (error) {}
  };

  // useEffect(()=>{},[])

  return (
    <Layout>
      <BreadcrumbSection
        className="no-print"
        header="Verify certificate"
        title="Verify certificate"
      />

      <div className="tf__verify_certificate">
        <div className="container">
          <div className="mt-3 py-3 no-print">
            <VerifyCertificateForm
              certificateId={certificateId}
              setCertificateId={setCertificateId}
              getCertificate={getCertificate}
            />
          </div>
          {isStudent  && (
            <div className="mt-3 py-3">
              <VerifyCertificateContainer studentData={studentData} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default page;
