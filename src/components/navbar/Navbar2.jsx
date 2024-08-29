import React, { useEffect, useState } from "react";
import { BiSolidSun, BiPhoneCall, BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import { FaCaretDown } from "react-icons/fa";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar2 = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] border-b-[1px] border-[#FFD700]/50 bg-[#002244] text-white shadow-lg"
      >
        <nav className="container flex h-[70px] items-center justify-between py-2">
          <div className="text-2xl text-white md:text-3xl">
            <a href="/#home" className="">
              TECH
              <span className="ml-1 inline-block font-bold text-[#FFD700]">
                GLOBAL
              </span>
            </a>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-10">
              <li className="group relative cursor-pointer">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px] text-white"
                >
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-[#D9D9D9] p-2 text-black group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-[#FFD700]">Services</li>
                    <li className="p-2 hover:bg-[#FFD700]">About us</li>
                    <li className="p-2 hover:bg-[#FFD700]">Privacy policy</li>
                  </ul>
                </div>
              </li>
              <li className="cursor-pointer group">
                <a
                  href="/#home"
                  className="flex h-[72px] items-center gap-[2px] text-white"
                >
                  Services{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-[#D9D9D9] p-2 text-black group-hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="d-200 overflow-hidden">
                      <img
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                        src="https://picsum.photos/200"
                        alt="pics"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="pb-3 text-xl font-semibold text-[#002244]">
                        Best Selling
                      </h1>
                      <p className="text-sm text-[#616161]">
                        Tech Global Creators is the Leading Website Design
                        Company in Bangalore. We are Offering website design
                        services for Personal Website, Business Website,
                        Responsive website design, Single & multipage website
                        design, etc
                      </p>
                      <div className="grid grid-cols-3">
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold text-[#002244]">
                            Development
                          </h1>
                          <li className="cursor-pointer text-[#002244] hover:text-[#FFD700]">
                            Web development
                          </li>
                          <li className="cursor-pointer text-[#002244] hover:text-[#FFD700]">
                            IOS App Development
                          </li>
                          <li className="cursor-pointer text-[#002244] hover:text-[#FFD700]">
                            App Development
                          </li>
                        </ul>
                        <ul className="mt-3 flex flex-col gap-2">
                          <h1 className="pb-1 text-xl font-semibold text-[#002244]">
                            Other Services
                          </h1>
                          <li className="cursor-pointer text-[#002244] hover:text-[#FFD700]">
                            Cloud Services
                          </li>
                          <li className="cursor-pointer text-[#002244] hover:text-[#FFD700]">
                            Mobile App
                          </li>
                          <li className="cursor-pointer text-[#002244] hover:text-[#FFD700]">
                            App Development
                          </li>
                        </ul>
                        <div>
                          <img src="https://picsum.photos/180" alt="no image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="cursor-pointer">
                <a href="/#contact" className="text-white">
                  About us
                </a>
              </li>
              {/* Phone number section */}
              <div className="flex items-center gap-4">
                <li>
                  <BiPhoneCall className="h-[40px] w-[40px] rounded-md bg-[#FFD700] p-2 text-2xl text-[#002244] hover:bg-[#FFD700]/90" />
                </li>
                <li>
                  <div>
                    <p className="text-sm text-[#D9D9D9]">Call us on</p>
                    <p className="text-lg text-white">
                      {" "}
                      <a href="tel:+91123456789">+91 8464892914</a>
                    </p>
                  </div>
                </li>
              </div>
              {/* Light and dark mode switcher */}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl text-white"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl text-white"
                />
              )}
            </ul>
          </div>

          {/* Mobile view */}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl text-white"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl text-white"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-white"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all text-white"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar2;
