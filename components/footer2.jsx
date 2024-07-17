'use client';
import { useRef } from "react";

export default function Footer2() {
  const dialogRef = useRef(null);

  const show = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const close = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <div className="relative h-[90%] sm:w-[100%] md:mt-0 mt-[20%]">
      <div className="h-[.5rem] w-[100%] bg-pri "></div>
      <div className="h-[100%] bg-[#C9E4FF] flex flex-col  ">
        <div className="flex md:flex-row flex-col md:w-[60%] justify-start lg:ml-[17%]  items-center">
            <div className="flex flex-col items-center justify-center gap-8 mt-[8%]  ">
                <div className="flex gap-[5%] justify-center items-center">
                <img src="/MITTAL HOSPITAL.png" className="w-[100px]"  alt=".." />
                <h1 className="text-[1.5rem] font-extrabold whitespace-nowrap">Mittal Hospital</h1>
                </div>
            <p className="text-[black] w-[70%] text-center font-bold footer-para ">
            Compassinate Care, Trusted Expertise,and Cutting Edge Technology for your well-being
            </p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d457.9126229849212!2d77.98370324815603!3d27.166309080933388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397476fc977ede19%3A0x7ada352e11517e65!2sMittal%20Hospital!5e0!3m2!1sen!2sin!4v1720724388828!5m2!1sen!2sin" width="600" height="250" style={{borderRadius:"30px", marginTop:"10%"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="w-[60vw]"></iframe>
        </div>
        <div className="text-[black] flex gap-[10%] sm:flex-row flex-col items-center justify-center sm:mt-[5%] mt-[10%] ">
          <div className="grid grid-rows-3 grid-flow-col">
            <img
              src="/phone.svg"
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-bold text-[black] ">Tele</span>
            <p className="row-span-2 col-span-2">9045719350</p>
          </div>
          <div className="grid grid-rows-3 grid-flow-col ">
            <img
              src="/location.svg"
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-bold text-[black] ">Address</span>
            <p className="row-span-2 col-span-2 text-[.7rem] ">
            59/3N/2E, Tantpur Rd, Ayodhya
Kunj-A, <br /> Dashrath Kunj - B, Jodha Bai ka Rauza, <br /> Arjun Nagar,Agra, Uttar Pradesh,
282001
            {/* 417, Suncity Business Tower, <br /> Golf Course Rd, Suncity, Sector 54, <br /> Gurugram, Haryana 122011 */}
            </p>
          </div>     
          <div className="grid grid-rows-3 grid-flow-col">
            <img
              src="/email.svg"
              alt=".."
              className="row-span-3 mr-[10px] pt-[5px]"
            />
            <span className="col-span-2 font-bold  text-[black]">Mail</span>
            <p className="row-span-2 col-span-2">mittalhospitalagra@gmail.com</p>
          </div>
        </div>
        <div></div>
        <div className="flex sm:gap-[23%]  gap-10 justify-center mt-[5%] mb-[5%] font-bold text-[black] text-[15px]  ">
          <div className="text-black flex sm:flex-row flex-col justify-start items-start sm:gap-20">
            <a href="#about-us">
              <span>About Us</span>
            </a>
            
              <button onClick={show}>Contact</button>
            <a href="/terms" target="_blank" rel="noreferrer">
              <span>Terms of Use</span>
            </a>
            <a href="/privacypolicy" target="_blank" rel="noreferrer">
              <span>Privacy Policy</span>
            </a>
          </div>
          <div className="text-black">
            <span>Copyright © 2024 Mittal Hospital</span>
          </div>
        </div>
        <div className="w-[100%] h-[2px] bg-pri"></div>
        <div className="h-[8vh] flex justify-center items-center">
          <h1 className="font-bold">Developed BY : <a href="https://www.linkedin.com/in/yuvraj-singh-481720275/" target="_blank">Yuvraj Singh
            </a>, <a href="https://www.linkedin.com/in/suraj-sachan" target="_blank">Suraj Sachan</a></h1>
        </div>
      </div>
      <dialog   ref={dialogRef} className="h-[30%] w-[30%] rounded-lg font-bold p-[2%] backdrop:bg-black backdrop:opacity-70  ">
  <button autoFocus onClick={close} ><img src="/cross.svg" alt="" /></button>
  <p> <span className="text-[2rem] font-extrabold text-pri ">Contact:</span> <br /> <span className="text-[1.5rem] font-extrabold text-pri">Phone:-</span>9045719350<br /> <span className="text-[1.5rem] font-extrabold text-pri">E-Mail:-</span> mittalhospitalagra@gmail.com</p>
</dialog>
    </div>
  );
}
