import React, { useState } from "react";
import Styles from "./Dashboard.module.css";
import conf from "@/lib/config";

const AddStudentForm = ({ studentData, setStudentData }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (type, value) => {
    setStudentData((prevData) => ({
      ...prevData,
      [type]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [type]: "",
    }));

    if (type === "avatar") {
      setAvatarPreview(URL.createObjectURL(value));
    }
  };

  const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(`${conf.apiBaseUri}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const result = await response.json();
      if (result.success) {
        return result.filename;
      } else {
        throw new Error("File upload failed");
      }
    } catch (error) {
      throw new Error("File upload error: " + error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    try {
      const payload = { ...studentData };

      // Upload avatar if present
      if (studentData.avatar) {
        const uploadedFilename = await uploadAvatar(studentData.avatar);
        payload.avatar = uploadedFilename;
      }

      const response = await fetch(`${conf.apiBaseUri}/certificates`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok) {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          throw new Error(data.message || "Submission failed");
        }
      } else {
        console.log("Response from API:", data);
      }
    } catch (error) {
      console.log("Error during API request:", error.message);
    }
  };

  return (
    <div style={{maxWidth:"96%"}}  className="row ">
      <div className="col-md-2">
        <img
          src={avatarPreview}
          alt="Avatar Preview"
          style={{
            width: "100px",
            height: "100px",
            marginTop: 10,
            objectFit: "cover",
          }}
        />
      </div>
      <div className="col-md-10">
        <form
          style={{ fontSize: "0.9rem" }}
          className={Styles.formContainer}
          onSubmit={handleSubmit}
        >
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Father's Name", name: "fatherName", type: "text" },
            { label: "Mother's Name", name: "motherName", type: "text" },
            { label: "Date of Birth", name: "dateOfBirth", type: "date" },
            {
              label: "Aadhar Card Number",
              name: "aadharCardNumber",
              type: "text",
            },
            {
              label: "Enrolment Number",
              name: "enrolmentNumber",
              type: "text",
            },
            { label: "Enrolment Date", name: "enrolmentDate", type: "date" },
            { label: "Course Name", name: "courseName", type: "text" },
            { label: "Course Status", name: "courseStatus", type: "text" },
            {
              label: "Academic Division",
              name: "academicDivision",
              type: "text",
            },
            { label: "Course Duration", name: "courseDuration", type: "text" },
            {
              label: "Total Obtained Marks",
              name: "totalObtainedMarks",
              type: "text",
            },
            {
              label: "Overall Percentage",
              name: "overallPercentage",
              type: "text",
            },
            { label: "Grade", name: "grade", type: "text" },
            { label: "Final Result", name: "finalResult", type: "text" },
            {
              label: "Certificate Issue Date",
              name: "certificateIssueDate",
              type: "date",
            },
            { label: "Training Centre", name: "trainingCentre", type: "text" },
          ].map((field) => (
            <div className="" key={field.name}>
              <label className="form-label">{field.label}</label>
              <input
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                value={studentData[field.name]}
                name={field.name}
                type={field.type}
                className={`form-control form-control-sm ${
                  errors[field.name] ? "is-invalid" : ""
                }`}
              />
              {errors[field.name] && (
                <small className="text-danger">{errors[field.name]}</small>
              )}
            </div>
          ))}

          <div className="mb-3">
            <label className="form-label">Photo</label>
            <input
              onChange={(e) => handleChange("avatar", e.target.files[0])}
              type="file"
              className={`form-control form-control-sm ${
                errors.avatar ? "is-invalid" : ""
              }`}
            />

            {errors.avatar && (
              <small className="text-danger">{errors.avatar}</small>
            )}
          </div>

          <button type="submit" className="btn btn-primary btn-sm">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
