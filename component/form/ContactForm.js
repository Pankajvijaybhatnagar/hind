"use client";
import { useEduorContext } from "@/context/EduorContext";
import conf from "@/lib/config";
import React, { useState } from "react";
import { toast } from "react-toastify";

// Replace with your actual course list
const courseList = [
  "English Communication Development",
  "Spoken English Course",
  "English Communication Skills",
  "English for Interview and Job Preparation",
  "Personality Development with English",
  "Basic Computer Course (BCC/CCC)",
  "DCA (Diploma in Computer Applications)",
  "Tally with GST",
  "Graphic Designing",
  "Web Designing / Web Development",
  "Computer Hardware & Networking",
  "Data Entry Operator Course",
  "Digital Marketing Fundamentals",
  "SEO (Search Engine Optimization)",
  "Social Media Marketing (SMM)",
  "Google Ads & PPC (Pay-Per-Click)",
  "Content Marketing & Blogging",
  "Email Marketing & Automation",
  "Complete Digital Marketing Course",
  "Video Editing Course",
  "Cinematography Course",
  "Filmmaking Basics Course",
  "Mobile Video Editing Course",
  "Motion Graphics & VFX",
  "English Communication Development"
];


const ContactForm = () => {
  const { isValidEmail } = useEduorContext();

  const [formData, setFormData] = useState({
    name: "",
    district: "",
    state: "",
    mobile: "",
    email: "",
    education: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

const handleFormSubmit = async (e) => {
  e.preventDefault();

  const { name, district, state, mobile, email, education, course, message } = formData;

  // Check for empty fields
  if (!name || !district || !state || !mobile || !email || !education || !course || !message) {
    toast.error("Please fill out all fields.", { position: "top-right" });
    return;
  }

  // Validate mobile number
  if (!/^\d{10}$/.test(mobile)) {
    toast.warning("Please enter a valid 10-digit mobile number.", { position: "top-right" });
    return;
  }

  // Validate email address
  if (!isValidEmail(email)) {
    toast.warning("Please provide a valid email address.", { position: "top-right" });
    return;
  }

  try {
    const response = await fetch(`${conf.apiBaseUri}/inquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    // Check if the response is ok (status in the range 200-299)
    if (!response.ok) {
      const errorData = await response.json();
      toast.error(`Error: ${errorData.message || "Something went wrong."}`, { position: "top-right" });
      return;
    }

    const data = await response.json();
    toast.success("Form submitted successfully!", { position: "top-right" });

    // Reset form
    setFormData({
      name: "",
      district: "",
      state: "",
      mobile: "",
      email: "",
      education: "",
      course: "",
      message: "",
    });
  } catch (error) {
    toast.error("An error occurred while submitting the form. Please try again.", { position: "top-right" });
  }
};

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-6">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="text"
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-xl-6">
          <input
            type="text"
            name="education"
            placeholder="Education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div className="col-xl-12 mb-3">
          <select
          className="form-control"
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            {courseList.map((course, index) => (
              <option key={index} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>
        <div className="col-xl-12">
          <textarea
            name="message"
            rows={6}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          <button type="submit" className="common_btn_2">
            SEND REQUEST
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
