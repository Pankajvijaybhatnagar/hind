import Sidebar from '@/component/dashboard/Sidebar'
import Image from 'next/image'
import React from 'react'

export default function DashboardLayout  ({children})  {
  return (
      <div className='row'>
          <div style={{ height: '100dvh' }} className='col-2 bg-secondary-subtle ' >
              
              <Sidebar/>
          </div>
          <div className='col-10 p3'>
              <h4 className='text-bold text-center pt-3'>Welcome to Admin Panel - HCSE</h4> 
              <hr/>
              <div style={{ height: '85dvh',marginRight:"10px" }} className='overflow-auto pr-2'>
                  {children}
              </div>
          </div>
      </div>
  )
}

