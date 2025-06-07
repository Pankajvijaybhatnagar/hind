
"use client"

import Cards from '@/component/dashboard/Cards'
import conf from '@/lib/config'
import React, { useEffect, useState } from 'react'

const page = () => {
  const[cardData,setCardData]=useState([])

  const getAnalytic = async () => {
    try {
      const response = await fetch(`${conf.apiBaseUri}/analytics`, {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you store token in localStorage
        },
      })
      const data = await response.json();
      console.log(data)
     setCardData(data)
    } catch (error) {
      console.log("Error fetching analytic",error)
      localStorage.removeItem("token");
      router.push("/login");
       
    }
  }


  useEffect(()=>{
    getAnalytic()
  },[])

  return (
    <>
      <Cards cardData={cardData}/>

    </>
  )
}

export default page