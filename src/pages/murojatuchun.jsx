import React, { useState } from "react";
import Get from "../pages/left.png";
import axios from "axios";
import { notification } from "antd";

function Signin() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any of the required fields are empty
    if (!formData.name || !formData.phone) {
      notification.warning({
        message: "Majburiy maydonlar",
        description: "Iltimos, barcha majburiy maydonlarni to'ldiring!",
      });
      return; // Stop the submission process
    }

    try {
      const botToken = "7227870919:AAFRAJGeiaExwK_mKMkNay2bcn6PJBd37ng";
      const chatId = "7151774589";
      const text = `Name: ${formData.name}\nPhone: ${formData.phone}`;

      await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        chat_id: chatId,
        text: text,
      });

      // Clear the form inputs after successful submission
      setFormData({
        name: "",
        phone: "",
      });

      notification.success({
        message: "Muvaffaqiyatli",
        description: "Xabar muvaffaqiyatli yuborildi!",
      });
    } catch (error) {
      console.error("Xabar yuborishda xatolik:", error);
      notification.error({
        message: "Xatolik",
        description: "Xabar yuborib bo'lmadi.",
      });
    }
  };

  return (
    <div className="w-full sm:h-screen  flex flex-col items-center mt-[-350px] sm:ml-[-1px] sm:w-[90%] ">
      <h2 className="text-[36px] my-5 text-center mt-[250px] relative sm:text-[25px]">
        Murojat uchun
      </h2>
      <div className="w-[950px] flex justify-center sm:w-full lg:w-full lg:px-6 "></div>
      <div className=" md:flex-col  w-full h-full flex items-center justify-center pt-40 sm:flex-col sm:pt-0 lg:pt-0 lg:flex-col">
        <div className="w-[50%] z-50 md:pt-[480px] relative h-screen mt-[-20px] ml-24   sm:w-full lg:w-full sm:mt-20 sm:ml-10 lg:ml-60 ">
          <form onSubmit={handleSubmit} className="w-[580px]  h-[500px] flex-wrap pl-20 space-y-2 mt-[100px] sm:pl-0 sm:w-[100%]  sm:space-y-[-8px] sm:mt-32 lg:space-y-[-8px] lg:pl-0">
            <input
              type="text"
              placeholder="Ism"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-[450px] h-[50px] border border-gray-300 p-2 rounded-md sm:w-[90%] md:ml-4 md:mt-20"
              data-aos="fade-down"
              data-aos-delay="200"
            />

            <input
              type="email"
              placeholder=""
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-[450px] h-[50px] border md:ml-4 border-gray-300 p-2 hidden rounded-md sm:w-[90%] sm:hidden"
              data-aos="fade-down"
              data-aos-delay="300"
            />
            <br />
            <br />

            <input
              type="text"
              placeholder="+998 _ _ _ _ _ _"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-[450px] h-[50px] md:ml-4 border border-gray-300 p-2 rounded-md sm:w-[90%]"
              data-aos="fade-down"
              data-aos-delay="500"
            />
            <br />
            <br />

            <button
              type="submit"
              className="w-[448px] px-4 py-2 md:ml-4 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:w-[90%]"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Yuborish
            </button>
          </form>
        </div>

        <div className="w-[50%] md:mt-[-300px] md:ml-4 flex justify-center md:relative items-center mr-24 mt-[-220px] sm:w-[80%] sm:mr-[-20px] sm:mb-40 lg:w-[90%]   lg:mb-32 lg:mr-[20px]">
          <img src={Get} alt="Get in Touch" className={"mt-[-150px] md:mt-[450px] "} />
        </div>
      </div>
    </div>
  );
}

export default Signin;
