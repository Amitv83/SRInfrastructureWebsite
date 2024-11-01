import React from "react";
import Logo from '../assets/logo.png'
import '../App.css';

const Footer = () => {
    return (
        <>
            <footer id="about" className="footer text-gray-300">
      <div className="max-w-9xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* <!-- Responsive Grid Layout --> */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center text-center object-center lg:mt-7"
        >
          {/* <!-- Column 1: About Us --> */}

          <div
            className="text-lg font-semibold text-white flex flex-col items-center lg:mb-10"
          >
            <div className="bg-white mb-5 w-56 flex justify-center items-center">
              <img src={Logo} alt="ram" className="pr-3" />
            </div>
            <div className="text-gray-400 flex justify-center text-center">
              <p className="relative text-lg font-semibold text-gray-400 max-w-lg">
                <span
                  className="text-4xl absolute -left-3 -top-4 text-gray-400 leading-none"
                  >“</span
                >
                We are committed to providing the best services in the industry
                with a focus on quality, customer satisfaction, and innovation.
                <span
                  className="text-4xl absolute -right-0 -bottom-3 text-gray-400 leading-none"
                  >”</span>
              </p>
            </div>
          </div>

          {/* <!-- Column 2: Quick Links --> */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-0 text-center justify-center lg:mt"
          >
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-gray-400 hover:text-white"
                    >Home</a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white"
                    >About Us</a>
                </li>

                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white"
                    >Contact Us</a>
                </li>
              </ul>
            </div>

            {/* <!-- Column 3: Contact Us --> */}
            <div>
              <h4 className="text-lg font-semibold text-white">
                CONTACT INFO
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    to="tel:+1234567890"
                    className="text-gray-400 hover:text-white"
                    >Phone: 7754980147</a>
                </li>
                <li>
                  <p>Email:</p>
                  <a
                    to="mailto:srinfrastructureayodhya@gmail.com"
                    className="text-gray-400 hover:text-white"
                    >srinfrastructureayodhya@gmail.com</a>
                </li>
                <li className="text-gray-400">Address: Flat No/name-239 Lallan Singh, Amaniganj road,<br />
                  Awas Vikas Colony, Ayodhya,<br />
                  Uttar Pradesh, India- 224001
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Bottom Section --> */}
        <div
          className="mt-8 border-t border-gray-700 pt-8 text-center sm:text-left"
        >
          <p className="text-sm text-gray-500">
            &copy; 2024 Shri Ram Infrastructure. All rights reserved.
          </p>
        </div>
      </div>
            </footer>
        </>

    );
};

export default Footer;