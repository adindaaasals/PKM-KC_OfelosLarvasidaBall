import NavbarLogin from "@/components/NavbarLogin";
import React from "react";

export const metadata = {
  title: "Sign Up",
};

function layout({ children }) {
  return (
    <>
      <NavbarLogin />
      {children}
    </>
  );
}

export default layout;
