import React from "react";

const ServiceCatalog = () => {
  return (
    <div className="bg-[#016162] py-20">
      <div className="container mx-auto">
      <img src="/nugo-hero.png" className="bg-white "></img><br /><br />
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Our Services
        </h2>
        
        <div className="flex flex-wrap justify-center gap-6">
          {/* Cloud App Development Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Cloud App Development
            </h3>
            <p className="text-black font-bold mb-4 text-center">
              Unlock your business's potential with custom cloud applications designed to meet your unique needs.
            </p>
            <div className="font-regular text-black text-justify">
              At <span className="text-[#CC3333] font-bold">Nugo Tech</span>, we specialize in creating scalable, secure, and efficient solutions that streamline your operations, improve productivity, and position your business for long-term success.<br /><br /> Leveraging industry-leading platforms like AWS and Azure, we ensure your applications are built to perform at their peak.
            </div>
            <p className="text-black mb-4 text-center mt-4">
              {/* <b>Our Services Include:</b> */}
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
            <h4 className="font-bold text-center">Custom Applications Tailored to Your Workflows</h4>
              <li>Whether you need a specialized dashboard, automated workflows, or client-facing portals, we develop applications that address your specific challenges and deliver measurable results.</li><br />
              <h4 className="font-bold text-center">Seamless Integration with CRMs, ERPs, and Other Systems</h4>
              <li>Maximize efficiency by connecting your cloud applications with existing systems. Our integrations eliminate redundancies, improve data flow, and enhance overall business operations.
              </li><br />
              <h4 className="font-bold text-center">Regular Updates and Maintenance for Long-Term Reliability</h4>
              <li>Technology evolves, and so should your applications. We provide ongoing support and updates to ensure your tools remain secure, functional, and aligned with your business growth.</li>
            </ul>
            <br />
            <div className="text-center mt-auto">
            <p className="text-black mb-4 font-bold italic" >
                Let’s build the tools you need to succeed.
              </p>
              <p className="text-[#CC3333] font-bold mb-2">
                Take Your Operations to the Cloud.<br /><br />
              </p>
              
              <a
                href="/contact"
                className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700"
                aria-label="Talk to Our Cloud Experts"
              >
                Talk to Our Cloud Experts →
              </a>
            </div>
          </div>

          {/* Homepage Design Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Homepage Design
            </h3>
            <p className="text-black font-bold mb-4 text-center">
            First impressions matter. Your website is the digital face of your business, and a well-designed homepage can be the difference between attracting a customer or losing them to a competitor. <br /><br />
            </p>
            <div className="font-regular text-black">
           At, <span className="text-[#CC3333] font-bold">Nugo Tech</span> we create responsive, user-friendly designs that tell your brand’s story, engage visitors, and convert them into loyal customers.<br /> <br />
            </div>
            <p className="text-black mb-4 text-center mt-4">
              
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
            <h4 className="font-bold text-center">SEO-optimized designs to enhance visibility.</h4>
              <li>Gain a competitive edge with websites that are built with SEO best practices, ensuring your business ranks higher in search results and reaches the right audience.</li><br /> <br />
              <h4 className="font-bold text-center">Seamless eCommerce Integration for Online Stores</h4>
              <li>Expand your reach and increase sales with fully integrated eCommerce solutions that are secure, easy to manage, and designed for an exceptional shopping experience.<br /><br /></li>
              <h4 className="font-bold text-center">Focused on branding and user engagement.</h4>
              <li>Every element of our designs is crafted to reflect your brand’s personality while keeping the user’s journey front and center, resulting in a website that’s both visually stunning and highly functional.</li>
            </ul>
            <br />
            <div className="text-center mt-auto">
            <p className="text-black italic mb-4 font-bold">
                Elevate your online presence.
              </p>
              <p className="text-[#CC3333] font-bold mb-2">
                Turn Visitors into Loyal Customers.<br /> <br />
              </p>
              
              <a
                href="/contact"
                className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700"
                aria-label="Let’s Start Your Project"
              >
                Let’s Start Your Project →
              </a>
            </div>
          </div>

          {/* Web Hosting Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Web Hosting
            </h3>
            <p className="text-black font-bold mb-4 text-center">
            Your website deserves a secure, fast, and reliable home.  <br /><br />
            </p>
            <div className="font-regular text-black">
           With <span className="text-[#CC3333] font-bold">Nugo Tech</span>'s hosting packages, we provide the foundation you need for a seamless online presence. Our solutions are built to handle high traffic, deliver top-notch performance, and give you peace of mind with round-the-clock support.<br /> <br />
            </div>
            <p className="text-black mb-4 text-center mt-4">
              
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
            <h4 className="font-bold text-center">Scalable Plans to Grow with Your Business</h4>
              <li>Whether you’re launching a startup or running an established business, our hosting plans are designed to scale as your needs grow. Add resources effortlessly without interruptions.</li><br /> <br />
              <h4 className="font-bold text-center">Performance Monitoring for Optimal Uptime</h4>
              <li>Downtime can hurt your business and reputation. We proactively monitor your website to ensure consistent performance and immediate troubleshooting in case of issues.<br /><br /></li>
              <h4 className="font-bold text-center">End-to-End Domain and SSL Management</h4>
              <li>Protect your site and build trust with your audience. From domain registration to SSL certification, we handle all aspects of setup to ensure your website remains secure and professional.</li>
            </ul>
            <br />
            
            <div className="text-center mt-auto">
            <p className="text-black mb-4 italic font-bold">
                See the difference reliability makes.
              </p>
              <p className="text-[#CC3333] font-bold mb-2">
                Keep Your Business Online and Thriving. <br /><br />
              </p>
              
              <a
                href="/contact"
                className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700"
                aria-label="View Hosting Options"
              >
                View Hosting Options →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCatalog;
