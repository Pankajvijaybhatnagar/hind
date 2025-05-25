import Link from 'next/link';
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
                <li><Link href="/dashboard">Login</Link></li>
                <li><Link href="/help">Support</Link></li>
                <li><Link href="/verify-certificate">Verify Student</Link></li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopbarSection;
