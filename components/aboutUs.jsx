'use client';
import React, { useRef, useState } from "react";

function AboutUs() {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error('Failed to play video:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="lg:h-[120vh] h-[200vh] py-[5%] relative overflow-hidden px-[2rem]" id="about-us">
      <div className="h-[60%] blur-[250px] w-[25%] rounded-full absolute left-[-10%] top-[20%] z-[-10] bg-pri"></div>
      <div className="h-[60%] blur-[250px] w-[25%] rounded-full absolute right-[-10%] top-[20%] z-[-10] bg-pri"></div>
      <div className="flex justify-center items-center flex-col lg:gap-[2vh] gap-[5vh]">
        <h1 className="lg:text-[3vw] text-[5vw] h-[10vh] font-extrabold">
          <span className="text-pri">About</span> Us
        </h1>
        <h2 className="lg:text-[1.3vw] h-[15vh] font-bold lg:block hidden">
          Leading healthcare institution dedicated to exceptional medical services and personalized care.
        </h2>
        <div className="h-[135vh] flex lg:flex-row flex-col lg:gap-[0%] gap-[5%] w-full items-center">
          <div className="w-[50%] lg:h-full h-[50vh] flex justify-center">
            <div
              className={`lg:h-[40%] h-[100%] lg:w-[35%] w-full shadow-2xl flex justify-start items-end relative left-[15%] bg-white rounded-2xl  `}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="h-[90%] top-[-1%] w-full absolute bg-pri rounded-2xl z-[-1] left-[-17%] rotate-[-13deg]"></div>
              <h1 className={`text-[black] lg:text-[2vw] text-[4vw] font-extrabold absolute bottom-[40%] lg:ml-0 ml-2 text-center  z-20 ${isHovered ? 'hidden' : ''}`}>Hover to Play Video</h1>
              <video ref={videoRef} className={`h-[100%] w-full rounded-2xl duration-500 ${isHovered? '' : 'blur-md'}`}>
                <source src="/about.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="w-1/2 flex flex-col lg:items-start items-center lg:gap-[2%] gap-[5vh] lg:h-[100%]">
            <div className="flex gap-[2%] w-full items-start">
              <div className="h-[3px] w-[25px] bg-pri mt-[10px]"></div>
              <h1 className="lg:w-[80%] w-full font-semibold lg:text-[1vw] text-[3vw]">
              Mittal Hospital situated in Arjun Nagar, Agra, is one of the oldest running hospitals in the area. It started in 1994 and is treating patients and providing healthcare since then. 
Mittal Hospital is run by Dr Renuka Mittal (Obstetrician and gynaecologist) and Dr Subhash Mittal (General Physician and Child Specialist). 

              </h1>
            </div>
            <div className="flex gap-[2%] w-full items-start">
              <div className="h-[3px] w-[25px] bg-pri mt-[10px]"></div>
              <h1 className="lg:w-[80%] w-[100%] font-semibold lg:text-[1vw] text-[3vw]">
              It offers all round healthcare ranging from Maternal care, Ultrasound, Deliveries, C-section and other surgeries to Child and Adult Healthcare problems. 24/7 pathology lab services, emergency care, X ray and radiological scan services are also available here.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
