import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousellist } from "../data";
import CarouselSlide from "./CarouselSlide";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // enable autoplay
    autoplaySpeed: 3000, // set autoplay speed to 3 seconds
  };
  return (
    <div className="hidden lg:block flex-1 lg:w-[300px] xl:w-[500px] pt-5 h-full relative mt-10">
      <Slider {...settings}>
        {Carousellist.map((item) => {
          return <CarouselSlide item={item} key={item.id} />;
        })}
      </Slider>
    </div>
  );
}

export default Carousel;

{
  /* <div>
        <img src={deliverybike} alt="Slide 1" />
        <div className="text-center mt-2 text-gray-700">Slide 1</div>
      </div>
      <div>
        <img src={deliverytruck} alt="Slide 2" />
        <div className="text-center mt-2 text-gray-700">Slide 2</div>
      </div>
      <div>
        <img src={webshopping} alt="Slide 3" />
        <div className="text-center mt-2 text-gray-700">Slide 3</div>
      </div>
      <div>
        <img src={dronedelivery} alt="Slide 4" />
        <div className="text-center mt-2 text-gray-700">Slide 4</div>
      </div>
      <div>
        <img src={shoppingbag} alt="Slide 5" />
        <div className="text-center mt-2 text-gray-700">Slide 5</div>
      </div> */
}
