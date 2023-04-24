import React from "react";

const Product = ({ item }) => {
  return (
    <div>
      {" "}
      <div className="rounded-lg bg-[#FFFDD0] p-2 flex flex-col justify-between w-[80vw] md:w-[40vw] lg:w-[20vw] text-[#07393C] mx-auto align-center self-end border border-transparent transition-all h-[500px] hover:shadow-md">
        <div>
          <img
            className="rounded-lg w-full h-[300px] object-contain"
            h-70px
            src={item.productImg[0]}
            alt=""
          />
        </div>
        <div className="px-3">
          <h3 className="font-extrabold text-sm text-[#410004] italic capitalize my-2">
            {item.productShop}
          </h3>
          <h1 className="text-xl font-bold my-2 text-[#07393C]">
            NGN {item.productPrice}
          </h1>
          <p className="text-sm md:text-base lg:text-lg font-normal tracking-wide my-1 text-[#FF6863] capitalize">
            {item.productName}
          </p>

          <div className="flex justify-start gap-4 my-4">
            <button className="w-[90px] lg:w-[max] py-2 px-2 mr-auto rounded  text-xs font-medium bg-transparent border border-[#FF6863] text-[#FF6863] hover:text-[#07393C] hover:bg-[#FF6863] transition-all hover:border-[#07393C]">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
