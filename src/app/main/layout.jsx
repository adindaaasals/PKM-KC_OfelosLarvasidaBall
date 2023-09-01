import NavbarLogout from "@/components/NavbarLogout";
import React from "react";

export const metadata = {
  title: "Ofelos Larvasida Ball",
  description: "Ofelos Larvasida Ball",
};

function layout({ children }) {
  return (
    <div className="w-full h-screen bg-[#F2F3F4]">
      <NavbarLogout />
      {children}
    </div>
  );
}

export default layout;
