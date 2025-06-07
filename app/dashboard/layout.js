"use client";

import Sidebar from '@/component/dashboard/Sidebar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoggedIn(false);
            router.push('/login');
        } else {
            setIsLoggedIn(true);
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    if (!isLoggedIn) return null;

    if (isMobile) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <h5 className="text-center">Please login with a desktop or laptop to access the admin panel.</h5>
            </div>
        );
    }

    return (
        <div className='row'>
            <div style={{ height: '100dvh' }} className='col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block bg-secondary-subtle'>
                <Sidebar />
            </div>
            <div className='col-12 col-lg-10 col-xl-10 col-xxl-10 p3'>
                <h5 className='fw-bold text-center pt-1'>Welcome to Admin Panel - HCSE</h5>
                <hr className='my-0' />
                <div style={{ height: '92dvh', marginRight: "10px" }} className='overflow-auto p-2'>
                    {children}
                </div>
            </div>
        </div>
    );
}