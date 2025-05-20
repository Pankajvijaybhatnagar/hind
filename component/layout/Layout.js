"use client";
import React from "react";
import NavbarSection from "../navbar/NavbarSection";
import FooterSection from "../footer/FooterSection";
import ScrollToTopButton from "../utils/ScrollToTopButton";
import FooterSection2 from "../footer/FooterSection2";

const Layout = ({ children }) => {
  return (
    <>
      <NavbarSection style="" logo="/images/logo3.png" />
      {children}
      <ScrollToTopButton style="" />
      <FooterSection2 style="tf__footer_3" logo="/images/logo3.png" />
    </>
  );
};

export default Layout;
