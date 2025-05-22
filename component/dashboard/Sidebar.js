"use client";


import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const menus = [
    {
      name: "Home",
      link: "/dashboard",
    },
    {
      name: "Students",
      link: "/dashboard/students",
    },
  ];

  return (
    <div style={{height:"100%"}}  className=" p-3 pr-0  ">

      <div>
        <Image width={100} height={100} src={'/images/logo3.png'} />
      </div>
      <div style={{justifyContent:"space-betwee", height:"70%"}} className="d-flex flex-column ">
        <ul className="navbar-nav justify-content- flex-grow-1  mt-3">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li> */}
        {menus.map((menu, i) => (
          <li className={`nav-item px-2 rounded ${usePathname() === menu.link ? "bg-white" : ""}`} key={i}>
            <Link className="nav-link  " href={menu.link} key={i}>
              {menu.name}
            </Link>
          </li>
        ))}
        
        </ul>
       <button className="btn btn-danger">LogOut</button>
        
      </div>
    </div>
  );
};

export default Sidebar;
