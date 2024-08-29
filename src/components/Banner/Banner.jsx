import React from "react";

const Banner = () => {
  return (
    <main className="bg-[#002244]">
      <section data-aos="fade-up" className="container py-8 md:py-12">
        <div className="grid grid-cols-1 items-center gap-4 sm:text-ellipsis md:grid-cols-3 md:gap-8">
          <div className="order-2 flex flex-col items-center gap-4 text-center text-white md:col-span-2 md:items-start md:text-left">
            <h1 className="text-3xl font-bold text-[#FFD700]">Market your Brand</h1>
            <p className="text-[#D9D9D9]">
              Tech Global<br />
              The Best IT Service Company in the City
            </p>
            <button className="rounded-md bg-white px-4 py-2 text-sm text-[#002244] transition-colors duration-300 hover:bg-[#D9D9D9]">
              Get Started
            </button>
          </div>
          <div className="order-1">
            <iframe
              className="aspect-video w-full rounded-md shadow-lg hover:shadow-xl"
              src="https://www.youtube.com/embed/gRWMen27Uio?si=VtHMh9xCxQ6ccFh8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Banner;
