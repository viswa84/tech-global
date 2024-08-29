import React from "react";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <main className="bg-white dark:bg-[#002244] p-8 rounded-lg shadow-lg">
    <header className="text-center mb-6">
      <h2 className="text-3xl font-bold text-[#002244] dark:text-[#FFD700]">
        Contact Us
      </h2>
      <p className="text-[#616161] dark:text-[#D9D9D9]">
        If you want to talk to us, don't hesitate to call or send us a message.
      </p>
    </header>
    <div className="flex flex-col gap-6 mb-8 md:flex-row md:justify-center">
      <div className="flex items-center gap-2 p-4 bg-[#F0F4F8] dark:bg-[#003366] rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <img src={emailIcon} alt="Email" className="w-6 h-6" />
        <a href="mailto:hello@techglobal.com" className="text-lg text-[#002244] dark:text-[#FFD700] hover:underline">
          hello@techglobal.com
        </a>
      </div>
      <div className="flex items-center gap-2 p-4 bg-[#F0F4F8] dark:bg-[#003366] rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
        <img src={phoneIcon} alt="Phone" className="w-6 h-6" />
        <a href="tel:+918464892914" className="text-lg text-[#002244] dark:text-[#FFD700] hover:underline">
          (+91) 8464892914
        </a>
      </div>
    </div>
    <Form />
  </main>
  );
}
