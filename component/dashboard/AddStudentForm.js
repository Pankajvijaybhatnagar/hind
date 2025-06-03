import React, { useState } from "react";
import Styles from "./Dashboard.module.css";
import conf from "@/lib/config";
import { toast } from "react-toastify";

const AddStudentForm = ({
  studentData,
  setStudentData,
  getStudents,
  setIsListShow,
}) => {
  const defaultAvatar = "/default-avatar.png"; // Ensure this image exists in your public folder
  const [avatarPreview, setAvatarPreview] = useState(
    studentData.avatar
      ? `${conf.apiBaseUri}/uploads/${studentData.avatar}`
      : defaultAvatar
  );
  const [errors, setErrors] = useState({});
  const [avatar, setAvatar] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (type, value) => {
    setStudentData((prev) => ({
      ...prev,
      [type]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [type]: "",
    }));
  };

  const validateFields = () => {
    const newErrors = {};
    const requiredFields = [
      "name",
      "fatherName",
      "motherName",
      "dateOfBirth",
      "aadharCardNumber",
      "enrolmentNumber",
      "rollNo",
      "courseName",
      "courseDuration",
      "totalObtainedMarks",
      "overallPercentage",
      "grade",
      "finalResult",
      "certificateIssueDate",
      "trainingCentre",
    ];

    requiredFields.forEach((field) => {
      if (!studentData[field]?.trim()) {
        newErrors[field] = "This field is required";
      }
    });

    if (!/^\d{12}$/.test(studentData.aadharCardNumber || "")) {
      newErrors.aadharCardNumber = "Aadhar must be a 12-digit number";
    }

    return newErrors;
  };

  const uploadAvatar = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

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
      throw new Error("Photo upload failed");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    const validationErrors = validateFields();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    const method = studentData.id ? "PUT" : "POST";
    const payload = { ...studentData };

    try {
      if (avatar) {
        const uploadedFilename = await uploadAvatar(avatar);
        payload.avatar = uploadedFilename;
      }

      const response = await fetch(`${conf.apiBaseUri}/certificates`, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(payload),
      });
      
      console.log(JSON.stringify(payload))
      const data = await response.json();
      if (data.success) {
        toast.success(data.message);
        getStudents();
        setIsListShow(true);
      } else {
        if (data.errors) {
          setErrors(data.errors);
        } else {
          throw new Error(data.message || "Submission failed");
        }
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
      console.log(error)
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "96%" }} className="row">
      <div className="col-md-2">
        <div
          className="shadow"
          style={{ width: "150px", height: "190px", marginTop: "40px" }}
        >
          <img
            src={avatarPreview}
            alt="Avatar Preview"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>
      <div className="col-md-10">
        <form
          style={{ fontSize: "0.9rem" }}
          className={Styles.formContainer}
          onSubmit={handleSubmit}
        >
          {[
            {
              label: "Roll No",
              name: "rollNo",
              type: "text",
              placeholder: "Enter Roll Number",
            },
            {
              label: "Full Name",
              name: "name",
              type: "text",
              placeholder: "Enter Full Name",
            },
            {
              label: "Father's Name",
              name: "fatherName",
              type: "text",
              placeholder: "Enter Father's Name",
            },
            {
              label: "Mother's Name",
              name: "motherName",
              type: "text",
              placeholder: "Enter Mother's Name",
            },
            {
              label: "Date of Birth",
              name: "dateOfBirth",
              type: "date",
              placeholder: "",
            },
            {
              label: "Aadhar Card Number",
              name: "aadharCardNumber",
              type: "text",
              placeholder: "Enter 12-digit Aadhar Number",
            },
            {
              label: "Enrolment Number",
              name: "enrolmentNumber",
              type: "text",
              placeholder: "Enter Enrolment Number",
            },

            {
              label: "Course Name",
              name: "courseName",
              type: "text",
              placeholder: "Enter Course Name",
            },
            {
              label: "Course Duration",
              name: "courseDuration",
              type: "text",
              placeholder: "e.g. 6 Months / 1 Year",
            },
            {
              label: "Total Obtained Marks",
              name: "totalObtainedMarks",
              type: "text",
              placeholder: "e.g. 450/500",
            },
            {
              label: "Overall Percentage",
              name: "overallPercentage",
              type: "text",
              placeholder: "e.g. 80%",
            },
            {
              label: "Grade",
              name: "grade",
              type: "text",
              placeholder: "e.g. A+",
            },
            {
              label: "Final Result",
              name: "finalResult",
              type: "text",
              placeholder: "e.g. Pass / Fail",
            },
            {
              label: "Certificate Issue Date",
              name: "certificateIssueDate",
              type: "date",
              placeholder: "",
            },
            {
              label: "Training Centre",
              name: "trainingCentre",
              type: "text",
              placeholder: "Enter Training Centre Name",
            },
          ].map((field) => (
            <div key={field.name} className="mb-3">
              <label className="form-label">{field.label}</label>
              <input
                onInput={(e) => handleChange(e.target.name, e.target.value)}
                value={studentData[field.name] || ""}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
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
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  setAvatar(file);
                  setAvatarPreview(URL.createObjectURL(file));
                }
              }}
              type="file"
              className={`form-control form-control-sm ${
                errors.avatar ? "is-invalid" : ""
              }`}
            />
            {errors.avatar && (
              <small className="text-danger">{errors.avatar}</small>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-sm"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddStudentForm;
