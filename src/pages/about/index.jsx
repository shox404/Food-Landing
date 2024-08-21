import React from "react";

export default function About() {
  return (
    <div className="flex items-center md:mt-14 justify-center w-full gap-5 py-20 px-36 md:flex-wrap md:py-10 md:px-5">
      <img src={require("./image.png")} className="w-[40%] md:w-full" />
      <div className="relative ml-28 md:ml-5">
        <img src={require("./text.png")} />
        <h1 className="text-5xl font-bold md:text-5xl">
          Food is an important <br />
          part Of a balanced Diet
        </h1>
        <p className="py-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex gap-4">
          <button className="py-4 px-10 bg-[#195A00] text-white rounded-lg">
            Show more
          </button>
          <div className="flex items-center gap-5">
            <button className="py-4 px-4 bg-[#195A00] text-white rounded-full">
              <img src={require("./play.png")} />
            </button>
            Watch video
          </div>
        </div>
      </div>
    </div>
  );
}
