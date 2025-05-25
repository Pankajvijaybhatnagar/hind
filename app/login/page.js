"use client";
import { useEffect, useState } from 'react';


import LoginSection from "@/component/authentication/LoginSection";
import BreadcrumbSection from "@/component/breadcrumb/BreadcrumbSection";
import Layout from "@/component/layout/Layout";
import { useRouter } from 'next/navigation';

export default function SignIn() {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
            // Check if user is logged in
            const token = localStorage.getItem('token');
            if (token) {
                setIsLoggedIn(true);
                router.push('/dashboard');
            }
    }, []);
    
    return (
        <Layout>
            <BreadcrumbSection title='Sign In' header='Sign In'/>
            <LoginSection/>
        </Layout>
    )
}