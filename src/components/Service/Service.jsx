import React from "react";
import CountUp from "react-countup";

const Service = () => {
  return (
    <section className="container h-auto md:h-32">
      <div className="mx-auto my-4 grid w-full -translate-y-10 grid-cols-2 gap-y-4 divide-x divide-[#002244] bg-[#FFFFFF] p-4 shadow-lg dark:bg-[#002244] dark:text-[#D9D9D9] md:max-w-[800px] md:-translate-y-16 md:grid-cols-4 md:gap-y-0 md:p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-bold text-[#002244] dark:text-[#FFD700] sm:text-2xl md:text-3xl">
            <CountUp end={53} suffix="+" duration={2.75} />
          </h1>
          <h2 className="text-sm text-[#002244] dark:text-[#D9D9D9] sm:text-md md:text-lg">Happy Clients</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-bold text-[#002244] dark:text-[#FFD700] sm:text-2xl md:text-3xl">
            <CountUp end={256} suffix="+" duration={2.75} />
          </h1>
          <h2 className="text-sm text-[#002244] dark:text-[#D9D9D9] sm:text-md md:text-lg">Completed Projects</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-bold text-[#002244] dark:text-[#FFD700] sm:text-2xl md:text-3xl">
            <CountUp end={8} suffix="+" duration={2.75} />
          </h1>
          <h2 className="text-sm text-[#002244] dark:text-[#D9D9D9] sm:text-md md:text-lg">Years of Experience</h2>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-xl font-bold text-[#002244] dark:text-[#FFD700] sm:text-2xl md:text-3xl">
            <CountUp
              start={-875.039}
              end={160527.012}
              duration={2.75}
              separator=" "
              suffix="+"
            />
          </h1>
          <h2 className="text-sm text-[#002244] dark:text-[#D9D9D9] sm:text-md md:text-lg">Website Visitors</h2>
        </div>
      </div>
    </section>
  );
};

export default Service;
