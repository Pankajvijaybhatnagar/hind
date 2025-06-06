import React from 'react'

const VerifyCertificateForm = ({certificateId,setCertificateId,getCertificate}) => {
  const handleInputChange = (event) => {
    setCertificateId(event.target.value);
  };
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
      console.log("Certificate ID submitted:", certificateId);
      getCertificate(certificateId);
      
    };      
    return (
      <div className="card">
        <h5 className="card-header">Enter Your Roll No <span className='text-danger fw-bold'>OR</span> certificate id to verify</h5>
        <div className="card-body">
          
          <form className="input-group" onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Roll no OR  certificate ID"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              value={certificateId}
              onChange={handleInputChange}
            />
            <button
              className="btn btn-primary"
              type="submit"
              id="button-addon2"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
}

export default VerifyCertificateForm