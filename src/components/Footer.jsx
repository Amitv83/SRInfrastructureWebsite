import React from "react";
import Logo from '../assets/logo.png'
import {Link, NavLink} from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <>
            <footer id="about" class="footer text-gray-300">
      <div class="max-w-9xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* <!-- Responsive Grid Layout --> */}
        <div
          class="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center text-center items-center object-center"
        >
          {/* <!-- Column 1: About Us --> */}

          <div
            class="md:pt-7 text-lg font-semibold text-white flex flex-col items-center justify-center"
          >
            <div class="bg-white mb-5 w-56 flex justify-center items-center">
              <img src={Logo} alt="ram" class="pr-3" />
            </div>
            <div class="text-gray-400 flex justify-center text-center">
              <p class="relative text-lg font-semibold text-gray-400 max-w-lg">
                <span
                  class="text-4xl absolute -left-3 -top-4 text-gray-400 leading-none"
                  >“</span
                >
                We are committed to providing the best services in the industry
                with a focus on quality, customer satisfaction, and innovation.
                <span
                  class="text-4xl absolute -right-0 -bottom-3 text-gray-400 leading-none"
                  >”</span
                >
              </p>
            </div>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div
            class="grid grid-cols-1 lg:grid-cols-2 gap-7 justify-center text-center items-center object-center"
          >
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">QUICK LINKS</h4>
              <ul class="space-y-2">
                <li>
                  <NavLink to="/" class="text-gray-400 hover:text-white"
                    >Go to Top</NavLink
                  >
                </li>
                <li>
                  <NavLink
                    to="/about"
                    class="text-gray-400 hover:text-white"
                    >About Us</NavLink
                  >
                </li>

                <li>
                  <NavLink
                    to="/contact"
                    class="text-gray-400 hover:text-white"
                    >Contact Us</NavLink
                  >
                </li>
              </ul>
            </div>

            {/* <!-- Column 3: Contact Us --> */}
            <div>
              <h4 class="text-lg font-semibold text-white mb-4">
                CONTACT INFO
              </h4>
              <ul class="space-y-2">
                <li>
                  <NavLink
                    to="tel:+1234567890"
                    class="text-gray-400 hover:text-white"
                    >Phone: 7754980147</NavLink
                  >
                </li>
                <li>
                  <NavLink
                    to="mailto:info@example.com"
                    class="text-gray-400 hover:text-white"
                    >Email: srinfrastructureayodhya@gmail.com</NavLink
                  >
                </li>
                <li class="text-gray-400">Address: Flat No/name-239 Lallan Singh, Amaniganj road,<br />
                  Awas Vikas Colony, Ayodhya,<br />
                  Uttar Pradesh, India- 224001
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Bottom Section --> */}
        <div
          class="mt-8 border-t border-gray-700 pt-8 text-center sm:text-left"
        >
          <p class="text-sm text-gray-500">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
            </footer>
        </>

    );
};

export default Footer;