import React from "react";
import "../App.css";
import MobileRamji from "../assets/mobile Ram.png";
import Ramji from "../assets/Ram.png";
import MobileTeam from "../assets/mobileTeam.png";
import Team from "../assets/Team.png";
import MobileSite from "../assets/MobileSite.jpg";
import Site from "../assets/Construction Site.png";
import Integration from "../assets/Integration.png";
import Scalability from "../assets/Scalability.png";
import ACC from "../assets/ACC.png";
import Safety from "../assets/Safety.png";
import Presentation from "../assets/Presentation.png";
import Site1 from "../assets/site1.jpg";
import Site2 from "../assets/site2.jpg";
import Site3 from "../assets/site3.jpg";
import Site4 from "../assets/site4.jpg";
import { Carousel } from "@material-tailwind/react";

const HomePage = () => {
  return (
    <>
      <Carousel className="rounded-xl">
        <img
          src={Ramji}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <img
          src={Team}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <img
          src={Site}
          alt="image 3"
          className="h-full w-full object-cover"
        />
      </Carousel>

      <div className="flex flex-col justify-center items-center mb-16">
        <div className="w-9/12">
          <div className="flex flex-col justify-center text-center items-center">
            <h1 className="font-bold text-2xl lg:text-3xl w-4/5">
              Your Trusted Partner in Construction
            </h1>
            <h3
              className="text-xl font-semibold w-9/12 mt-2 mb-3"
            >
              At Sri Ram Infrastructure We are committed to upholding
              exceptional standards while going beyond our clients'
              expectations.
            </h3>
          </div>
          <div className="mt-3 text-justify">
            <div className="flex flex-col text-gray-500">
              We are committed to surpassing client expectations while upholding
              the highest standards of quality. Our team's expertise drives our
              success, enabling us to provide creative and efficient
              construction solutions for complex infrastructure projects
              throughout India, particularly in Uttar Pradesh. No matter the
              scope of your project, we bring the skill and flexibility needed
              to complete it effectively, using a variety of approaches like
              general contracting, CM/GC, design-build, design-bid-build, and
              public-private partnerships. Our people's knowledge and dedication
              are our greatest strengths, driving us to deliver lasting
              structures that make a positive impact on our clients,
              communities, and society.
            </div>
          </div>
        </div>
        <div className="w-9/12">
          <h1 className="font-bold text-2xl mt-3">INNOVATION AT EVERY TURN</h1>
          <div className="mt-3 text-justify text-gray-500">
            Sri Ram Infrastructure is a full-service building contractor and a
            respected name in the industry, with the team, experience, and
            resources to execute projects of any size with excellence. With over
            2 years in building construction, we have earned our reputation as
            one of Ayodhya's most trusted, quality-driven construction
            companies.
          </div>
        </div>
        <div className="w-9/12">
          <h1 className="font-bold text-2xl mt-3">
            OUR TEAM ARE CENTRAL TO OUR VISION
          </h1>
          <div className="mt-3 text-justify text-gray-500">
            At Sri Ram Infrastructure, we offer competitive compensation along
            with a range of additional benefits that make our company a highly
            desirable place to work, both for experienced professionals and
            those beginning their careers in construction.
          </div>
        </div>
      </div>

      <div
        id="projects"
        className="mb-16 w-9/12 flex flex-col justify-center items-center mx-auto"
      >
        <div className="font-bold text-2xl mb-7 text-center">
          Glimpses of our Construction Sites
        </div>
        <div className="flex mt-3 space-x-3">
          <img src={Site3} alt="site1" className="w-1/2 h-auto" />
          <img src={Site4} alt="site2" className="w-1/2 h-auto" />
        </div>
        <div className="flex space-x-3">
          <img src={Site1} alt="site1" className="w-1/2 h-auto" />
          <img src={Site2} alt="site2" className="w-1/2 h-auto" />
        </div>
      </div>

      <div class="md:mx-3 mx-5 py-10">
        <div class="md:flex parallax-wrapper space-x-5 space-y-10 md:space-y-0">
          <div class="flex-1">
            <div class="flex flex-col items-center text-center">
              <h6 class="mb-1">
                <img
                  class="w-14 h-14"
                  decoding="async"
                  src={Safety}
                  alt="Leadership Icon"
                />
              </h6>
              <h6 class="text-lg font-bold my-1">Leadership</h6>
              <p class="my-2">
                100% safe - At Ashoka, the health and safety of our employees,
                and all those involved in our work, is a core element of our
                ethical business approach.
              </p>
            </div>
          </div>

          <div class="flex-1">
            <div class="flex flex-col items-center text-center">
              <h6 class="mb-1">
                <img
                  class="w-14 h-14"
                  decoding="async"
                  src={Scalability}
                  alt="Scalability Icon"
                />
              </h6>
              <h6 class="text-lg font-bold my-1">Scalability</h6>
              <p class="my-2">
                Adapt and consistently deliver as sold to our customers – From
                concept right through to execution, ranging from greenfield mega
                projects to brownfield sustaining capital agreements.
              </p>
            </div>
          </div>

          <div class="flex-1">
            <div class="flex flex-col items-center text-center">
              <h6 class="mb-1">
                <img
                  class="w-30 h-30"
                  decoding="async"
                  src={ACC}
                  alt="Quality Icon"
                />
              </h6>
              <h6 class="text-lg font-bold my-1">Quality</h6>
              <p class="my-2">
                Predictable and Consistent Results - Our data-driven approach to
                a continuous improvement system results in a significantly lower
                amount of field rework than the industry average.
              </p>
            </div>
          </div>

          <div class="flex-1">
            <div class="flex flex-col items-center text-center">
              <h6 class="mb-1">
                <img
                  class="w-14 h-14"
                  decoding="async"
                  src={Integration}
                  alt="Execution Icon"
                />
              </h6>
              <h6 class="text-lg font-bold my-1">Execution</h6>
              <p class="my-2">
                One Team Approach – We control the critical path by
                Self-Performing all the major aspects of EPC/CM planning and
                execution, either through integration with contractors or on a
                standalone basis.
              </p>
            </div>
          </div>

          <div class="flex-1">
            <div class="flex flex-col items-center text-center">
              <h6 class="mb-1">
                <img
                  class="w-14 h-14"
                  decoding="async"
                  src={Presentation}
                  alt="Expertise Icon"
                />
              </h6>
              <h6 class="text-lg font-bold my-1">Expertise</h6>
              <p class="my-2">
                Ashoka has been the mainstay in the Indian market since 1985. We
                offer unmatched access to the subject matter experts, backed by
                the century-long legacy of our founders.
              </p>
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
