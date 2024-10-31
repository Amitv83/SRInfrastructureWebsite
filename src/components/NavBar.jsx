import React from 'react';
import Logo from '../assets/logo.png'
import {Link, NavLink} from 'react-router-dom';
import '../index.css';

const NavBar = () => {
    return (
      <>
        <header>
          <main className="h-[500px]"></main>
          <nav className="nav flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between bg-[#f6c486] shadow-lg shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-between py-1">
            <div className="logo h-14 pb-20">
            <Link to="/" className="flex items-center"><img src={Logo} alt="ram" className="w-72 my-2 px-3"/></Link>
            </div>
  
            <div className="max-w-1xl px-2 sm:px-6 lg:px-7">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    aria-controls="mobile-menu"
                    aria-expanded="false"
                  >
                    <span className="absolute -inset-0.5"></span>
                    <span className="sr-only">Open main menu</span>
                    <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-3">
                      <NavLink to="/" className="home rounded-md home px-3 py-2 text-sm font-medium" aria-current="page">Home</NavLink>
                      <NavLink to="/about" className="rounded-md px-3 py-2 text-sm font-medium">About Us</NavLink>
                      <NavLink to="/contact" className="rounded-md px-3 py-2 text-sm font-medium">Contact Us</NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Mobile menu */}
            <div className="sm:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <NavLink to="/" className="home block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</NavLink>
                <NavLink to="/about" className="block rounded-md px-3 py-2 text-base font-medium">About Us</NavLink>
                <NavLink to="/contact" className="block rounded-md px-3 py-2 text-base font-medium">Contact Us</NavLink>
              </div>
            </div>
          </nav>
        </header>
        </>
    );
};

export default NavBar;