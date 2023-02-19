import React from "react";
import RegularNavBar from "@/components/navbars/RegularNavBar";
import Footer from "@/components/Footer";

const RegularLayout = ({ children }: { children: any }) => {
  return (
    <>
      <RegularNavBar />
      {children}
      <Footer />
    </>
  );
};

export default RegularLayout;
