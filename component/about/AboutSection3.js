import React from "react";

const AboutSection3 = ({ style }) => {
  return (
    <div className={`${style} tf__about_2_area`}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow fadeInLeft">
            <div className="tf__about_2_img">
              <div className="tf__about_small">
                <img
                  src="images/about_2_img_copy.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <div className="tf__about_large">
                <img
                  src="images/about_2_img_copy.jpg"
                  alt="about us"
                  className="img-fluid w-100"
                />
              </div>
              <p>
                <span>24+</span> Years of Excellence in Education
              </p>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 wow fadeInRight">
            <div className="tf__about_2_text">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>About Us</h5>
                <h2>Your Gateway to Quality Secondary Education</h2>
              </div>
              <p>
                The Hindustan Council of Secondary Education is committed to providing
                a robust and comprehensive educational experience, empowering students
                for academic and personal success.
              </p>
              <ul>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_1.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Quality Curriculum</h4>
                    <p>
                      Our curriculum is designed to ensure a well-rounded education.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_2.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Student Development</h4>
                    <p>
                      We focus on holistic growth with both academics and extracurriculars.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_3.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Expert Faculty</h4>
                    <p>
                      Our team of experienced educators guide and mentor students.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <img
                      src="images/about_2_icon_4.jpg"
                      alt="about"
                      className="img-fluid w-100"
                    />
                  </div>
                  <div className="text">
                    <h4>Wide Recognition</h4>
                    <p>
                      Recognized for excellence in secondary education across regions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 mt_110 xs_mt_100 wow fadeInUp">
            <div className="tf__about_us_counter d-flex flex-wrap align-items-center">
              <p>
                <span className="counter">270,000+</span> Students Empowered for a Bright Future!
              </p>
              <a href="#">Explore All</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection3;
