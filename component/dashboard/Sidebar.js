import Link from "next/link";
import React from "react";

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
    <div className=" p-3">
      <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li> */}
        {menus.map((menu, i) => (
          <li className="nav-item">
            <Link className="nav-link " href={menu.link} key={i}>
              {menu.name}
            </Link>
          </li>
        ))}
        
      </ul>
    </div>
  );
};

export default Sidebar;
