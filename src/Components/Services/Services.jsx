import "./Services.scss";

import { RiComputerLine } from "react-icons/ri";

import { TbPodium } from "react-icons/tb";

import { FaFlipboard } from "react-icons/fa";

import { MdOutlineScience } from "react-icons/md";

function Services() {
  return (
    <div className="services">
      <div className="service-box">
        <div className="icon-circle">
          <RiComputerLine />
        </div>
        <p>Front End</p>
        <p>Development</p>
      </div>
      <div className="service-box">
        <div className="icon-circle">
          <TbPodium />
        </div>
        Public Speaking
      </div>
      <div className="service-box">
        <div className="icon-circle">
          <FaFlipboard />
        </div>
        UI/UX Design
      </div>
      <div className="service-box">
        <div className="icon-circle">
          <MdOutlineScience />
        </div>
        Innovation
      </div>
    </div>
  );
}

export default Services;
