import React from 'react';
import Footerr from"../Footer/cf89b04a-4bb5-45af-a146-8352568e2711.png"
import Fot from"../Footer/Instagram (1).png"
import Yub from"../Footer/Send Button.png"
import Pr from"../Footer/p.png"
import Tw from"../Footer/t.png"
import Fe from"../Footer/f.png"
import In from"../Footer/i.png"
import Yu from"../Footer/y.png"
function Footer(props) {
    return (
        <div className="w-[100%] h-[660px] flex justify-center items-center md:h-[80%] bg-cover bg-center" style={{backgroundImage: `url(${Footerr})`}}>
            <div className="text-center   mt-[280px] bg-opacity-50 p-4 rounded-md">
<div>
    <h2 className={"ml-[-180px]  font-bold text-[24px]"}>Foodtuck</h2>
    <p className={"w-[250px] text-start"}>Subscribe our newsletter and
        get discount 25%off</p>
    <input type="text" name="" id="" placeholder={"Enter Your Email"}/>
    <button><img src={Yub} alt=""/></button>
    <div className={"flex "}>
        <img src={Pr} alt=""/>
        <img src={Tw} alt=""/>
        <img src={Fe} alt=""/>
        <img src={In} alt=""/>
        <img src={Yu} alt=""/>
    </div>
</div>
            </div>
            <div className={"ml-[650px] mt-[130px]"}>
                <h2>Instagram Gallery</h2>
                <br/>
                <img src={Fot} alt="" />

            </div>

        </div>
    );
}

export default Footer;