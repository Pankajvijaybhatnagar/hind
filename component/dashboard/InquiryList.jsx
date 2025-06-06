import React, { useState } from 'react';

const InquiryList = ({ inquiries, onEdit, onDelete }) => {
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  const handleEditClick = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowEditModal(true);
  };

  const handleDeleteClick = (inquiry) => {
    setSelectedInquiry(inquiry);
    setShowDeleteDialog(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
    setSelectedInquiry(null);
  };

  const handleCloseDeleteDialog = () => {
    setShowDeleteDialog(false);
    setSelectedInquiry(null);
  };

  return (
    <>
      <table
        style={{ fontSize: '0.85rem' }}
        className="table table-hover table-border table-sm table-responsive text-sm"
      >
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
        <tbody>
          {inquiries.map((inquiry, index) => (
            <tr key={inquiry.id}>
              <td>{index + 1}</td>
              <td>{inquiry.name}</td>
              <td>{inquiry.mobile}</td>
              <td>{inquiry.email}</td>
              <td>
                {inquiry.district}, {inquiry.state}
              </td>
              <td>{inquiry.education}</td>
              <td>{inquiry.course}</td>
              <td>{inquiry.message}</td>
              <td>{inquiry.remark || 'N/A'}</td>
              <td>
                <button
                  className="btn btn-sm btn-primary me-2"
                  onClick={() => handleEditClick(inquiry)}
                  aria-label={`Edit inquiry ${inquiry.name}`}
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDeleteClick(inquiry)}
                  aria-label={`Delete inquiry ${inquiry.name}`}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modal-container">
            <h2 id="modal-title" className="modal-title">Edit Inquiry</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onEdit(selectedInquiry);
                handleCloseModal();
              }}
            >
              <label htmlFor="edit-name" className="modal-label">Name:</label>
              <input
                id="edit-name"
                type="text"
                className="modal-input"
                value={selectedInquiry.name}
                onChange={(e) => setSelectedInquiry({ ...selectedInquiry, name: e.target.value })}
                required
              />

              <label htmlFor="edit-mobile" className="modal-label">Mobile:</label>
              <input
                id="edit-mobile"
                type="text"
                className="modal-input"
                value={selectedInquiry.mobile}
                onChange={(e) => setSelectedInquiry({ ...selectedInquiry, mobile: e.target.value })}
                required
              />

              <label htmlFor="edit-email" className="modal-label">Email:</label>
              <input
                id="edit-email"
                type="email"
                className="modal-input"
                value={selectedInquiry.email}
                onChange={(e) => setSelectedInquiry({ ...selectedInquiry, email: e.target.value })}
                required
              />

              <label htmlFor="edit-message" className="modal-label">Message:</label>
              <textarea
                id="edit-message"
                className="modal-textarea"
                value={selectedInquiry.message}
                onChange={(e) => setSelectedInquiry({ ...selectedInquiry, message: e.target.value })}
                rows={4}
                required
              />

              <div className="modal-actions">
                <button type="submit" className="btn btn-primary me-2">
                  Save
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <div className="modal-backdrop" role="alertdialog" aria-modal="true" aria-labelledby="delete-title" aria-describedby="delete-desc">
          <div className="modal-container">
            <h2 id="delete-title" className="modal-title">Confirm Deletion</h2>
            <p id="delete-desc" className="modal-text">
              Are you sure you want to delete this inquiry?
            </p>
            <div className="modal-actions">
              <button
                className="btn btn-danger me-2"
                onClick={() => {
                  onDelete(selectedInquiry.id);
                  handleCloseDeleteDialog();
                }}
              >
                Yes, Delete
              </button>
              <button className="btn btn-secondary" onClick={handleCloseDeleteDialog}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Overlay behind modals */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 1050;
          animation: fadeIn 0.25s ease forwards;
        }

        /* Modal container */
        .modal-container {
          background: #ffffff;
          border-radius: 0.75rem;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 780px;
          padding: 1rem;
          box-sizing: border-box;
          animation: slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #374151;
          
        }

        .modal-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0rem;
          color: #111827;
        }

        .modal-label {
          display: block;
          margin-bottom: 0rem;
          font-weight: 600;
          color: #374151;
          font-size: 0.9rem;
        }

        .modal-input,
        .modal-textarea {
          flex:1 0 200px;
          padding: 0.3rem 0.5rem;
          border: 1px solid #d1d5db;
          border-radius: 0.5rem;
          font-size: 1rem;
          margin-bottom: 1rem;
          color: #111827;
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        .modal-input:focus,
        .modal-textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.3);
        }

        .modal-textarea {
          resize: vertical;
          min-height: 80px;
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        button.btn {
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.5rem 1.25rem;
          border-radius: 0.5rem;
          border: none;
          transition: background-color 0.2s ease;
          font-family: inherit;
        }

        button.btn-primary {
          background-color: #2563eb;
          color: white;
        }
        button.btn-primary:hover,
        button.btn-primary:focus {
          background-color: #1e40af;
        }

        button.btn-secondary {
          background-color: #e5e7eb;
          color: #374151;
        }
        button.btn-secondary:hover,
        button.btn-secondary:focus {
          background-color: #d1d5db;
        }

        button.btn-danger {
          background-color: #dc2626;
          color: white;
        }
        button.btn-danger:hover,
        button.btn-danger:focus {
          background-color: #991b1b;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 576px) {
          .modal-container {
            padding: 1rem;
          }
          .modal-title {
            font-size: 1.5rem;
          }
          button.btn {
            font-size: 0.85rem;
            padding: 0.45rem 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default InquiryList;
