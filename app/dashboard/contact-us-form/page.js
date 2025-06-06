"use client";

import InquiryList from '@/component/dashboard/InquiryList';
import conf from '@/lib/config';
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inquiries, setInquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    course: '',
    mobile: '',
    district: '',
  });

  const getInquiry = async () => {
    setIsLoading(true);
    try {
      const query = new URLSearchParams({
        ...filters,
      }).toString();
      const url = `${conf.apiBaseUri}/inquiries?page=${currentPage}&${query}`
      console.log(url)
      const response = await fetch(
       url,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch inquiries');
      }

      const data = await response.json();
      setInquiries(data.data);
    } catch (error) {
      console.error("Error fetching inquiries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getInquiry();
  }, [currentPage, filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleEdit = (updatedInquiry) => {
    // Logic to update the inquiry
};
const handleDelete = (id) => {
    // Logic to delete the inquiry
};

  return (
    <div>
      <div className="mb-3 d-flex gap-1">
        <input
          className="form-control form-control-sm mb-2"
          placeholder="Filter by name..."
          name="name"
          value={filters.name}
          onChange={handleFilterChange}
        />
        <input
          className="form-control form-control-sm mb-2"
          placeholder="Filter by email..."
          name="email"
          value={filters.email}
          onChange={handleFilterChange}
        />
        <input
          className="form-control form-control-sm mb-2"
          placeholder="Filter by course..."
          name="course"
          value={filters.course}
          onChange={handleFilterChange}
        />
        <input
          className="form-control form-control-sm mb-2"
          placeholder="Filter by mobile..."
          name="mobile"
          value={filters.mobile}
          onChange={handleFilterChange}
        />
        <input
          className="form-control form-control-sm mb-2"
          placeholder="Filter by district..."
          name="district"
          value={filters.district}
          onChange={handleFilterChange}
        />
      </div>

      {isLoading ? (
        <p>Loading inquiries...</p>
      ) : (
        <InquiryList inquiries={inquiries} />
      )}

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage}</span>
        <button
          className="btn btn-sm btn-outline-primary"
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Page;
