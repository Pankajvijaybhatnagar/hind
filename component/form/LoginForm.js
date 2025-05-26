"use client";
import { useEduorContext } from "@/context/EduorContext";
import conf from "@/lib/config";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const LoginForm = () => {
  const { isValidEmail } = useEduorContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const router = useRouter();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!password || !email) {
      toast.error("Please fill out all fields.");
    } else if (!isValidEmail(email)) {
      toast.warning("Please provide a valid email address.");
    } else {
      // If the form is successfully submitted, show a success toast

      const response = await fetch(`${conf.apiBaseUri}/login`, {
        method:"POST",
        body: JSON.stringify({
          email,password
        })
      })
      console.log(response)


      // if( email === "hcseindia14@gmail.com" && password === "admin@101") {
      //   localStorage.setItem("token", `${email}:${password}`); // Replace with actual token logic
      //   toast.success("Logged In successfully!");
      //   setPassword("");
      //   setEmail("");
      //   router.push("/dashboard"); 
      // } else {
      //   toast.error("Invalid email or password.");
      // }
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="row">
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <label>password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="col-xl-12">
          {/* <div className="tf__login_imput tf__login_check_area">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Remeber Me
              </label>
            </div>
            <a href="#">Forget Password ?</a>
          </div> */}
        </div>
        <div className="col-xl-12">
          <div className="tf__login_imput">
            <button type="submit" className="common_btn">
              login
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
