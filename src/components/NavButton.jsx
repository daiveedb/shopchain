import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import Sidebar from "./Sidebar";

function NavigationButton() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <button
        className=" text-4xl hover:scale-[1.05] transition-all text-[#FFFDD0]"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <GrClose /> : <FaBars />}
      </button>
      <Sidebar isOpen={isSidebarOpen} />
    </>
  );
}
export default NavigationButton;

//
