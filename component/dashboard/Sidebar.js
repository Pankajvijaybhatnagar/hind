"use client";


import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Sidebar = () => {
  const menus = [
    {
      name: "Home",
      link: "/dashboard",
      icon: "fa-house",
    },
    {
      name: "Students",
      link: "/dashboard/students",
      icon: "fa-user-graduate",
    },
    // {
    //   name: "Contact Form",
    //   link: "/dashboard/contact-us-form",
    //   icon: "fa-envelope",
    // },
  ];

  const router = useRouter();

  
  return (
    <div style={{height:"100%"}}  className=" p-3 pr-0  ">

      <div className="" style={{width:"100px", height:"100px" , margin:"auto"}}>
        <Image  width={100} height={100} src={'/images/logo3.png'} />
       
      </div>
      <div style={{ justifyContent: "space-betwee", height: "80%" }} className="d-flex flex-column ">
        <ul className="navbar-nav justify-content- flex-grow-1  mt-3">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li> */}
        {menus.map((menu, i) => (
          <li className={`nav-item px-2 rounded ${usePathname() === menu.link ? "bg-white text-black" : ""}`} key={i}>
            <Link className="nav-link d-flex align-items-center gap-2" href={menu.link} key={i}>
              <i className={`fa-solid ${menu.icon} mr-2`}></i>
              {menu.name}
            </Link>
          </li>
        ))}
        
        </ul>
       <button onClick={() => {
          localStorage.removeItem("token");
          toast.success("Logged out successfully!");
           router.push("/login");
       }} className="btn btn-danger">LogOut</button>

      </div>
    </div>
  );
};

export default Sidebar;
