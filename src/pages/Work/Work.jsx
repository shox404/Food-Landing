import React from 'react';
import F1 from"../Work/1.png"
import F2 from"../Work/2.png"
import F3 from"../Work/3.png"
import F4 from"../Work/4.png"
import F5 from"../Work/5.png"
import F6 from"../Work/6.png"
function Work(props) {
    return (
        <div className={"w-full h-auto"}>
<div    className={"w-full h-auto text-center items-center justify-center md:mt-[450px]"}>
    <p className={"text-[18px]"}>Partners & Clients</p>
    <h2 className={"text-[48px] font-bold text-[30px]"}>We work with the best pepole</h2>
</div>
            <br/>
            <br/>
          <div    className={"w-full h-auto text-center items-center justify-center flex gap-24 md:flex-col"}>
              <img src={F1} alt=""/>
              <img src={F2} alt=""/>
              <img src={F3} alt=""/>
              <img src={F4} alt=""/>
              <img src={F5} alt=""/>
              <img src={F6} alt=""/>
</div>
<br/>
<br/>
<br/>
<br/>

        </div>
    );
}

export default Work;