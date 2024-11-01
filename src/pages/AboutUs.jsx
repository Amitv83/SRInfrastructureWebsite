import React from "react";
import '../App.css';

const AboutPage = () => {
    return (
        <>
            <div className="container mx-auto mt-20 py-10 px-4 sm:px-6 lg:px-8">

            {/* <!-- About Us Section --> */}
            <div className="bg-gray-800 text-white py-8">
                <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold">About Us</h1>
                <p className="text-lg mt-2">Welcome to Shri Ram Infrustructure - Where Your Dreams Become Reality</p>
                </div>
            </div>

            {/* <!-- Who We Are Section --> */}
            <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-center text-gray-800">Who We Are</h2>
            <p className="text-gray-600 mt-4 text-center max-w-3xl mx-auto">
                Shri Ram Infrastructure is led by a motivated civil engineering student currently in the final year of B.Tech., eager to apply fresh skills, new ideas, and an eye for quality in every project. While we are in the early stages of our journey, our commitment to building trust, delivering quality, and achieving excellence is firm. We understand that your home or business is more than just a building – it’s a part of your dreams. That’s why we are dedicated to making every detail perfect.
            </p>
            </section>

            {/* <!-- Mission Section --> */}
            <section className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-800">Our Mission</h2>
            <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                To provide high-quality, affordable, and innovative construction solutions, ensuring that each client's vision is fully realized, whether it's a cozy family home or an inspiring commercial space. Every project is an opportunity for us to grow, learn, and create structures that speak to your heart.
            </p>
            </section>

            {/* <!-- Why Choose Us Section --> */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Passion for Excellence</h3>
                <p className="text-gray-600 mt-2">
                We approach every project with enthusiasm, energy, and a commitment to quality that sets us apart.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Client-First Approach</h3>
                <p className="text-gray-600 mt-2">
                Your dreams are our priority. We work closely with you to ensure every detail meets your expectations.
                </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800">Innovation & Fresh Ideas</h3>
                <p className="text-gray-600 mt-2">
                As a new company led by a young civil engineer, we bring fresh perspectives and innovative approaches to construction.
                </p>
            </div>
            </section>

            <div className="p-4 bg-gray-100 rounded-lg shadow-xl w-full text-center mx-auto mt-5">
            {/* <!-- Manager's Details --> */}
            <div className="mb-4">
                <h2 className="text-xl font-bold text-gray-800">Manager</h2>
                <p className="text-gray-600 font-semibold">Abhishek Kumar Vishwakarma</p>
                <p className="text-sm text-gray-500">Civil Engineer - Diploma, Architecture, B.Tech.</p>
            </div>

            {/* <!-- Proprietor's Details --> */}
            <div>
                <h2 className="text-xl font-bold text-gray-800">Proprietor</h2>
                <p className="text-gray-600 font-semibold">Rohit Singh</p>
                <p className="text-sm text-gray-500">Civil Engineer - Diploma</p>
            </div>
            </div>


            </div>
        </>
    );
};

export default AboutPage;