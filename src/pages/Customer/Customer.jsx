import React from 'react';
import Qushtirnoq from"../Customer/Quotes.png"
import Coment from"../Customer/Ellipse 2552.png"
import Osh from"../Customer/unsplash_oT7_v-I0hHg (1).png"
import Star from"../Customer/Star.png"
function Customer(props) {
    return (
        <div className="w-full h-screen">
            <div className={"w-full h-auto flex mt-52 md:flex-col md:mt-[15px]"}>
            <div className={"w-[50%] h-screen justify-center items-center "}>
                <div    className={" md:ml-[30px] ml-28 mt-8"}>
                    <p className={"text-[18px]"}>Testimonials</p>
                    <h2 className={"text-[48px] font-bold md:text-[30px] md:w-[250px]"}>Customer Review</h2>
                    <img src={Qushtirnoq} alt=""/>
                    <p className={"w-[480px] md:w-[330px] md:mt-4"}>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Quisque diam pellentesque bibendum non dui
                        volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                        Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                    <div className={"flex-col"}>
                        <img src={Coment} alt="" className={"mt-14"}/>
                        <h2 className={"ml-[90px] font-bold text-[18px] mt-[-60px] md:w-[200px]"}>Abdur Rahman</h2>
                        <p className={"ml-[90px] text-[16px]  text-[#828282]"}>Customer</p>
                    </div>
                </div>
            </div>

                <div className={"md:mt-[-150px]"}>
                    <img src={Osh} alt="" className={"z-0"}/>
                    <div className={"w-[50%] h-screen"}>

                        <div className={"rounded  w-[450px] md:mt-[1px]  h-[240px]  bg-[#FFFFFF]  border  ml-[-60px] mt-[-185px] relative"}>
                            <div className={"ml-8 mt-10"}>

                                <h2 className={"mt-5 text-[20px] md:ml-[50px] font-bold"}>Order now</h2>
                                <h3 className={" mt-[-25px] float-end mr-[50px] text-[18px] text-[#4F4F4F] font-bold"}>10.00$</h3>
                                <br/>
                                <img src={Star} alt="" className={"md:ml-[50px]"} />

                                <p className={"w-[350px] md:ml-[50px]  md:w-[300px] mt-3 text-[16px]"}>Lorem ipsum dolor sit amet, consectetur elit. Quisque diam pellentesque bibendum
                                    fringilla
                                    bibendum. Urna, elit augue urna,</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Customer;