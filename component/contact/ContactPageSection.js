import React from "react";
import ContactForm from "../form/ContactForm";

const ContactPageSection = () => {
  return (
    <section className="tf__contact_page mt_190 xs_mt_95">
      <div className="container">
        <div className="row">
          <div className="col-xxl-8 col-xl-7 col-lg-6 wow fadeInLeft">
            <div className="tf__contact_form">
              <div className="tf__heading_area tf__heading_area_left mb_25">
                <h5>Contact Us</h5>
                <h2>We Provide the Best Secondary Education.</h2>
              </div>
              <p>
                Our council is committed to delivering high-quality secondary
                education through well-designed courses and a dedicated team of
                educators.
              </p>
              <ContactForm />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-5 col-lg-6 wow fadeInRight">
            <div className="tf__contact_text">
              {/* <div className="tf__contact_single">
                <div className="icon blue">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="text">
                  <h3>Call</h3>
                  <a href="callto:+91 90687 86101">+91 90687 86101</a>
                  
                </div>
              </div> */}
              <div className="tf__contact_single">
                <div className="icon orange">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="text">
                  <h3>Mail us on</h3>
                  <a href="mailto:info@hcse.org.in">info@hcse.org.in</a>
                  {/* <a href="mailto:coraty@bara.com">coraty@bara.com</a> */}
                </div>
              </div>
              {/* <div className="tf__contact_single">
                <div className="icon green">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>Yamunanagar</p>
                </div>
              </div> */}
            </div>
          </div>

          <div className="col-xl-12 wow fadeInUp">
            <div className="tf__contact_map mt_100">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27598.00603246016!2d77.29925049999999!3d30.158541249999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390efbee3dc0d0eb%3A0xf105c50233e747d2!2sJagadhri%2C%20Haryana!5e0!3m2!1sen!2sin!4v1748943066098!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageSection;
