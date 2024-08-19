import React from "react";
import Slider from "@ant-design/react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import imgSrc from "./img.png";
import imageSrc from "./image.png";
import cardSrc from "./card.png";
import { ContainerTruck02Icon } from "./icons";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-next"
      style={{
        position: "absolute",
        top: "50%",
        right: "10px",
        zIndex: 1,
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>→</span>
    </button>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="slick-arrow slick-prev"
      style={{
        position: "absolute",
        top: "50%",
        left: "10px",
        zIndex: 1,
        backgroundColor: "#000",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        width: "30px",
        height: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span>←</span>
    </button>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <CustomNextArrow />,
  prevArrow: <CustomPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const CarouselItem = ({ imgSrc, title, itemCount }) => (
  <div className="w-full py-10 px-2">
    <div className="h-[200px] rounded-xl overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <h1 className="text-xl font-semibold mt-2">{title}</h1>
    <p className="text-sm text-gray-500">{itemCount} Item</p>
  </div>
);

const Category = () => (
  <div className="relative">
    <img
      src={imgSrc}
      alt="Decorative element"
      className="absolute w-[250px] top-[-250px] left-0"
    />
    <div className="grid text-center mt-36">
      <h1 className="text-5xl font-bold md:mt-8">Food category</h1>
      <img
        src={imageSrc}
        alt="Category header"
        className="absolute left-[50%] translate-x-[-50%] translate-y-[-30px]"
      />
      <p className="text-[#828282] mt-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Varius
        sed pharetra dictum neque massa congue
      </p>
    </div>
    <div className="mt-10 w-[85%] m-auto relative">
      <Slider {...settings}>
        <CarouselItem imgSrc={cardSrc} title="Grand Italiano" itemCount={26} />
        <CarouselItem imgSrc={cardSrc} title="Pene Salmone" itemCount={23} />
        <CarouselItem
          imgSrc={cardSrc}
          title="Molto Tagliatelle"
          itemCount={20}
        />
        <CarouselItem imgSrc={cardSrc} title="Pepperoni tagli" itemCount={26} />
        <CarouselItem imgSrc={cardSrc} title="Grand Italiano" itemCount={26} />
      </Slider>
    </div>
    <div className="flex items-center justify-center gap-5">
      <img src={require("./image-1.png")} className="w-[40%] md:w-[90%]" />
      <div>
        <h1 className="text-2xl font-bold">Преимушества работы с нами</h1>
        <div className="grid grid-cols-2">
          <div>
            <div className="h-[40px] w-[40px] rounded-full">
              <ContainerTruck02Icon />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
);

export default Category;
