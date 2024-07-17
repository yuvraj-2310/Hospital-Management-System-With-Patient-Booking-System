'use client';
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../public/MITTAL HOSPITAL.png";
import Link from "next/link";
import { AiFillHome, AiFillPhone, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    const links = document.querySelectorAll('nav a[data-scroll]');
    links.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-[#ffffff39] shadow-xl backdrop-blur-[10px] z-[1000]">
      <div className="h-[16vh] w-full px-[2rem] lg:px-[10%] flex justify-between items-center">
        <div className="w-[30%]  lg:w-[10%]">
          <Image src={Logo} alt="Vercel Logo"/>
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
        <div
          className={`flex lg:gap-[10%] gap-5 font-extrabold items-center justify-center w-full lg:w-auto fixed lg:static top-[13vh] left-0 lg:top-0 bg-white lg:bg-transparent h-screen lg:h-auto transition-all duration-300 ease-in-out ${
            menuOpen ? 'opacity-100 z-20 transform translate-y-0' : 'opacity-0 lg:opacity-100 -z-10 lg:z-0 transform -translate-y-full lg:translate-y-0'
          } flex-col lg:flex-row`}
        >
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-75 flex gap-2 justify-center items-center lg:my-0 my-4">
            <AiFillHome />
            <Link href="#" data-scroll>
              <span className="mt-[.5px]">Home</span>
            </Link>
          </div>
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-100 lg:my-0 my-4">
            <Link href="#about-us" data-scroll>
              <span>About</span>
            </Link>
          </div>
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-75 lg:my-0 my-4">
            <Link href="#service" data-scroll>
              <span>Services</span>
            </Link>
          </div>
          <div className="border-b-[#53bdff] hover:border-b-[.5rem] duration-75 flex gap-1 justify-center items-center lg:my-0 my-4">
            <AiFillPhone />
            <a href="tel:+919045719350">
              <span>9045719350</span>
            </a>
          </div>
          <div className="my-4 lg:my-0">
            <a href="https://appointment-nine.vercel.app/" target="_blank">
              <button className="w-[12rem] h-[3rem] bg-[#53bdff] text-[1rem] text-white rounded-lg btn-book duration-100">
                Book Appointment
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
