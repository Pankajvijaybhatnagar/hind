import conf from "@/lib/config";
import React, { useState } from "react";
import { toast } from "react-toastify";

const StudentsList = ({ students, handleEditStudent, currentPage, isLoading, getStudents }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [showDialog, setShowDialog] = useState(false);

  const openConfirmDialog = (student) => {
    setSelectedStudent(student);
    setShowDialog(true);
  };

  const closeConfirmDialog = () => {
    setShowDialog(false);
    setSelectedStudent(null);
  };

  const handleDelete = async () => {
    if (!selectedStudent) return;

    try {
      const response = await fetch(`${conf.apiBaseUri}/certificates`, {
        method: 'DELETE',
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Assuming you store token in localStorage
          },
        body:JSON.stringify({id:selectedStudent.id})
      });

      const result = await response.json();
      console.log(result)

      if (result.success) {
        getStudents();
        toast.success(result.message)
      }
    } catch (error) {
      console.error(error);
    } finally {
      closeConfirmDialog();
    }
  };

  return (
    <div>
      <table style={{ fontSize: '0.85rem' }} className="table table-hover table-border table-sm table-responsive text-sm">
        <thead>
          <tr>
            <th>Sr</th>
            <th>CandidateName</th>
            <th>Father</th>
            <th>Aadhar No</th>
            <th>Enrolment No</th>
            <th>Course</th>
            <th>Course status</th>
            <th>Cert issued on</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading ? (
              <tr>
                <td colSpan="12" className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </td>
              </tr>
            ) : (
              students.map((student, i) => (
                <tr key={i}>
                  <th>{(currentPage - 1) * 10 + i + 1}</th>
                  <td>{student.name}</td>
                  <td>{student.fatherName}</td>
                  <td>{student.aadharCardNumber}</td>
                  <td>{student.enrolmentNumber}</td>
                  <td>{student.courseName}</td>
                  <td>{student.courseStatus}</td>
                  <td>{student.certificateIssueDate}</td>
                  <td>
                    <button onClick={() => handleEditStudent(student)} className="btn btn-success btn-sm me-1">
                      <i className="fa fa-edit"></i>
                    </button>
                    <button onClick={() => openConfirmDialog(student)} className="btn btn-danger btn-sm">
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))
            )
          }
        </tbody>
      </table>

      {showDialog && (
        <div className="custom-modal-backdrop">
          <div className="custom-modal">
            <div className="custom-modal-header">
              <h5>Confirm Delete</h5>
            </div>
            <div className="custom-modal-body">
              Are you sure you want to delete <strong>{selectedStudent?.name}</strong>?
            </div>
            <div className="custom-modal-footer">
              <button className="btn btn-secondary" onClick={closeConfirmDialog}>Cancel</button>
              <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .custom-modal-backdrop {
          position: fixed;
          top: 0; left: 0;
          width: 100vw;
          height: 100vh;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1050;
        }

        .custom-modal {
          background: white;
          border-radius: 6px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 0 15px rgba(0,0,0,0.3);
          animation: fadeIn 0.2s ease-out;
        }

        .custom-modal-header, .custom-modal-footer {
          padding: 1rem;
          border-bottom: 1px solid #dee2e6;
        }

        .custom-modal-footer {
          border-top: none;
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }

        .custom-modal-body {
          padding: 1rem;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default StudentsList;
