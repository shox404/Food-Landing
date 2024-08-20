import React from 'react';
import Bg from "../Team/9128d330-a730-4c74-a26a-9fa61a840ca4.png";

function Team(props) {
    return (
        <div
            className="w-full h-[660px] flex justify-center items-center md:h-[80%] bg-cover bg-center"
            style={{ backgroundImage: `url(${Bg})` }}
        >
            <div className="text-center   mt-[280px] bg-opacity-50 p-4 rounded-md">
                <h2 className=" md:text-[30px] md:mt-[-50px] text-2xl text-white mb-5 text-[45px]">Team Member</h2>
                <p className={" md:w-[290px] w-[450px] md:mb-[30px] text-[17px] text-white"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue</p>
            </div>
        </div>
    );
}

export default Team;
