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
    <div className="w-full min-h-screen md:mt-[100vh] md:mb-[-50vh]">
      <h2 className="text-[36px] my-5 text-center sm:text-[25px]">
        Murojat uchun
      </h2>
      <div className="flex items-center justify-center gap-24 md:flex-col ">
        <form onSubmit={handleSubmit} className="w-[40%] flex flex-col gap-20 md:w-[90%]">
          <input
            type="text"
            placeholder="Ism"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-[50px] border border-gray-300 p-2 rounded-md"
            data-aos="fade-down"
            data-aos-delay="200"
          />
          <input
            type="text"
            placeholder="+998 _ _ _ _ _ _"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full h-[50px] border border-gray-300 p-2 rounded-md"
            data-aos="fade-down"
            data-aos-delay="500"
          />
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:w-[90%]"
            data-aos="fade-down"
            data-aos-delay="600"
          >
            Yuborish
          </button>
        </form>
        <img src={Get} alt="Get in Touch" className="w-[40%] md:w-[90%]" />
      </div>
    </div>
  );
}

export default Signin;
