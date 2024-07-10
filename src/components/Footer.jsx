import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="border-t-[1px]">
      <div className="flex flex-col lg:flex-row bg-[#000000] min-h-[80px] py-2 lg:justify-center ">
        <div className="flex flex-col lg:items-center mb-2 px-4 lg:px-0">
          <div className="text-white pb-2 lg:pb-0 lg:mt-8 text-center lg:text-left " >
            Excited? Us too. Let's get moving.
          </div>
          <div className="text-white font-bold">
            <div className="flex flex-row justify-center lg:justify-start pt-2 space-x-4">
              <Link to="https://www.linkedin.com/company/armouriq/" target="blank">
                <FaLinkedin className="cursor-pointer" size={25} />
              </Link>

              <BsTwitterX className="cursor-pointer" size={25} />
              <IoLogoYoutube className="cursor-pointer" size={25} />
              <FaMedium className="cursor-pointer" size={25} />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-2 px-2 pb-2 flex justify-center items-center bg-[#000000] text-white min-h-[40px] text-center border-white ">
        <Link
          to="/terms-and-conditions"
          className="mr-2 cursor-pointer"
        >
          Terms Conditions
        </Link>
        <Link to="/privacy-policy" className="mr-2 cursor-pointer">
          Privacy Policy
        </Link>
        <p className="pt-2 px-2 pb-2  bg-[#000000] text-white min-h-[40px]">
          Copyright 2024 © All Rights Reserved | ArmourIQ
        </p>
      </div>
    </div>
  );
};

export default Footer;
