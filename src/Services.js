import React from "react";

const Services = () => {
  return (
    <div className="bg-[#000000] py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-white mb-10">
          Our Services
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {/* Personal Training */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-justify flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Personal Training
            </h3>
            <p className="text-black font-bold mb-4">
              Elevate your workouts with one-on-one training sessions tailored
              to your unique fitness goals.
            </p>
            <div className="font-regular text-black">
              Whether you’re just starting out or are a seasoned athlete, our
              certified trainers will design a program that challenges you,
              motivates you, and delivers results.
            </div>
            <p className="text-black mb-4 text-center mt-4">
              <b>What We Offer:</b>
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
              <li>Tailored Workout Plans.</li>
              <li>Ongoing Support and Motivation.</li>
              <li>Progress Tracking.</li>
            </ul>
            {/* Call to Action */}
            <div className="text-center mt-auto">
              <h2>Achieve Results Faster.</h2>
              <p>Let's build a program that works for you.</p>
              <a
                href="/Services"
                className="bg-[#000000] text-white py-2 px-4 rounded-lg hover:bg-red-700 mt-4 inline-block"
                aria-label="Learn More"
              >
                Get Started Today
              </a>
            </div>
          </div>

          {/* Group Fitness Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-justify flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Group Fitness Classes
            </h3>
            <p className="text-black font-bold mb-4">
              Working out is better together! Join our dynamic group fitness
              classes to stay active, make friends, and have fun while getting
              fit. Perfect for all fitness levels, our classes combine energy,
              music, and expert guidance for an unforgettable experience.
            </p>
            <p className="text-black mb-4 text-center">
              <b>What We Offer:</b>
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
              <li>Diverse Class Options.</li>
              <li>Motivational Atmosphere.</li>
              <li>Professional Instructors.</li>
            </ul>
            {/* Call to Action */}
            <div className="text-center mt-auto">
              <h2>Join the community</h2>
              <a
                href="/Services"
                className="bg-[#000000] text-white py-2 px-4 rounded-lg hover:bg-red-700 mt-4 inline-block"
                aria-label="Learn More"
              >
                View Our Class Schedule
              </a>
            </div>
          </div>

          {/* Online Coaching */}
          <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-justify flex flex-col">
            <h3 className="text-[#CC3333] text-xl font-bold mb-4 text-center">
              Online Coaching
            </h3>
            <p className="text-black font-bold mb-4">
              Bring the expertise of{" "}
              <span className="text-[#CC3333] font-bold">Farray Fitness</span>{" "}
              to your home with our comprehensive online coaching services.
              Perfect for those who prefer to train independently but still want
              expert guidance and accountability.
            </p>
            <p className="text-black mb-4 text-center">
              <b>What We Offer:</b>
            </p>
            <ul className="text-black text-left list-disc pl-5 space-y-2">
              <li>
                Customized Fitness Plans: Get a fully personalized program you
                can follow from anywhere, complete with videos and step-by-step
                instructions.
              </li>
              <li>
                Virtual Check-Ins: Stay connected with your trainer through
                regular video calls and progress updates.
              </li>
              <li>
                Nutritional Guidance: Combine your workouts with a nutrition
                plan designed to complement your goals and lifestyle.
              </li>
            </ul>
            {/* Call to Action */}
            <div className="text-center mt-auto">
              <a
                href="/Services"
                className="bg-[#000000] text-white py-2 px-4 rounded-lg hover:bg-red-700 mt-4 inline-block"
                aria-label="Learn More"
              >
                Learn More About Online Coaching
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
