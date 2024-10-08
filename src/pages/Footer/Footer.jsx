import React from "react";
import Footerr from "../Footer/Footer (3).png";
import Yub from "../Footer/Send Button.png";
import Pr from "../Footer/p.png";
import Tw from "../Footer/t.png";
import Fe from "../Footer/f.png";
import In from "../Footer/i.png";
import Yu from "../Footer/y.png";
import Lokat from "../Footer/MapPin.png";
import Phon from "../Footer/Phone.png";
import Emil from "../Footer/EnvelopeSimpleOpen.png";
import Data from "../Footer/Clock.png";

function Footer(props) {
  return (
    <div
      className=" md:flex-wrap  md:h-[110vh] w-full h-[500px] relative flex justify-between items-start bg-cover bg-center"
      style={{ backgroundImage: `url(${Footerr})` }}
    >
      <div className="p-4 rounded-md mt-[10px] ml-[150px] md:ml-[25px] md:mt-[-50px] ">
        {/*<img*/}
        {/*  src={require("./logo.jpg")}*/}
        {/*  className="md:m-auto h-[70px] rounded-md absolute top-20 md:top-10 "*/}
        {/*/>*/}
        {/*<h2 className="font-bold text-[24px] mt-[20px]">Foodtuck</h2>*/}
        <br />
        {/*<p className="w-[250px] text-start text-[20px]">*/}
        {/*  Subscribe to our newsletter and get 25% off*/}
        {/*</p>*/}
        <div className="flex mt-4">
          {/*<input*/}
          {/*  type="text"*/}
          {/*  placeholder="Enter Your Email"*/}
          {/*  className="w-[230px] h-[40px] rounded-md pl-2 "*/}
          {/*/>*/}
          {/*<button className="ml-2 ">*/}
          {/*  <img src={Yub} alt="Send" />*/}
          {/*</button>*/}
        </div>
        <div className="flex gap-5 mt-[320px]      ">
          {/*<img src={Pr} alt="Facebook" />*/}
          {/*<img src={Tw} alt="Twitter" />*/}
          <img src={Fe} alt="Facebook" />
          <img src={In} alt="Instagram" />
          <img src={Yu} alt="YouTube" />
        </div>
      </div>

      <div className="p-4 rounded-md mt-[100px] mr-[690px]   md:mt-[-400px] md:ml-[25px] ml-[-405px] md:mr-0 md:w-full">
        <h2 className="text-[25px] font-bold ml-2">Contact us</h2>
        <br />
        <h3 className="flex items-center md:text-[18px] w-[250px] ">
          <img src={Lokat} alt="Location" className="mr-2" />
          Узбекистан, Ташкентская область,  Ташкентский район, ул. Хамкоробод дом 9.
        </h3>
        <h3 className="flex mt-3 items-center md:text-[18px]">
          <img src={Phon} alt="Phone" className="mr-2" />
          <a href=" Tel: +998 99 765-33-22">          Тел: +998 99 765-33-22
          </a>
        </h3>
        <h3 className="flex mt-3 items-center md:text-[18px]">
          <img src={Emil} alt="Email" className="mr-2" />
          Emal.  Info@easyshopbymbm.uz
        </h3>
        <h3 className="flex mt-3 items-center md:text-[18px]">
          <img src={Data} alt="Hours" className="mr-2" />
          Sun - Sat / 10:00 AM - 8:00 PM
        </h3>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d712.3584405656674!2d69.2821508696194!3d41.29231769820702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8acbeef6317f%3A0x7efec26eacc39562!2z0JTQvtC8IOKEljksIFVsaXRzYSBLaG9uem9kYWJlZ2ltLCBUYXNoa2VudCwgVXpiZWtpc3Rhbg!5e1!3m2!1sen!2s!4v1724135801621!5m2!1sen!2s"
          width="550"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={
            "ml-[-750px] mt-7 md:mt-[-70px] md:ml-[35px] md:h-[400px]    md:w-[96%]"
          }
        />
      </div>
    </div>
  );
}

export default Footer;
