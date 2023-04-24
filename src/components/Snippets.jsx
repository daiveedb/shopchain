import React from "react";
import { categoryList } from "../productData";
import Category from "./Category";

const Snippets = () => {
  return (
    <div>
      {categoryList.map((item) => {
        return <Category category={item} />;
      })}
    </div>
  );
};

export default Snippets;
