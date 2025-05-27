"use client";
import React from "react";
import LoginForm from "../form/LoginForm";

const LoginSection = () => {

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    // For example, you can call an API to authenticate the user
    console.log("Login form submitted");
  }

  return (
    <section className="tf__login my-3 xs_mt_9">
      <div className="container">
        <div className="row wow fadeInUp">
          <div className="col-xxl-5 col-xl-6 col-md-9 col-lg-7 m-auto">
            <div className="tf__login_area">
              <h2>Login to HCSE</h2>
              <p>sign in to continue</p>
              <LoginForm onSubmit={handleLogin} />
              {/* <p className="or">
                <span>or</span>
              </p>
              <ul className="d-flex">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
              <p className="create_account">
                Dont’t have an aceount ?{" "}
                <Link href="/sign-up">Create Account</Link>
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
