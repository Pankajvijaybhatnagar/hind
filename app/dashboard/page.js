"use client"

import Cards from '@/component/dashboard/Cards'
import conf from '@/lib/config'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {
  const [cardData, setCardData] = useState([]);
  const router = useRouter();

  const getAnalytic = async () => {
    try {
      const response = await fetch(`${conf.apiBaseUri}/analytics`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you store token in localStorage
        },
      });

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        if (response.status === 401) {
          // Token is invalid or expired
          localStorage.removeItem("token");
          router.push("/login");
        } else {
          // Handle other errors if necessary
          console.log("Error fetching analytic", response.statusText);
        }
        return;
      }

      const data = await response.json();
      // console.log(data);
      setCardData(data);
    } catch (error) {
      console.log("Error fetching analytic", error);
      localStorage.removeItem("token");
      router.push("/login");
    }
  }

  useEffect(() => {
    getAnalytic();
  }, []);

  return (
    <>
      <Cards cardData={cardData} />
    </>
  );
}

export default Page;
