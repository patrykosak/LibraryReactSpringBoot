import React from "react";
import AppNavbar from "./AppNavbar";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div>
      <AppNavbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
