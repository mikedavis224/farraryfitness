import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-[#000000]">
      {/* Left Column - Background Video */}
      <div className="w-full lg:w-1/2 h-64 lg:h-full relative">
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
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:px-16 py-8">
        <div className="relative z-10 w-full max-w-lg">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
