import React from "react";
import Img1 from "../../assets/blog1.jpg";
import Img2 from "../../assets/blog2.jpg";
import Img3 from "../../assets/blog3.jpg";

const Blogs = () => {
  return (
    <main data-aos="fade-up" data-aos-offset="200">
      <section className="container mb-10 py-8">
        <h1 className="mb-8 border-l-8 border-[#FFD700] py-2 pl-2 text-center text-3xl font-bold text-[#002244]">
          Our Latest Blogs
        </h1>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-500 hover:shadow-xl bg-white dark:bg-[#002244] dark:text-white"
          >
            <div className="overflow-hidden">
              <img
                src={Img1}
                alt="Software Development"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-[#616161] dark:text-[#D9D9D9]">
              <p>April 24, 2024</p>
              <p className="line-clamp-1">By John Doe</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-[#002244] dark:text-[#FFD700]">
                Revolutionizing Software Development: Trends and Best Practices
              </h1>
              <p className="line-clamp-2 text-[#616161] dark:text-[#D9D9D9]">
                In the rapidly evolving field of software development, staying ahead of the curve is crucial. This blog explores the latest trends, including the rise of AI and machine learning integration, the shift towards agile methodologies, and the importance of continuous integration and deployment. We also dive into best practices for coding, testing, and managing software projects to ensure high-quality outcomes.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl bg-white dark:bg-[#002244] dark:text-white"
          >
            <div className="overflow-hidden">
              <img
                src={Img2}
                alt="Cloud Development"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-[#616161] dark:text-[#D9D9D9]">
              <p>March 15, 2024</p>
              <p className="line-clamp-1">By Jane Smith</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-[#002244] dark:text-[#FFD700]">
                Embracing Cloud Development: Benefits and Strategies
              </h1>
              <p className="line-clamp-2 text-[#616161] dark:text-[#D9D9D9]">
                Cloud development is transforming how businesses approach IT infrastructure and application deployment. This blog post covers the key benefits of cloud development, such as scalability, cost-efficiency, and enhanced collaboration. It also offers practical strategies for adopting cloud technologies, including selecting the right cloud service provider and implementing cloud-native architectures.
              </p>
            </div>
          </div>
          <div
            id="card"
            className="p-4 shadow-lg transition-all duration-200 hover:shadow-xl bg-white dark:bg-[#002244] dark:text-white"
          >
            <div className="overflow-hidden">
              <img
                src={Img3}
                alt="Tech Innovations"
                className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
              />
            </div>
            <div className="flex justify-between pt-2 text-[#616161] dark:text-[#D9D9D9]">
              <p>February 28, 2024</p>
              <p className="line-clamp-1">By Alex Johnson</p>
            </div>
            <div className="space-y-3 py-3">
              <h1 className="line-clamp-1 text-xl font-bold text-[#002244] dark:text-[#FFD700]">
                Exploring the Future of Technology: Innovations and Impacts
              </h1>
              <p className="line-clamp-2 text-[#616161] dark:text-[#D9D9D9]">
                Technology is advancing at an unprecedented rate, bringing about significant changes in various industries. This blog post explores the most exciting tech innovations, including blockchain, quantum computing, and advanced robotics. We discuss their potential impacts on businesses and society, and how companies can leverage these technologies to stay competitive and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Blogs;
