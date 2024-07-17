import React from "react";
import Card from "./categorySec/Card";
// import pediatrics from "../../public/pediatrics.png";
// import OBGYN from "../../public/OB-GYN.png";
// import generalmedicine from "../../public/generalmedicine.png";

function Category() {
  return (
    <div className="lg:h-[120vh] h-[170vh] flex justify-center items-center px-[2rem]" id="service">
      <div className="flex flex-col lg:gap-10 justify-center items-center lg:h-[60%]">
        <h1 className="lg:text-[3vw] h-[40vh] text-[6vw] font-extrabold"><span className="text-pri">Expert</span> Care Nationwide</h1>
        <h2 className="w-[50%] text-center h-[50vh] lg:block hidden lg:pb-10">
        Our hospital offers specialized care in Gynecology, General Medicine, and Pediatrics. Gynecology focuses on women's reproductive health, pregnancy, and childbirth. General Medicine provides comprehensive care for adults, managing chronic conditions and promoting overall well-being.
        </h2>
        <div className="flex  lg:flex-row flex-col lg:gap-[10%] gap-[7vh] lg:h-full h-[100vh] w-full justify-center items-center">
          <Card
            image="/pediatrics.png"
            span="P"
            title="ediatrics"
            para=
              " Pediatricians are doctors who manage the health of your child, including physical, behavior, and mental health issues. They are trained to diagnose and treat a broad range of childhood illnesses, from minor health problems to serious diseases."
            link="https://appointment-nine.vercel.app/doctor/book-appointment/66955fdb594629eec5838f4b"
          />
          <Card
            image="/OB-gyn.png"
            span="OB"
            title="-GYN"
            para=
              "OB-GYN stands for obstetrics and gynecology, which is a medical specialty that focuses on women's reproductive health. Obstetrics involves care during pre-conception, pregnancy, childbirth, and immediately after delivery."
            link="https://appointment-nine.vercel.app/doctor/book-appointment/66955f78594629eec5838f45"
          />
          <Card
            image="/generalmedicine.png"
            span="General"
            title=" Medicine"
            para=
              " They provide comprehensive care, including routine check-ups, health-risk assessments, immunizations, and preventive care. Internists are skilled in managing diseases that affect various organ systems."
            link="https://appointment-nine.vercel.app/doctor/book-appointment/66955fdb594629eec5838f4b"
          />
        </div>
      </div>
    </div>
  );
}

export default Category;
