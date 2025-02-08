import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-black text-[#CC3333] py-6">
      <div className="container mx-auto">
        {/* Contact Info and Social Media in One Line */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm text-center">
          {/* Email */}
          <p>
            <a href="mailto:info@FarrayFitness.com" className="hover:underline">
              info@FarrayFitness.com
            </a>
          </p>

          {/* Separator */}
          <span className="hidden sm:inline-block">|</span>

          {/* Phone */}
          <p>
            <a href="tel:+13012915611" className="hover:underline">
              +1(301) 291-5611
            </a>
          </p>

          {/* Separator */}
          <span className="hidden sm:inline-block">|</span>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm mt-4">
          © 2024 FarrayFitness. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
