import React from "react";
import { ProductList } from "../productData";
import Product from "./Product";

const Category = ({ category }) => {
  return (
    <div>
      <div className="m-auto border border-transparent hover:scale-[1.02] hover:border-[#07393C] rounded-lg w-[80vw] mt-[100px] transition-all ">
        <div className="bg-[#410004] text-[#ffffff] w-full h-[55px] mx-auto my-0 rounded-b-none rounded-lg text-center flex flex-col justify-center font-light">
          <p className="text-sm md:text-base lg:text-4xl title font-light">
            {category}
          </p>
        </div>
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-[0px] justify-center">
          {ProductList.map((item) => {
            if (item.productCategories.includes(category)) {
              return <Product item={item} key={item.id} />;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
