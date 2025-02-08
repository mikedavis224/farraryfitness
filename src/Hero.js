import React from "react";

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col lg:flex-row items-center bg-[#B80500]">
      {/* Left Column - Background Video */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full relative">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/tech-background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
      </div>

      {/* Right Column - Content */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full flex flex-col justify-center items-start px-8 lg:px-16 py-6 relative">
        {/* Dark Filter for Text Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          {/* Logo */}
          <img
            src="/farrayfitness-hero.png"
            alt="farrayfitness Logo"
            className="w-36 lg:w-48 h-auto mb-4"
          />

          {/* Headline */}
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
          Transform Your Fitness Journey with Farray Fitness
          </h1>

          {/* Subtext */}
          <p className="text-sm lg:text-lg text-gray-300 mb-4 lg:mb-6 max-w-lg text-justify">
            Welcome to <span className="font-bold text-white">Farray Fitness</span>,
            Queens’ premier destination for personal fitness training. Whether you're looking to shed pounds, build muscle, or simply live a healthier life, we’re here to help you every step of the way. Our expert trainers, tailored programs, and supportive environment ensure you achieve your goals and stay motivated.
            <br />
            <br />
            <h2>Why Choose Farray Fitness?</h2>
            <br />
            <ul>
              <li>Personalized Training Plans:Every body is different, and so is every plan we create.
              </li>
              <li>Expert Trainers:Our team of certified trainers is passionate about helping you succeed.</li>
              <li>Holistic Approach:We go beyond workouts to help with nutrition, mindset, and lifestyle changes.
              </li>
            </ul>
            <br />
            <b>Your Best Self Starts Here.</b> Ready to take the first step? Book your free consultation and discover how Farray Fitness can transform your health and fitness journey.
          </p>

          {/* Call-to-Action Button */}
          <div className="text-center lg:text-left">
            <a
              href="#contact"
              className="bg-[#FDBA30] text-white py-2 px-4 lg:px-6 rounded-lg hover:bg-red-700 transition-all"
              aria-label="Get Started Now"
            >
              Book Your Free Consultation
            </a>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Hero;
