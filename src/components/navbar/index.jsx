import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import Lot from "../navbar/logo.jpg";

export default function Navbar() {
  const [state, setState] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) setState(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setState(true);
    });
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
      <>
        {/* Main Navbar */}
        <nav
            className={`flex bg-[#d6d6d654] items-center justify-between h-[80px] w-full px-[100px] z-40 transition-all fixed top-0 md:flex-wrap md:p-10 md:h-auto md:gap-10 ${
                state ? 0 : "top-[-100%]"
            }`}
        >
          <img
              src={require("./logo.jpg")}
              className="md:m-auto h-[70px] rounded-md"
          />
          <ul className="flex items-center gap-10 md:flex-wrap md:m-auto">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="bg-transparent">
              <option>Menu</option>
            </li>
            <li className="bg-transparent">
              <option>Services</option>
            </li>
            <li>
              <a href="#home">Offers</a>
            </li>
          </ul>
          <div className="flex gap-10 items-center md:m-auto">
            <button className="px-5 py-2 bg-white rounded-full">Contact</button>
          </div>

          {/* Hidden Image acting as Drawer trigger */}
          <img
              src={Lot}
              alt=""
              className="md:m-auto h-[60px] rounded-md hidden md:fixed md:mr-[260px] fixed top-7 right-5 md:inline"
          />
          <Button
              onClick={showDrawer}
              className="hidden border-none text-[25px] md:mr-[20px] fixed top-5 right-5 md:inline bg-transparent"
          >
            <MenuFoldOutlined />
          </Button>
        </nav>

        {/* Drawer Component */}
        <Drawer title="Menu" placement="right" onClose={onClose} open={open} width={240}>
          <ul className="flex flex-col gap-4 text-lg font-medium">
            <li>
              <a href="#home">Home</a>
            </li>
            <li className="bg-transparent">
              <option>Menu</option>
            </li>
            <li className="bg-transparent">
              <option>Services</option>
            </li>
            <li>
              <a href="#offers">Offers</a>
            </li>
          </ul>
        </Drawer>
      </>
  );
}
