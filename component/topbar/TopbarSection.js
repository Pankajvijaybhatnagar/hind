import React from 'react';

const TopbarSection = ({ style }) => {
  return (
    <section className={style}>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-6 d-none d-md-block">
            <div className="tf__topbar_left d-flex flex-wrap align-items-center">
              <p>Follow Us on Social Media:</p>
              <ul className="d-flex flex-wrap">
                <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>

          <div className="col-xl-6 col-md-6">
            <div className="tf__topbar_right">
              <ul className="d-flex flex-wrap justify-content-end">
                <li><a href="/login">Login</a></li>
                <li><a href="/help">Support</a></li>
                <li className="tf__language_dropdown">
                  <a href="#"><img src="images/language_3.jpg" alt="language" /> English</a>
                  <ul className="tf__other_language">
                    <li><a href="#"><img src="images/language_2.jpg" alt="language" /> Hindi </a></li>
                    <li><a href="#"><img src="images/language_1.jpg" alt="language" /> Bengali</a></li>
                    <li><a href="#"><img src="images/language_1.jpg" alt="language" /> Tamil</a></li>
                    <li><a href="#"><img src="images/language_1.jpg" alt="language" /> Telugu</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopbarSection;
