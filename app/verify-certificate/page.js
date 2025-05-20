"use client"

import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection';
import Layout from '@/component/layout/Layout';
import VerifyCertificateContainer from '@/component/VeriyCertificate/VerifyCertificateContainer';
import VerifyCertificateForm from '@/component/VeriyCertificate/VerifyCertificateForm';

import React from 'react'

const page = () => {

    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [certificateId, setCertificateId] = React.useState("");

return (
    <Layout>
                <BreadcrumbSection header='Verify certificate' title='Verify certificate' />
                
                <div className="tf__verify_certificate">
                        <div className="container">
                                <div className="row mt-3">
                                        <div className="col-lg-4 col-md-12 col-sm-12"></div>
                    <div className="col-4 md-12 sm-12">
                        <VerifyCertificateForm  certificateId={certificateId} setCertificateId={setCertificateId} />
                      </div>
                    <div className="col-6 md-12 sm-12">
                        <VerifyCertificateContainer/>
                    </div>
                </div>
            
              </div>
            </div>
    </Layout>
  )
}

export default page