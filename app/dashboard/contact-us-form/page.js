"use client";

import InquiryList from '@/component/dashboard/InquiryList';
import Pagination from '@/context/Pagination';
import conf from '@/lib/config';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [inquiries, setInquiries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    course: '',
    mobile: '',
    district: '',
  });

const router = useRouter()

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
      console.log(data)
      setInquiries(data.data);
      setCurrentPage((data.pagination.currentPage ===0)?1:data.pagination.currentPage)
      setTotalPages(data.pagination.totalPages)
      setTotalRecords(data.pagination.totalRecords)
    } catch (error) {
      console.error("Error fetching inquiries:", error);
      localStorage.removeItem('token')
      router.push('/login')
      
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
    setCurrentPage(1)
  };

  const onEdit = async (updatedInquiry) => {
    // Logic to update the inquiry
    try {
      const response = await fetch(`${conf.apiBaseUri}/inquiries`, {
        method: 'PUT', // Use PUT for updating
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updatedInquiry)
      });

      const result = await response.json();
      console.log("Response from update:", result);
      if (result.success) {
        toast.success(result.message)
        getInquiry()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      console.log("Error updating inquiry:", error);
    }
  };



  const onDelete = async (id) => {
    try {
      const response = await fetch(`${conf.apiBaseUri}/inquiries`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ id: id })
      })
      const result = await response.json();
      console.log("Response from update:", result);
      if (result.success) {
        toast.success(result.message)
        getInquiry()
      } else {
        toast.error(result.error)
      }
    } catch (error) {
      console.log("error deleting inquiry:", error)
    }
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
        <>

          <InquiryList inquiries={inquiries} onEdit={onEdit} onDelete={onDelete} currentPage={currentPage} />

        </>

      )}
      
      <span className="d-flex justify-content-between align-items-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
        <span>
          Showing {inquiries.length}/{totalRecords} students
        </span>
      </span>
    </div>
  );
};

export default Page;
