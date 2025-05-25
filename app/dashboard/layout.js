"use client";

import Sidebar from '@/component/dashboard/Sidebar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export default function DashboardLayout({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in
        const token = localStorage.getItem('token');
        if (!token) {
            setIsLoggedIn(false);
            router.push('/login');
        }else {
            setIsLoggedIn(true);
        }
    }, []);

if(!isLoggedIn) return null;


  return (
      <div className='row'>
          <div style={{ height: '100dvh' }} className='col-2 d-none d-sm-none d-md-none d-lg-block d-xl-block d-xxl-block bg-secondary-subtle ' >
              
              <Sidebar/>
          </div>
          <div className=' col-12 col-lg-10 col-xl-10 col-xxl-10 p3'>
              <h4 className='text-bold text-center pt-3'>Welcome to Admin Panel - HCSE</h4> 
              <hr/>
              <div style={{ height: '85dvh',marginRight:"10px" }} className='overflow-auto p-2'>
                  {children}
              </div>
          </div>
      </div>
  )
}

