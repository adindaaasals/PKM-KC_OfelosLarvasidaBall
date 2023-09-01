import NavbarLogin from "@/components/NavbarLogin";
import React from "react";

export const metadata = {
  title: "Login",
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
