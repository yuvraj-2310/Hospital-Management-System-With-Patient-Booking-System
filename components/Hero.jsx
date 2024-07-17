import React from 'react'

function Hero() {
  return (
    <div className='flex flex-col'>
        <div className='bg-white h-[16vh] w-full'>
        </div>
        <div className='lg:h-[80vh] h-[120vh] flex justify-center items-center lg:pl-[10rem] lg:flex-row flex-col'>
        <div className="h-[60%] blur-[250px] w-[25%] rounded-full absolute left-[-10%] top-[20%] z-[-10] bg-pri"></div>
          <div className='h-[100%] lg:w-[50%] flex justify-center lg:items-start items-center flex-col gap-5'>
            <h1 className='lg:text-[5vw] text-[10vw] font-extrabold text-black'><span className='text-pri'>MITTAL<br /></span> HOSPITAL</h1>
            <p className='lg:text-[2vw] text-[4vw] font-semibold'> <span className='text-pri'>Find your Doctor</span>  and Book your Appointment</p>
            <a href="https://appointment-nine.vercel.app/" target='_blank'>
              <button className="w-[12rem] h-[3rem] bg-[#53bdff] text-[1rem] font-bold text-white rounded-lg btn-book duration-100">
                Book Appointment
              </button>
            </a>
          </div>
          <div className='h-[100%] lg:w-[50%] w-[100%] flex justify-center items-center flyinghero'>
            <img src='/flyingHero.png' alt='flying doctor image' className='h-[100%] w-[70%] backdrop-shadow-lg'/>
          </div>
        </div>
    </div>
  )
}

export default Hero