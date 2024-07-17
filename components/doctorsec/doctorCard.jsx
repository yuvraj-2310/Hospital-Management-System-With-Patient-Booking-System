'use client'
import React, { useState } from 'react';

function DoctorCard({ image, name, specialization, degree,link }) {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className={`h-[100%] lg:w-[30%] w-[60%] flex flex-col lg:gap-2 rounded-2xl shadow-xl p-[2%] doctorcard duration-500 ${hovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`bg-pri h-[75%] rounded-2xl ${hovered ? 'blur' : ''}`}>
        <img src={image} alt="doctor1" className='h-[100%] w-full' />
      </div>
      <h1 className='lg:text-[1.5vw] text-[5vw] font-bold text-center border-b-pri border-b-[2px]'>
        <span className='text-pri'>Dr.</span> {name}
      </h1>
      <h2 className='lg:text-[1vw] text-[3vw] font-semibold text-center text-pri'>{degree}</h2>
      <h2 className='lg:text-[1vw] text-[3vw] font-semibold text-center'>{specialization}</h2>

      {hovered && (
        <a href={link} target='_blank'>
          <button className="book-appointment-btn">Book Appointment</button>
        </a>
      )}
    </div>
  );
}

export default DoctorCard;

