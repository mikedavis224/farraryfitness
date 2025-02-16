import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/public/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

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
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
          Transform Your Fitness Journey with Farray Fitness
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-200 mb-6 max-w-3xl">
          Welcome to <span className="font-bold text-white">Farray Fitness</span>, Queens’ premier destination for personal fitness training. Whether you're looking to shed pounds, build muscle, or simply live a healthier life, we’re here to help you every step of the way. Our expert trainers, tailored programs, and supportive environment ensure you achieve your goals and stay motivated.
        </p>

        {/* Call-to-Action Button */}
        <div className="flex gap-4">
          <a
            href="#contact"
            className="bg-[#FDBA30] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-600 transition-all"
            aria-label="Get Started Now"
          >
            Get Started Now
          </a>
          <a
            href="#services"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-black transition-all"
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
