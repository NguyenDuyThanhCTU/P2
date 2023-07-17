import React from "react";
import Header from "./Section/Header";

import Hotline from "./Section/Hotline";
import Footer from "./Section/Footer";
import Copyright from "./Section/Copyright";

const ClientLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* <OnTop /> */}
      <Hotline />
      <Footer />
      <Copyright />
    </>
  );
};

export default ClientLayout;
