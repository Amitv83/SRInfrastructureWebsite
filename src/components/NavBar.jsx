import React from 'react'
import '../App.css';
import Logo from '../assets/logo.png';

export default function NavBar() {
    return (
        <>
      <nav
        class="nav flex-no-wrap fixed top-0 z-10 flex w-full items-center justify-between bg-[#f6c486] shadow-lg shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-between py-1"
      >
        <div class="logo h-14 pb-20">
          <img src={Logo} alt="ram" class="w-72 my-2 px-3" />
        </div>

        <div class="max-w-1xl px-2 sm:px-6 lg:px-7">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 right-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                type="button"
                class="relative inline-flex items-center justify-center rounded-md p-2 text-black-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span class="absolute -inset-0.5"></span>
                <span class="sr-only">Open main menu</span>
                {/* <!--
              Icon when menu is closed.
  
              Menu open: "hidden", Menu closed: "block"
            --> */}
                <svg
                  class="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!--
              Icon when menu is open.
  
              Menu open: "block", Menu closed: "hidden"
            --> */}
                <svg
                  class="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div
              class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center"
            >
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-3">
                  {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                  <a
                    href="/"
                    class="home rounded-md home px-3 py-2 text-sm font-medium"
                    aria-current="page"
                    >Home</a
                  >
                  <a
                    href="/About"
                    class="rounded-md px-3 py-2 text-sm font-medium"
                  >
                    About Us
                  </a>

                  <a
                    href="/Contact"
                    class="rounded-md px-3 py-2 text-sm font-medium"
                    >Contact Us</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pb-3 pt-2">
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <a
              href="/"
              class="home block rounded-md px-3 py-2 text-base font-medium"
              aria-current="page"
              >Home</a
            >
            <a
              href="/About"
              class="block rounded-md px-3 py-2 text-base font-medium"
              >About Us</a
            >

            <a
              href="/Contact"
              class="block rounded-md px-3 py-2 text-base font-medium"
              >Contact Us</a
            >
          </div>
        </div>
      </nav>
        </>
    );
}