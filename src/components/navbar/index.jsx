import { useEffect, useState } from "react";

export default function Navbar() {
  const [state, setState] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) setState(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setState(true);
    });
  }, []);

  const toggle = () => setState(!state);

  return (
    <nav
      className={`flex bg-[#d6d6d654] items-center justify-between h-[80px] w-full px-[100px] z-40 transition-all fixed top-0 md:flex-wrap md:p-10 md:h-auto md:gap-10 ${
        state ? 0 : "top-[-100%]"
      }`}
    >
      <img src={require("./logo.jpg")} className="md:m-auto h-[70px] rounded-md"/>
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
        {/*<img src={require("./search.png")} className="w-4" />*/}
        {/*<img src={require("./shop.png")} className="w-4" />*/}
        <button className="px-5 py-2 bg-white rounded-full">Contact</button>
      </div>
      <button
        onClick={toggle}
        className="hidden fixed top-5 right-5 py-2 px-4 rounded-full md:inline bg-white"
      >
        menu
      </button>
    </nav>
  );
}
