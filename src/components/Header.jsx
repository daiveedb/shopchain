import React from "react";
import Carousel from "./Carousel";

const Header = () => {
  return (
    <>
      <div className="flex header h-[110vh] w-full bg-[#FFFDD0] px-8 text-[#FF6863] mb-30px overflow-hidden">
        <div className="flex-[2] p-4 w-full h-full flex justify-center flex-col ">
          <p className="block text-2xl font-thin">WELCOME to </p>
          <h1 className="block text-3xl lg:text-5xl lg:ml-4 font-bold my-2 text-[#07393C]">
            Shop Chain
          </h1>
          <p className="block lg:ml-8 text-2xl lg:text-3xl">Campus' Largest</p>
          <h1 className="block text-3xl lg:text-5xl text-[#07393C] my-1 lg:ml-12 lg:my-3 font-bold">
            Online Store
          </h1>
          <div className="w-[600px] justify-between">
            <a href="#work">
              <button className="font-semibold rounded lg:ml-12 lg:text-lg py-3 px-5 my-2 lg:my-4 w-[230px] h-[70px] lg:w-[400px] lg:h-[50px]  bg-transparent border border-[#FF6863] text-[#FF6863] hover:text-[#07393C] hover:bg-[#FF6863] transition-all hover:border-[#07393C]">
                Become a Shop Chain vendor!
              </button>
            </a>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};

export default Header;

//  bg-transparent border border-[#FF6863] text-[#FF6863] hover:text-[#07393C] hover:bg-[#FF6863] transition-all hover:border-[#07393C]

//("#FF6863");
//("#ffffff");
//("#F7F2CA");
//("#07393C");
//("#6C63FF");
//("#FFFDD0")

{
  /* <div className="flex w-[130px] lg:w-[200px] justify-between p-4 lg:ml-20">
            <a href="https://t.me/Daiveeed" target="_blank">
              <p className="text-[#FF6863] text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaTelegramPlane />
              </p>
            </a>
            <a href="https://www.linkedin.com/in/davidbajomo" target="_blank">
              <p className="text-[#FF6863] text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaLinkedin />
              </p>
            </a>
            <a href=" https://wa.me/2347086082215" target="_blank">
              <p className="text-[#FF6863] text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaWhatsapp />
              </p>
            </a>
            <a href="https://github.com/daiveedb" target="_blank">
              <p className="text-[#FF6863] text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaGithub />
              </p>
            </a>
          </div> */
}
