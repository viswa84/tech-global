import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#002244] to-[#003366] text-white">
      <section className="mx-auto max-w-[1200px] py-8">
        <div className="grid py-5 md:grid-cols-3">
          <div className="px-4 py-8">
            <h1 className="mb-3 text-xl font-bold sm:text-3xl">
              <a href="/#home" className="text-[#FFD700]">
                TECH
                <span className="font-bold text-[#FFD700]">GLOBAL</span>
              </a>
            </h1>
            <p>
              We make this belief a reality by putting clients first, leading
              with exceptional ideas, doing the right thing, and giving back.
            </p>
            <br />
            <div className="flex items-center gap-3 text-[#FFD700]">
              <FaLocationArrow className="w-6 h-6" />
              <p>
                VJL AURA 2nd Stage, 2nd Cross, Yarandahalli Circle,
                Bommasandra Industrial Area, Bengaluru, Karnataka 560105
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3 text-[#FFD700]">
              <FaMobileAlt className="w-4 h-4" />
              <p>+91 8464892914</p>
            </div>
            {/* Social Handle */}
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-xl">
                Important Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700]">
                  <a href="/#home">Home</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700]">
                  <a href="/#about">About</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700]">
                  <a href="/#services">Services</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700]">
                  <a href="/#login">Login</a>
                </li>
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-xl">
                Links
              </h1>
              <ul className="flex flex-col gap-3">
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700]">
                  <a href="/#privacy-policy">Privacy Policy</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700]">
                  <a href="/#services">Services</a>
                </li>
                <li className="cursor-pointer transition-all duration-300 hover:translate-x-1 hover:text-[#FFD700]">
                  <a href="/#about-us">About Us</a>
                </li>
              </ul>
            </div>
            <div className="px-4 py-8">
              <h1 className="mb-3 text-xl font-bold sm:text-xl">
                Social Links
              </h1>
              <div className="flex flex-col gap-3">
                <h2 className="text-lg">Subscribe to our newsletter</h2>
                <input
                  className="rounded-full px-3 py-1 text-[#002244] bg-white focus:border-[#FFD700] focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                  type="email"
                  placeholder="Email"
                />
                <div className="mt-6 flex items-center gap-3">
                  <a href="#" className="text-[#FFD700] duration-200 hover:scale-105">
                    <FaInstagram className="text-3xl" />
                  </a>
                  <a href="#" className="text-[#FFD700] duration-200 hover:scale-105">
                    <FaFacebook className="text-3xl" />
                  </a>
                  <a href="#" className="text-[#FFD700] duration-200 hover:scale-105">
                    <FaLinkedin className="text-3xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="border-t-2 border-gray-300 py-6 text-center text-[#FFD700]">
            © 2024 TECH GLOBAL. All rights reserved.
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
