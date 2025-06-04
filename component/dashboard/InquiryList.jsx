import React from 'react'

const InquiryList = ({InquiryData}) => {
  return (
    <div>
        
      <table style={{ fontSize: '0.85rem' }} className="table table-hover table-border table-sm table-responsive text-sm">
        
            <thead>
                <tr>
                    <th>Sr</th>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Education</th>
                    <th>Course</th>
                    <th>Message</th>
                    <th>Remark</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
    </div>
  )
}

export default InquiryList