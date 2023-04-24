import React from "react";

const CarouselSlide = ({ item }) => {
  return (
    <div>
      <img src={item.imageUrl} alt="Slide 1" />
      <div className="text-center mt-2 text-[#07393C] font-bold italic text-2xl">
        {item.imageText}
      </div>
    </div>
  );
};

export default CarouselSlide;
