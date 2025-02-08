import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="bg-[#B80500] text-white">
      <Hero className/>
      <Services />
      {/*<Testimonials /> */}
      <Contact id="contact"/>
    </div>
  );
};

export default Home;
