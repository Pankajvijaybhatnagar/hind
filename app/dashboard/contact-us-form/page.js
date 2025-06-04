"use client"

import InquiryList from '@/component/dashboard/InquiryList'
import React, { useState } from 'react'

const page = () => {
  const [isLoading,setIsLoading]=useState(true)




  
  return (
    <div>
      <div>
            <span>showing</span>
            <input className='form-control form-control-sm mb-2' placeholder='search something....' />
        </div>

      <InquiryList/>
    </div>
  )
}

export default page