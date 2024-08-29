import React from "react";
const BannerDetails = ({ reverse, img, title, description, points }) => {
  return (
    <section>
      <main className="bg-slate-100 dark:bg-slate-900 dark:text-white">
        <section className="container flex flex-col items-center justify-center py-10 md:h-[500px] ">
          <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
            <div
              data-aos="fade-right"
              data-aos-duration="400"
              data-aos-once="true"
              className={`flex flex-col items-start gap-4 text-left md:items-start md:p-8 md:text-left ${
                reverse ? "md:order-last" : ""
              } `}
            >
              <h1 className="text-2xl md:text-4xl text-[#002244]">
                {title}
              </h1>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {description}
              </p>
              <div>
                <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4 text-slate-800 dark:text-slate-300">
                  {points.map((point, index) => (
                    <li key={index} className="font-medium">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-x-4">
                <button className="rounded-md border-2 border-[#FFD700] bg-[#FFD700] px-4 py-2 text-sm text-[#002244] transition-colors duration-300 hover:bg-[#FFD700]/90">
                  Get Started
                </button>
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="400"
              data-aos-once="true"
              className={reverse ? "order-1" : ""}
            >
              <img
                src={img}
                alt="Development Image"
                className="max-auto w-full hover:drop-shadow-md"
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
};

export default BannerDetails;