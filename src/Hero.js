import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('/tech-background.jpg')" }}>
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Logo */}
        <img
          src="/farrayfitness-logo.png"
          alt="Farray Fitness Logo"
          className="w-48 h-auto mb-6"
        />

        {/* Headline */}
        <h1 className="text-5xl font-bold text-white mb-4">
          Transform Your Fitness Journey Today
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-200 mb-6 leading-relaxed max-w-3xl">
          At <span className="font-bold text-white">Farray Fitness</span>, we empower clients to achieve their fitness goals with personalized training, dynamic group classes, and expert guidance. Experience the difference with programs tailored just for you.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="#contact"
            className="bg-[#FDBA30] text-black font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-all"
            aria-label="Get Started Now"
          >
            Get Started Now
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 hover:text-black transition-all"
            aria-label="Learn More"
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
