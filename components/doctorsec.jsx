import React from 'react'
import DoctorCard from './doctorsec/doctorCard'


function Doctorsec() {
  return (
    <div className='  lg:px-[10%] py-[5%] lg:h-[110vh] h-[200vh]'>
        <div className='h-full flex flex-col gap-[1%] justify-center items-center'>
            <h1 className='lg:text-[3vw] text-[8vw] font-extrabold lg:h-[15vh] h-[10vh]'>
                <span className='text-pri'>Our</span> Doctors
            </h1>
            <h2 className='lg:h-[15vh] h-[30vh] lg:text-[1.5vw] text-[5vw] font-bold'>
                <span className='text-pri'>Meet Our</span> Exceptional Doctors
            </h2>
            <div className='h-[70vh] flex lg:flex-row flex-col  gap-[10%] w-full justify-center items-center'>
                <DoctorCard
                    degree="M.B.B.S.(Hons.) D.C.H"
                    image="/doctor1.png"
                    name="Subhash Mittal"
                    specialization="Consultant Physician"
                    link="https://appointment-nine.vercel.app/doctor/book-appointment/66955fdb594629eec5838f4b"
                />
                <DoctorCard
                    degree="M.B.B.S., D.G.O., F.I.N.M.C.H."
                    image="/doctor2.png"
                    name="Renuka Mittal"
                    specialization="Consultant Gynaecologist"
                    link="https://appointment-nine.vercel.app/doctor/book-appointment/66955f78594629eec5838f45"
                />
            </div>
        </div>

    </div>
  )
}

export default Doctorsec