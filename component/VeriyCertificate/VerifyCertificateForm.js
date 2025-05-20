import React from 'react'

const VerifyCertificateForm = ({certificateId,setCertificateId}) => {
  const handleInputChange = (event) => {
    setCertificateId(event.target.value);
  };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
        console.log("Certificate ID submitted:", certificateId);
    };      
  return (
      <form className='input-group' onSubmit={handleSubmit}>
          <input  type="text" className="form-control" placeholder="Enter certificate ID" aria-label="Recipient's username" aria-describedby="button-addon2" value={certificateId} onChange={handleInputChange} />
          <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Verify</button>
          
      </form>
  )
}

export default VerifyCertificateForm