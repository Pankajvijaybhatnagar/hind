
"use client"

import AddStudentForm from '@/component/dashboard/AddStudentForm'
import StudentsList from '@/component/dashboard/StudentsList'
import React from 'react'

const page = () => {
    const [islistShow, setIsListShow] = React.useState(true)
    const handleListShow = () => {
        setIsListShow(!islistShow)
    }
  return (
      <>
          {
              islistShow ?
                  <> 
                <button onClick={handleListShow} className='btn btn-primary'>Add new</button>    
                  <StudentsList />
                      </>
                  : <>
                  <button onClick={handleListShow} className='btn btn-primary'>All students</button>
                  <AddStudentForm/>
                  </>
          }
      
      </>
  )
}

export default page