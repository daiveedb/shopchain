import React from "react";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <div className="block w-100% my-3 transition-all text-2xl text-[#FFFDD0] hover:bg-[#FFFDD0] hover:text-[#410004] py-3 rounded-sm">
          <li>
            <a href="#" className="py-4 px-2 font-semibold transition-all ">
              Home
            </a>
          </li>
        </div>
        <div className="block w-100% my-3 transition-all text-2xl text-[#FFFDD0] hover:bg-[#FFFDD0] hover:text-[#410004] py-3 rounded-sm">
          <li>
            <a href="#" className="py-4 px-2 font-semibold transition-all ">
              Categories
            </a>
          </li>
        </div>
        <div className="block w-100% my-3 transition-all text-2xl text-[#FFFDD0] hover:bg-[#FFFDD0] hover:text-[#410004] py-3 rounded-sm">
          <li>
            <a href="#" className="py-4 px-2 font-semibold transition-all ">
              Feed
            </a>
          </li>
        </div>
        <div className="block w-100% my-3 transition-all text-2xl text-[#FFFDD0] hover:bg-[#FFFDD0] hover:text-[#410004] py-3 rounded-sm">
          <li>
            <a href="#" className="py-4 px-2 font-semibold transition-all ">
              About
            </a>
          </li>
        </div>
        <div className="block w-100% my-3 transition-all text-2xl text-[#FFFDD0] hover:bg-[#FFFDD0] hover:text-[#410004] py-3 rounded-sm">
          <li>
            <a href="#" className="py-4 px-2 font-semibold transition-all ">
              Help
            </a>
          </li>
        </div>
        <div className="block w-100% my-3 transition-all text-2xl text-[#FFFDD0] hover:bg-[#FFFDD0] hover:text-[#410004] py-3 rounded-sm">
          <li>
            <a href="#" className="py-4 px-2 font-semibold transition-all ">
              Vendor Login
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}
export default Sidebar;

// ("sidebar bg-[#410004] fixed top-[70px] right-0 h-[80vh] w-[70vw] md:w-[30vw] flex flex-col justify-between transition-all z-10  ");
