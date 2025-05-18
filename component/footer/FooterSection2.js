"use client";
import { useEduorContext } from "@/context/EduorContext";
import Link from "next/link";
import React from "react";

const FooterSection2 = ({ style, logo }) => {
  const { handleVideoShow } = useEduorContext();
  return (
    <footer className={style}>
      <div className="container">
        <div className="tf__footer_apply">
          <div className="tf__footer_apply_overlay">
            <a className="venobox" role="button" onClick={handleVideoShow}>
              <i className="fas fa-play"></i>
            </a>
            <h3>Discover Quality Education with Us</h3>
            <p>
              Join Hindustan Council of Secondary Education for a transformative educational journey. Empowering students for a brighter future.
            </p>
            <a className="apply_btn" href="#">
              Enroll Now
            </a>
          </div>
        </div>
      </div>

      <div className="tf__footer">
        <div className="tf__footer_overlay pt_225">
          <div className="container">
            <div className="tf__footer_2_content_area">
              <div className="row justify-content-between">
                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_logo_area">
                    <Link className="footer_logo" href="/">
                      <img src={logo} alt="Hindustan Council of Secondary Education" className="img-fluid w-100" />
                    </Link>
                    <p>
                      At Hindustan Council of Secondary Education, we are committed to providing quality secondary education that empowers students to excel.
                    </p>
                    <ul className="d-flex flex-wrap">
                      <li>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fab fa-instagram"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-2 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Quick Links</h3>
                    <ul>
                      <li><Link href="/courses">Our Courses</Link></li>
                      <li><Link href="/events">Upcoming Events</Link></li>
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/contact">Contact Us</Link></li>
                      <li><Link href="/admission">Admission Process</Link></li>
                    </ul>
                  </div>
                </div>

                <div className="col-xl-3 col-md-7 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Contact Information</h3>
                    <p>Address: 123 Hindustan Road, New Delhi, India</p>
                    <p>
                      <span> Phone: +91 9876543210</span>
                      <span>Email: info@hindustancouncil.edu.in</span>
                    </p>
                    <p>
                      <span>Website: www.hindustancouncil.edu.in</span>
                    </p>
                  </div>
                </div>

                <div className="col-xl-3 col-md-5 col-lg-3">
                  <div className="tf__footer_content">
                    <h3>Newsletter</h3>
                    <p>
                      Subscribe to our newsletter for the latest news, updates, and educational insights.
                    </p>
                    <form>
                      <input type="email" placeholder="Your Email" required />
                      <button type="submit">Subscribe</button>
                    </form>
                  </div>
                </div>

                <div className="col-12">
                  <div className="tf__copyright">
                    <p>Copyright © {new Date().getFullYear()} Hindustan Council of Secondary Education. All rights reserved.</p>
                    <ul className="d-flex flex-wrap">
                      <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                      <li><Link href="/terms">Terms & Conditions</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection2;
