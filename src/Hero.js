import React from "react";
import Layout from "../components/Layout";

const Hero = () => {
  return (
    <Layout>
      {/* Logo */}
      <img
        src="/farrayfitness-hero.png"
        alt="Farray Fitness Logo"
        className="w-32 lg:w-48 mx-auto lg:mx-0 mb-4"
      />

      {/* Headline */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        Transform Your Fitness Journey with Farray Fitness
      </h1>

      {/* Subtext */}
      <p className="text-sm md:text-base lg:text-lg text-gray-300 mb-6 leading-relaxed">
        Welcome to <span className="font-bold text-white">Farray Fitness</span>,
        Queens’ premier destination for personal fitness training. Whether
        you're looking to shed pounds, build muscle, or simply live a healthier
        life, we’re here to help you every step of the way.
      </p>

      {/* Call-to-Action */}
      <div>
        <a
          href="#contact"
          className="bg-[#FDBA30] text-white py-2 px-4 lg:px-6 rounded-lg hover:bg-red-700 transition-all"
          aria-label="Book Your Free Consultation"
        >
          Book Your Free Consultation
        </a>
      </div>
    </Layout>
  );
};

export default Hero;
