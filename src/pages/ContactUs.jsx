import React from "react";
import {Link, NavLink} from 'react-router-dom';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import '../index.css';

const Contact = () => {
    return (
        <>
            <section class="contact">
            <h2>Contact Us</h2>

            {/* <!-- Main Office Information --> */}
            <div class="contact-info">
                <h3>Main Office</h3>
                <p class="text-xl">
                Flat No/name-239 Lallan Singh, Amaniganj road,<br />
                Awas Vikas Colony, Ayodhya,<br />
                Uttar Pradesh, India- 224001
                </p>
            </div>

            {/* <!-- Divider line --> */}
            <div class="divider"></div>

            {/* <!-- Make A Call Section --> */}
            <div class="contact-info">
                <h3>Make A Call</h3>
                <p>
                <Link to="tel:+7754980147">+91 7754980147</Link>
                </p>
            </div>

            {/* <!-- Divider line --> */}
            <div class="divider"></div>

            {/* <!-- Send A Mail Section --> */}
            <div class="contact-info">
                <h3>Send A Mail</h3>
                <p>
                <Link to="mailto:info@altosengineers.com">srinfrastructureayodhya@gmail.com</Link>
                </p>
            </div>

            {/* <!-- Contact button --> */}
            <button onclick="window.location.href='mailto:info@altosengineers.com'">
                Get in Touch
            </button>
            </section>

            <div class="flex w-screen h-3/4">
            <section
                class="flex w-full h-3/4 elementor-section elementor-top-section"
                data-id="5763f80"
                data-element_type="section"
            >
                <div
                class="elementor-container elementor-column-gap-default w-full h-full"
                >
                <div
                    class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7bacfd5 w-full h-full"
                    data-id="7bacfd5"
                    data-element_type="column"
                >
                    <div
                    class="elementor-widget-wrap elementor-element-populated w-full h-full"
                    >
                    <div
                        class="elementor-element elementor-element-6909ee7 elementor-widget elementor-widget-google_maps w-full h-full"
                        data-id="6909ee7"
                        data-element_type="widget"
                        data-widget_type="google_maps.default"
                    >
                        <div
                        class="elementor-widget-container w-full"
                        style="height: 50vh; 
                            overflow: hidden;
                            height: 70vh !important; /* Set to half of the viewport height */
                            width: 100%;
                            justify-items: center;
                            margin-bottom: 50px;"
                        >
                        
                        <div class="elementor-custom-embed w-full h-full" style="line-height: 0;
                            height: 100%;
                            width: 80%;">
                            <iframe
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2485.4297680818854!2d82.19379639193167!3d26.798582912956952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07f2d2b5b1d3%3A0xb2aaf263ba6acc42!2z4KS24KWN4KSw4KWAIOCkruCkv-CkpeCkv-CksuCkviDgpLjgpILgpKQg4KS44KWH4KS14KS-IOCkhuCktuCljeCksOCkrg!5e0!3m2!1sen!2sin!4v1730060018080!5m2!1sen!2sin"
                            style="width: 100%; height: 100%; border: 3"
                            title="Ayodhya, Uttar Pradesh Location"
                            aria-label=""
                            ></iframe>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
        </>
    );
};

export default ContactPage;