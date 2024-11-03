import React from "react";
import "../App.css";
import '../Contact.css';


const ContactPage = () => {
  return (
    <>
      {/* <!-- Contact Section --> */}
      <div class="contactbody">
      <div class="flex justify-center">
        <section class="contact ">
          <h2>Contact Us</h2>

          {/* <!-- Main Office Information --> */}
          <div class="contact-info">
            <h3>Main Office</h3>
            <p class="text-xl">
              Flat No/name-239 Lallan Singh, Amaniganj road,
              <br />
              Awas Vikas Colony, Ayodhya,
              <br />
              Uttar Pradesh, India- 224001
            </p>
          </div>

          {/* <!-- Divider line --> */}
          <div class="divider"></div>

          {/* <!-- Make A Call Section --> */}
          <div class="contact-info">
            <h3>Make A Call</h3>
            <p>
              <a href="tel:+919616293856">+91 9616293856</a>
            </p>
            <p>
              <a href="tel:+917754980147">+91 7754980147</a>
            </p>  
            
          </div>

          {/* <!-- Divider line --> */}
          <div class="divider"></div>

          {/* <!-- Send A Mail Section --> */}
          <div class="contact-info">
            <h3>Send A Mail</h3>
            <p>
              <a href="mailto:srinfrastructureayodhya@gmail.com">
                srinfrastructureayodhya@gmail.com
              </a>
            </p>
          </div>

          {/* <!-- Contact button --> */}
          <a href="mailto:srinfrastructureayodhya@gmail.com">
            <button>Get in Touch</button>
          </a>
        </section>
      </div>
      <div class="flex w-screen h-3/4 justify-center">
        <section class="flex w-11/12 h-3/4">
          <div class="w-full h-full">
            <div class=" mapdiv w-full overflow-hidden justify-items-center mb-10 ">
              <div class="w-full h-full">
                <iframe
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2485.4297680818854!2d82.19379639193167!3d26.798582912956952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a07f2d2b5b1d3%3A0xb2aaf263ba6acc42!2z4KS24KWN4KSw4KWAIOCkruCkv-CkpeCkv-CksuCkviDgpLjgpILgpKQg4KS44KWH4KS14KS-IOCkhuCktuCljeCksOCkrg!5e0!3m2!1sen!2sin!4v1730060018080!5m2!1sen!2sin"
                  title="Ayodhya, Uttar Pradesh Location"
                  class="iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      </div>
    </>
  );
};

export default ContactPage;
