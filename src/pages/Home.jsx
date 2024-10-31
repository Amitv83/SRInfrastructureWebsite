import React from "react";
import {Link, NavLink} from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../index.css';
import MobileRamji from '../assets/mobile Ram.png';
import Ramji from '../assets/Ram.png';
import MobileTeam from '../assets/mobileTeam.png';
import Team from '../assets/Team.png';
import MobileSite from '../assets/MobileSite.jpg';
import Site from '../assets/Construction Site.png';
import Integration from '../assets/Integration.png';
import Scalability from '../assets/Scalability.png';
import ACC from '../assets/ACC.png';
import Safety from '../assets/Safety.png';
import Presentation from '../assets/Presentation.png';
import Site1 from '../assets/site1.jpg';
import Site2 from '../assets/site2.jpg';
import Site3 from '../assets/site3.jpg';
import Site4 from '../assets/site4.jpg';

const HomePage = () => {
    return (
        <>
            <div id="myCarousel" class="carousel slide mb-20" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="0"
                class=""
                aria-label="Slide 1"
                ></button>
                <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                class=""
                ></button>
                <button
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                class="active"
                aria-current="true"
                ></button>
            </div>
            <div class="carousel-inner pt-20">
                <div class="carousel-item active">
                <img
                    src={Ramji}
                    id:ram
                    class="hidden sm:block object-fill w-screen h-fit"
                />
                <img
                    src={MobileRamji}
                    class="sm:hidden object-fill w-screen h-fit"
                />
                
                </div>
                <div class="carousel-item">
                <img
                    src={Team}
                    class="hidden sm:block object-fill w-screen h-fit"
                />
                <img
                    src={MobileTeam}
                    class="sm:hidden object-fill w-screen h-fit"
                />
                
                </div>
                <div class="carousel-item">
                <img
                    src={Site}
                    class="hidden sm:block object-fill w-screen h-fit"
                />
                <img
                    src={MobileSite}
                    class="sm:hidden object-fill w-screen h-fit"
                />
                </div>
            </div>
            <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="prev"
            >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide="next"
            >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
            </div>

            <div class="flex flex-col justify-center items-center mb-16">
            <div class="w-9/12">
                <div class="flex flex-col justify-center text-center items-center">
                <h1 class="font-bold text-2xl lg:text-3xl w-4/5">
                    Your Trusted Partner in Construction
                </h1>
                <h3
                    class="text-xl font-semibold w-9/12 mt-2 mb-3"
                    style="font-family: Arial"
                >
                    At Sri Ram Infrastructure We are committed to upholding exceptional
                    standards while going beyond our clients' expectations.
                </h3>
                </div>
                <div class="mt-3 text-justify">
                <div class="flex flex-col text-gray-500">
                    We are committed to surpassing client expectations while upholding
                    the highest standards of quality. Our team's expertise drives our
                    success, enabling us to provide creative and efficient construction
                    solutions for complex infrastructure projects throughout India,
                    particularly in Uttar Pradesh. No matter the scope of your project,
                    we bring the skill and flexibility needed to complete it
                    effectively, using a variety of approaches like general contracting,
                    CM/GC, design-build, design-bid-build, and public-private
                    partnerships. Our people's knowledge and dedication are our greatest
                    strengths, driving us to deliver lasting structures that make a
                    positive impact on our clients, communities, and society.
                </div>
                </div>
            </div>
            <div class="w-9/12">
                <h1 class="font-bold text-2xl mt-3">INNOVATION AT EVERY TURN</h1>
                <div class="mt-3 text-justify text-gray-500">
                Sri Ram Infrastructure is a full-service building contractor and a
                respected name in the industry, with the team, experience, and
                resources to execute projects of any size with excellence. With over 2
                years in building construction, we have earned our reputation as one
                of Ayodhya's most trusted, quality-driven construction companies.
                </div>
            </div>
            <div class="w-9/12">
                <h1 class="font-bold text-2xl mt-3">
                OUR TEAM ARE CENTRAL TO OUR VISION
                </h1>
                <div class="mt-3 text-justify text-gray-500">
                At Sri Ram Infrastructure, we offer competitive compensation along
                with a range of additional benefits that make our company a highly
                desirable place to work, both for experienced professionals and those
                beginning their careers in construction.
                </div>
            </div>
            </div>

            <div
            id="projects"
            class="mb-16 w-9/12 flex flex-col justify-center items-center mx-auto"
            >
            <div class="font-bold text-2xl mb-7 text-center">
                Glimpses of our Construction Sites
            </div>
            <div class="flex mt-3 space-x-3">
                <img src={Site3} alt="site1" class="w-1/2 h-auto" />
                <img src={Site4} alt="site2" class="w-1/2 h-auto" />
            </div>
            <div class="flex space-x-3">
                <img src={Site1} alt="site1" class="w-1/2 h-auto" />
                <img src={Site2} alt="site2" class="w-1/2 h-auto" />
            </div>
            </div>

            <div
            class="vc_row wpb_row vc_row-fluid vc_custom_1427718123380 md:mx-3 mx-5"
            >
            <div class="md:flex parallax-wrapper space-x-5 space-y-10 md:space-y-0">
                <div class="wpb_column vc_column_container vc_col-sm-1/5">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper flex flex-col items-center text-center">
                        <h6 style="text-align: center">
                            <img
                            class="items-center justify-center object-center alignnone size-full wp-image-162"
                            decoding="async"
                            src={Safety}
                            alt="flat_construction_icon1"
                            width="56"
                            height="56"
                            />
                        </h6>
                        <h6 style="text-align: center" class="text-lg font-bold my-1">
                            Leadership
                        </h6>
                        <p style="text-align: center" class="my-2">
                            100% safe - At Ashoka, the health and safety of our
                            employees, and all those involved in our work, is a core
                            element of our ethical business approach.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="wpb_column vc_column_container vc_col-sm-1/5">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper flex flex-col items-center text-center">
                        <h6 style="text-align: center">
                            <img
                            decoding="async"
                            class="alignnone size-full wp-image-163"
                            src={Scalability}
                            alt="flat_construction_icon3"
                            width="56"
                            height="56"
                            />
                        </h6>
                        <h6 style="text-align: center" class="text-lg font-bold my-1">
                            Scalability
                        </h6>
                        <p style="text-align: center" class="my-2">
                            Adapt and consistently deliver as sold to our customers –
                            From concept right through to execution, ranging from
                            greenfield mega projects to brownfield sustaining capital
                            agreements.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="wpb_column vc_column_container vc_col-sm-1/5">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper flex flex-col items-center text-center">
                        <h6 style="text-align: center">
                            <img
                            decoding="async"
                            class="alignnone size-full wp-image-163"
                            src={ACC}
                            alt="flat_construction_icon3"
                            width="120"
                            height="120"
                            />
                        </h6>
                        <h6 style="text-align: center" class="text-lg font-bold my-1">
                            Quality
                        </h6>
                        <p style="text-align: center" class="my-2">
                            Predictable and Consistent Results - Our data-driven
                            approach to a continuous improvement system results in a
                            significantly lower amount of field rework than the industry
                            average.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="wpb_column vc_column_container vc_col-sm-1/5">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper flex flex-col items-center text-center">
                        <h6 style="text-align: center">
                            <img
                            loading="lazy"
                            decoding="async"
                            class="alignnone size-full wp-image-162"
                            src={Integration}
                            alt="flat_construction_icon1"
                            width="56"
                            height="56"
                            />
                        </h6>
                        <h6></h6>
                        <h6 style="text-align: center" class="text-lg font-bold my-1">
                            Execution
                        </h6>
                        <p style="text-align: center" class="my-2">
                            One Team Approach – We control the critical path by
                            Self-Performing all the major aspects of EPC/CM planning and
                            execution, either through integration with contractors or on
                            a standalone basis.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div class="wpb_column vc_column_container vc_col-sm-1/5">
                <div class="vc_column-inner">
                    <div class="wpb_wrapper">
                    <div class="wpb_text_column wpb_content_element">
                        <div class="wpb_wrapper flex flex-col items-center text-center">
                        <h6 style="text-align: center">
                            <img
                            loading="lazy"
                            decoding="async"
                            class="alignnone size-full wp-image-163"
                            src={Presentation}
                            alt="flat_construction_icon3"
                            width="56"
                            height="56"
                            />
                        </h6>
                        <h6 style="text-align: center" class="text-lg font-bold my-1">
                            Expertise
                        </h6>

                        <p style="text-align: center" class="my-2">
                            Ashoka has been the mainstay in the Indian market since
                            1985. We offer unmatched access to the subject matter
                            experts, backed by the century-long legacy of our founders.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <br />
            <br />
        </>
    );
};

export default HomePage;