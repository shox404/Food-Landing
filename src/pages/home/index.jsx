import React from "react";

export default function Home() {
  return (
    <div className="overflow-hidden flex items-center h-screen">
      <div className="relative ml-56 mt-14 md:ml-5  md:mt-[450px]">
<h3 className={"ml-1"}>Healthy & Testy Food</h3>
        <h1 className="text-5xl font-bold md:text-4xl">
          Enjoy Healthy Life <br /> & Testy Food.
        </h1>
        <img src={require("./img.png")} className="absolute right-0 top-24 md:top-[50px]" />
        <p className="py-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Varius
          sed pharetra dictum neque massa congue
        </p>
        <div className="flex gap-4">
          <button className="py-4 px-10 bg-[#195A00] text-white rounded-lg md:px-6">
            Show more
          </button>
          <button className="py-4 px-10 text-[#195A00] rounded-lg border-2 md:px-6">
            Place an order
          </button>
        </div>
      </div>
      <img
        src={require("./Header Hero (5).png")}
        className="w-[60%] absolute top-[-200px]  right-[-200px] md:w-[80%] md:mr-[200px]  md:mt-[200px] sm:w-[450px] "
      />
    </div>
  );
}
