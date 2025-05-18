"use client";
import React from "react";
import { Form } from "react-bootstrap";

const ContactSection2 = () => {
  return (
    <section className="tf__contact_3 mt_100">
      <div className="container">
        <div className="tf__contact_3_area">
          <div className="row">
            <div className="col-xl-6 col-lg-6 wow fadeInLeft">
              <div className="tf__contact_3_text">
                <h2>
                  Enroll with <span>Hindustan Council of Secondary Education</span>
                </h2>
                <p>
                  Join us to experience quality secondary education with a wide range of courses
                  designed to empower and prepare you for a successful future. Learn, grow, and achieve your goals.
                </p>
                <a href="#">Apply Now</a>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow fadeInRight">
              <form className="tf__contact_3_form">
                <div className="row">
                  <div className="col-12">
                    <input type="text" placeholder="Your Name*" required />
                  </div>
                  <div className="col-12">
                    <input type="email" placeholder="Your Email*" required />
                  </div>
                  <div className="col-12">
                    <input type="tel" placeholder="Phone Number*" required />
                  </div>
                  <div className="col-12">
                    <Form.Select className="select_js" required>
                      <option value="">Select a Course</option>
                      <option value="Mathematics">Mathematics</option>
                      <option value="Science">Science</option>
                      <option value="English">English</option>
                      <option value="Social Studies">Social Studies</option>
                      <option value="Computer Science">Computer Science</option>
                    </Form.Select>
                  </div>
                  <div className="col-12">
                    <button type="submit">Send Request</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
