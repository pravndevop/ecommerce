import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import React, { useState } from "react";
import { ApiSlides } from "../apifolder/SliderApi";
import './Slider.css'

function Slider() {
  //use State hook
  const [slides] = useState(ApiSlides);
  const [activeSilde, setactiveSilde] = useState(0);

  //style
  const arrowStyle =
    "rounded-full bg-gray flex justify-center items-center shadow-sm hover:cursor-pointer";

    const nextSlide = ()=>{
        if(activeSilde === slides.length - 1){
            setactiveSilde(0)
        }else{
            setactiveSilde(activeSilde + 1)
        }
    }
    const preSlide = ()=>{
        if(activeSilde === 0){
            setactiveSilde(slides.length - 1)
        }else{
            setactiveSilde(activeSilde - 1)
        }
    }
  return (
    <div className="parentDiv h-[540px] bg-white flex items-center justify-between mobile:hidden">
      {/* left arrow */}
      <div className={arrowStyle}>
        <ArrowLeftOutlined style={{ fontSize: "50px" }} onClick={preSlide}/>
      </div>
      {/* slide div */}
      {slides.map((slide, index) =>{
        if (index === activeSilde) {
          return (
            <div className={`wrapper flex w-[100%] h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` + slide.background}>
              <div className="slide flex items-center justify-center h-[100%]">
                <div className="forImage flex flex-1 justify-center items-center h-[100%]">
                  <img
                    className="h-[100%] object-cover"
                    src={slide.src}
                    alt="slide_img"
                  />
                </div>
                <div className="des flex flex-col flex-1 place-items-start justify-center ml-11">
                  <h2 className="text-[55px]">{slide.content.h2}</h2>
                  <p className="text-[30px]">{slide.content.p}</p>
                  <button className="btn">Shop Now</button>
                </div>
              </div>
            </div>
          )
        }
      })}
      {/* right arrow */}
      <div className={arrowStyle}>
        <ArrowRightOutlined style={{ fontSize: "50px" }} onClick = {nextSlide}/>
      </div>
    </div>
  );
}

export default Slider;
