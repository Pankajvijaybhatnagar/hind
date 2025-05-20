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
    name: "Student 1 ",
    avatar: "/images/about_2_img_copy.jpg",
    fatherName: "Father 1",
    MotherName: "Mother 1",
    subjects: {

    }
  })

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
