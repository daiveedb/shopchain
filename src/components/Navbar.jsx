import React from "react";
import NavigationButton from "./NavButton";

const Navbar = () => {
  const [login, setLogin] = React.useState(false);

  return (
    <>
      <nav className="bg-[#ff6863ef] shadow-lg fixed top-0 left-0 w-full z-20 ">
        <div className=" px-10">
          <div className="flex justify-between">
            <div className="flex justify-between w-full">
              <div>
                {/* <!-- Website Logo --> */}
                <a href="#" className="flex items-center py-4 px-2">
                  <h1 className="font-bold text-[#FFFDD0] text-lg lg:text-3xl">
                    SHOP<span className="text-[#ffffff]">CHAIN</span>
                  </h1>
                </a>
              </div>
              {/* <!-- Primary Navbar items --> */}
              <NavigationButton />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// max-w-6xl mx-auto
