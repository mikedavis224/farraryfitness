import React from "react";

const About = () => {
  return (
    <div className="bg-[#000000] py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-white mb-10">
        About Farray Fitness
        </h1>
        <img src="/farrayfitness-hero.png" className="bg-white opacity-95"></img><br /><br />

        {/* Three-Column Layout */}
        <div className="flex flex-wrap justify-center gap-6">
          {/* Who We Are */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h2 className="text-[#FDBA30] text-xl font-bold mb-4 text-center">
              Who We Are
            </h2>
            <p className="text-black text-justify flex-grow">
            <b>Farray Fitness</b> is more than just a gym—we’re your partners in health, fitness, and personal growth. Based in Queens, NY, we specialize in creating tailored training experiences that empower clients to look and feel their best.
            </p>
          </div>

          {/* Our Mission */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h2 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Our Mission
            </h2>
            <p className="text-black text-justify flex-grow">
            To help individuals of all fitness levels unlock their potential and lead healthier, more active lives through expert guidance, unwavering support, and an inclusive community.
            </p>
          </div>

          {/* What Sets Us Apart */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm flex flex-col">
            <h2 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
            What Sets Us Apart
            </h2>
            <ul className="text-black list-disc pl-5 space-y-2 text-justify flex-grow">
              <li>
                <span className="font-bold">Personalized Attention:</span> o cookie-cutter programs here. Every client receives a plan tailored to their goals and abilities.
              </li>
              <li>
                <span className="font-bold">Experienced Trainers:</span> With years of experience and certifications, our trainers bring expertise and passion to every session.
              </li>
              <li>
                <span className="font-bold">Community-Driven: </span> At Farray Fitness, you’re not just a client—you’re part of our family.
              </li>
            </ul>
          </div>
        </div>

        {/* Let's get started*/}
        <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
          <h2 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
          Let’s Get Started
          </h2>
          <p className="text-black text-justify">
          Whether you’re taking the first step in your fitness journey or looking for new challenges, Farray Fitness is here to guide and support you.
          </p>
          <div className="text-center mt-6">
            <a
              href="/team"
              className="bg-[#CC3333] text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all"
            >
              Meet Our Team →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
