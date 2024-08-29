import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Banner from "./components/Banner/Banner";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero.jsx/Hero";
import Navbar2 from "./components/navbar/Navbar2";
import Service from "./components/Service/Service";
import BannerDetails from "./components/BannerDetails/BannerDetails";
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";
import { Contact } from "./components/contact/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="dark:bg-[#002244] dark:text-white">
        <div className="fixed left-0 right-0 top-0 z-50 bg-[#002244] shadow-md">
          <Navbar2 />
        </div>
        <Hero />
        <Service />
        <BannerDetails
          reverse={true}
          img={Banner1}
          title="Mobile Development"
          description="Our mobile development team crafts high-performance apps that seamlessly integrate with user needs, ensuring top-notch user experience and engagement."
          points={[
            "Custom Mobile App Solutions for iOS and Android",
            "High-Performance Cross-Platform Development",
            "Scalable Architecture for Future-Proof Applications",
          ]}
        />

        <BannerDetails
          img={Banner2}
          title="Software Development"
          description="We offer comprehensive software development services, from initial consultation to deployment, ensuring robust, scalable, and secure solutions."
          points={[
            "Enterprise-Level Software Solutions",
            "Custom Software Development for Specific Business Needs",
            "Agile Development Methodologies for Rapid Delivery",
          ]}
        />
        <Banner />
        <Blogs />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
