// import { FaLinkedin } from "react-icons/fa";
// import { FaMedium } from "react-icons/fa6";
// import { IoLogoYoutube } from "react-icons/io";
// import { Link } from "react-router-dom";
// import { BsTwitterX } from "react-icons/bs";
// import { MdOutlineEmail } from "react-icons/md";
// import { CiLocationOn } from "react-icons/ci";
// import { FaPhoneVolume } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
// import logo from "/assets/Company.png";
// import { useEffect, useState } from "react";

// const Footer = () => {

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

//   useEffect(() => {
//     const resizeWindowWidth = () => {
//       setWindowWidth(window.innerWidth);
//     }
//     window.addEventListener("resize", resizeWindowWidth);

//     resizeWindowWidth();

//     return () => {
//       window.removeEventListener("resize", resizeWindowWidth);
//     }

//   }, [])

//   const navigate = useNavigate();
//   return (
//     <div className="border-t-[1px] bg-[#000000] pb-2">
//       <div className="flex flex-col md:flex-row lg:justify-center 2xl:gap-16">
//         {/* First column*/}
//         <div className="flex flex-col mb-4 md:mb-0">
//           <div className="ml-4">
//             <img
//               src={logo}
//               alt="Company Logo"
//               className="h-[100px] ml-0 mr-auto sm:ml-0 cursor-pointer"
//             />
//           </div>
//           <div className="flex flex-col mt-4">
//             <div className="flex flex-row mb-4">
//               <CiLocationOn color="#004bae" className="ml-3" size={30} />
//               <div className="flex flex-col">
//                 <h5 className="text-white ml-3">
//                   Saket Salcon, Rasvilas, Saket District
//                   <br />
//                   Centre, Sector 6, Pushp Vihar,
//                   <br />
//                   New Delhi, India - 110017
//                 </h5>
//               </div>
//             </div>
//             <div className="flex flex-row mb-4">
//               <FaPhoneVolume color="#004bae" className="ml-4 mt-1" size={20} />
//               <div className="flex flex-col">
//                 <h5 className="text-white ml-5 mt-1">+1 469 296 9672</h5>
//               </div>
//             </div>
//             <div className="flex flex-row mb-4">
//               <MdOutlineEmail color="#004bae" className="ml-3 mt-1" size={30} />
//               <div className="flex flex-col">
//                 <h5 className="text-white ml-3 mt-1">hello@armouriq.com</h5>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Second column*/}
//         {
//           windowWidth > 768 &&
//           <>
//             <div className="flex flex-col mt-4 md:mt-12 lg:ml-[130px] ml-[5rem] max-sm:ml-[30px]">
//               <h4 className="text-white font-semibold text-[22px]">Company</h4>
//               <h4
//                 className="text-white text-[15px] mb-4 mt-4 cursor-pointer"
//                 onClick={() => {
//                   navigate("/about");
//                 }}
//               >
//                 About Us
//               </h4>
//               <h4
//                 className="text-white text-[15px] mb-4 cursor-pointer"
//                 onClick={() => {
//                   navigate("/services");
//                 }}
//               >
//                 Services
//               </h4>
//               <a
//                 className="text-white text-[15px] mb-4 cursor-pointer"
//                 href="#blog"
//                 onClick={() => {
//                   navigate("/");
//                 }}
//               >
//                 Blog
//               </a>
//               <h4 className="text-white text-[15px] mb-4 cursor-pointer">
//                 Contact
//               </h4>
//             </div>
//             {/* Third column*/}
//             <div className="flex flex-col mt-4 md:mt-12 lg:ml-[130px] ml-[5rem] max-sm:ml-[190px]">
//               <h4 className="text-white font-semibold text-[22px]">Services</h4>
//               <Link
//                 to="/services/cloud"
//                 className="text-white text-[15px] mb-4 mt-4"
//               >
//                 Cloud security
//               </Link>
//               <Link to="/services/mobile" className="text-white text-[15px] mb-4">
//                 Mobile security
//               </Link>
//               <Link
//                 to="/services/application"
//                 className="text-white text-[15px] mb-4"
//               >
//                 Application security
//               </Link>
//               <Link to="/services/network" className="text-white text-[15px] mb-4">
//                 Network security
//               </Link>
//               <Link to="/services/audit" className="text-white text-[15px] mb-4">
//                 Audit & Compliance
//               </Link>
//             </div>
//             {/* Fourth column*/}
//             <div className="flex flex-col mt-4 md:mt-12 lg:ml-[130px] ml-[5rem] max-sm:ml-[30px]">
//               <Link
//                 className="text-white text-[15px] mb-4 mt-4 md:mt-12"
//                 to="/services/soc"
//               >
//                 SOC & Management
//               </Link>
//               <Link className="text-white text-[15px] mb-4" to="/services/maturity">
//                 Maturity Assessment
//               </Link>
//               <Link className="text-white text-[15px] mb-4" to="/services/virtual">
//                 Virtual CISO as service
//               </Link>
//               <Link className="text-white text-[15px] mb-4" to="/services/staff">
//                 Staff & Augmentation
//               </Link>
//               <Link
//                 className="text-white text-[15px] mb-4"
//                 to="/services/awareness"
//               >
//                 Security Awareness
//               </Link>
//             </div>
//           </>
//         }
//       </div>
//       {
//         windowWidth < 768 &&
//         <>
//           {/* This should come in the mobile view*/}
//           {/* Mobile view starts*/}
//           <div className="flex flex-col px-5">
//             <div className="flex flex-row">
//               <div className="flex flex-col mt-4 md:mt-12 md:ml-[130px] max-sm:ml[30px]">
//                 <h4 className="text-white font-semibold text-[22px]">Company</h4>
//                 <h4
//                   className="text-white text-[15px] mb-4 mt-4 cursor-pointer"
//                   onClick={() => {
//                     navigate("/about");
//                   }}
//                 >
//                   About Us
//                 </h4>
//                 <h4
//                   className="text-white text-[15px] mb-4 cursor-pointer"
//                   onClick={() => {
//                     navigate("/services");
//                   }}
//                 >
//                   Services
//                 </h4>
//                 <a
//                   className="text-white text-[15px] mb-4 cursor-pointer"
//                   href="#blog"
//                   onClick={() => {
//                     navigate("/");
//                   }}
//                 >
//                   Blog
//                 </a>
//                 <h4 className="text-white text-[15px] mb-4 cursor-pointer">
//                   Contact
//                 </h4>
//               </div>
//               <div className="flex flex-col mt-4 md:mt-12 sm:ml-[130px] max-sm:ml-[100px]">
//                 <h4 className="text-white font-semibold text-[22px]">Services</h4>
//                 <Link
//                   to="/services/cloud"
//                   className="text-white text-[15px] mb-4 mt-4"
//                 >
//                   Cloud security
//                 </Link>
//                 <Link to="/services/mobile" className="text-white text-[15px] mb-4">
//                   Mobile security
//                 </Link>
//                 <Link
//                   to="/services/application"
//                   className="text-white text-[15px] mb-4"
//                 >
//                   Application security
//                 </Link>
//                 <Link
//                   to="/services/network"
//                   className="text-white text-[15px] mb-4"
//                 >
//                   Network security
//                 </Link>
//                 <Link to="/services/audit" className="text-white text-[15px] mb-4">
//                   Audit & Compliance
//                 </Link>
//               </div>
//             </div>
//             <div className="">
//               <div className="flex flex-col mt-4 md:mt-12 md:ml-[130px] max-sm:ml[30px]">
//                 <Link
//                   className="text-white text-[15px] mb-4 mt-4 md:mt-12"
//                   to="/services/soc"
//                 >
//                   SOC & Management
//                 </Link>
//                 <Link className="text-white text-[15px] mb-4" to="/services/maturity">
//                   Maturity Assessment
//                 </Link>
//                 <Link className="text-white text-[15px] mb-4" to="/services/virtual">
//                   Virtual CISO as service
//                 </Link>
//                 <Link className="text-white text-[15px] mb-4" to="/services/staff">
//                   Staff & Augmentation
//                 </Link>
//                 <Link
//                   className="text-white text-[15px] mb-4"
//                   to="/services/awareness"
//                 >
//                   Security Awareness
//                 </Link>
//               </div>
//             </div>
//           </div>
//           {/* Mobile view ends for this one*/}
//           {/* <hr className="border-t border-gray-0" /> */}
//         </>
//       }

//       <div className="pt-2 px-2 pb-2 flex flex-col items-center mt-[40px] md:flex-row md:justify-around lg:justify-center lg:gap-[10%] bg-[#000000] text-white min-h-[40px] text-center border-white">
//         <div className="flex flex-row justify-start pt-2 mb-2">
//           <Link to="/terms-and-conditions" className="mr-2 cursor-pointer">
//             Terms Conditions
//           </Link>
//           <Link to="/privacy-policy" className="cursor-pointer">
//             Privacy Policy
//           </Link>
//         </div>

//         <div className="pt-2 px-2 pb-2 bg-[#000000] text-white min-h-[40px] mb-2 md:mb-0">
//           Copyright 2024 © All Rights Reserved | ArmourIQ
//         </div>

//         <div className="flex flex-row md:justify-end pt-2 space-x-4">
//           <Link to="https://www.linkedin.com/company/armouriq/" target="_blank">
//             <FaLinkedin className="cursor-pointer" size={25} />
//           </Link>
//           <BsTwitterX className="cursor-pointer" size={25} />
//           <IoLogoYoutube className="cursor-pointer" size={25} />
//           <FaMedium className="cursor-pointer" size={25} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import logo from "/assets/Company.png";
import { useEffect, useState } from "react";

import React from 'react'

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const resizeWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", resizeWindowWidth);

    resizeWindowWidth();

    return () => {
      window.removeEventListener("resize", resizeWindowWidth);
    }

  }, [])
  const navigate = useNavigate();
  return (
    <div className="border-t-[1px] bg-[#000000] pb-2">
      <div className="flex flex-col md:flex-row lg:justify-center 2xl:gap-16">
        {/* First column*/}
        <div className="flex flex-col mb-4 md:mb-0">
          <div className="ml-4">
            <img
              src={logo}
              alt="Company Logo"
              className="h-[100px] ml-0 mr-auto sm:ml-0 cursor-pointer"
            />
          </div>
          <div className="flex flex-col mt-4">
            <div className="flex flex-row mb-4">
              <CiLocationOn color="#004bae" className="ml-3" size={30} />
              <div className="flex flex-col">
                <h5 className="text-white ml-3">
                  Saket Salcon, Rasvilas, Saket District
                  <br />
                  Centre, Sector 6, Pushp Vihar,
                  <br />
                  New Delhi, India - 110017
                </h5>
              </div>
            </div>
            <div className="flex flex-row mb-4">
              <FaPhoneVolume color="#004bae" className="ml-4 mt-1" size={20} />
              <div className="flex flex-col">
                <h5 className="text-white ml-5 mt-1">+1 469 296 9672</h5>
              </div>
            </div>
            <div className="flex flex-row mb-4">
              <MdOutlineEmail color="#004bae" className="ml-3 mt-1" size={30} />
              <div className="flex flex-col">
                <h5 className="text-white ml-3 mt-1">hello@armouriq.com</h5>
              </div>
            </div>
          </div>
        </div>
        {/* Second column*/}
        {
          windowWidth > 768 &&
          <>
            <div className="flex flex-col mt-4 md:mt-12 lg:ml-[130px] ml-[5rem] max-sm:ml-[30px]">
              <h4 className="text-white font-semibold text-[22px]">Company</h4>
              <h4
                className="text-white text-[15px] mb-4 mt-4 cursor-pointer"
                onClick={() => {
                  navigate("/about");
                }}
              >
                About Us
              </h4>
              <h4
                className="text-white text-[15px] mb-4 cursor-pointer"
                onClick={() => {
                  navigate("/services");
                }}
              >
                Services
              </h4>
              <a
                className="text-white text-[15px] mb-4 cursor-pointer"
                href="#blog"
                onClick={() => {
                  navigate("/");
                }}
              >
                Blog
              </a>
              <h4 className="text-white text-[15px] mb-4 cursor-pointer">
                Contact
              </h4>
            </div>
            {/* Third column*/}
            <div className="flex flex-col mt-4 md:mt-12 lg:ml-[130px] ml-[5rem] max-sm:ml-[190px]">
              <h4 className="text-white font-semibold text-[22px]">Services</h4>
              <Link
                to="/services/cloud"
                className="text-white text-[15px] mb-4 mt-4"
              >
                Cloud security
              </Link>
              <Link to="/services/mobile" className="text-white text-[15px] mb-4">
                Mobile security
              </Link>
              <Link
                to="/services/application"
                className="text-white text-[15px] mb-4"
              >
                Application security
              </Link>
              <Link to="/services/network" className="text-white text-[15px] mb-4">
                Network security
              </Link>
              <Link to="/services/audit" className="text-white text-[15px] mb-4">
                Audit & Compliance
              </Link>
            </div>
            {/* Fourth column*/}
            <div className="flex flex-col mt-4 md:mt-12 lg:ml-[130px] ml-[5rem] max-sm:ml-[30px]">
              <Link
                className="text-white text-[15px] mb-4 mt-4 md:mt-12"
                to="/services/soc"
              >
                SOC & Management
              </Link>
              <Link className="text-white text-[15px] mb-4" to="/services/maturity">
                Maturity Assessment
              </Link>
              <Link className="text-white text-[15px] mb-4" to="/services/virtual">
                Virtual CISO as service
              </Link>
              <Link className="text-white text-[15px] mb-4" to="/services/staff">
                Staff & Augmentation
              </Link>
              <Link
                className="text-white text-[15px] mb-4"
                to="/services/awareness"
              >
                Security Awareness
              </Link>
            </div>
          </>
        }
      </div>
      {
        windowWidth < 768 &&
        <>
          {/* This should come in the mobile view*/}
          {/* Mobile view starts*/}
          <div className="flex flex-col px-5">
            <div className="flex flex-row">
              <div className="flex flex-col mt-4 md:mt-12 md:ml-[130px] max-sm:ml[30px]">
                <h4 className="text-white font-semibold text-[22px]">Company</h4>
                <h4
                  className="text-white text-[15px] mb-4 mt-4 cursor-pointer"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  About Us
                </h4>
                <h4
                  className="text-white text-[15px] mb-4 cursor-pointer"
                  onClick={() => {
                    navigate("/services");
                  }}
                >
                  Services
                </h4>
                <a
                  className="text-white text-[15px] mb-4 cursor-pointer"
                  href="#blog"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Blog
                </a>
                <h4 className="text-white text-[15px] mb-4 cursor-pointer">
                  Contact
                </h4>
              </div>
              <div className="flex flex-col mt-4 md:mt-12 sm:ml-[130px] max-sm:ml-[100px]">
                <h4 className="text-white font-semibold text-[22px]">Services</h4>
                <Link
                  to="/services/cloud"
                  className="text-white text-[15px] mb-4 mt-4"
                >
                  Cloud security
                </Link>
                <Link to="/services/mobile" className="text-white text-[15px] mb-4">
                  Mobile security
                </Link>
                <Link
                  to="/services/application"
                  className="text-white text-[15px] mb-4"
                >
                  Application security
                </Link>
                <Link
                  to="/services/network"
                  className="text-white text-[15px] mb-4"
                >
                  Network security
                </Link>
                <Link to="/services/audit" className="text-white text-[15px] mb-4">
                  Audit & Compliance
                </Link>
              </div>
            </div>
            <div className="">
              <div className="flex flex-col mt-4 md:mt-12 md:ml-[130px] max-sm:ml[30px]">
                <Link
                  className="text-white text-[15px] mb-4 mt-4 md:mt-12"
                  to="/services/soc"
                >
                  SOC & Management
                </Link>
                <Link className="text-white text-[15px] mb-4" to="/services/maturity">
                  Maturity Assessment
                </Link>
                <Link className="text-white text-[15px] mb-4" to="/services/virtual">
                  Virtual CISO as service
                </Link>
                <Link className="text-white text-[15px] mb-4" to="/services/staff">
                  Staff & Augmentation
                </Link>
                <Link
                  className="text-white text-[15px] mb-4"
                  to="/services/awareness"
                >
                  Security Awareness
                </Link>
              </div>
            </div>
          </div>
          {/* Mobile view ends for this one*/}
          {/* <hr className="border-t border-gray-0" /> */}
        </>
      }

      <div className="pt-2 px-2 pb-2 flex flex-col items-center mt-[40px] md:flex-row md:justify-around lg:justify-center lg:gap-[10%] bg-[#000000] text-white min-h-[40px] text-center border-white">
        <div className="flex flex-row justify-start pt-2 mb-2">
          <Link to="/terms-and-conditions" className="mr-2 cursor-pointer">
            Terms Conditions
          </Link>
          <Link to="/privacy-policy" className="cursor-pointer">
            Privacy Policy
          </Link>
        </div>

        <div className="pt-2 px-2 pb-2 bg-[#000000] text-white min-h-[40px] mb-2 md:mb-0">
          Copyright 2024 © All Rights Reserved | ArmourIQ
        </div>

        <div className="flex flex-row md:justify-end pt-2 space-x-4">
          <Link to="https://www.linkedin.com/company/armouriq/" target="_blank">
            <FaLinkedin className="cursor-pointer" size={25} />
          </Link>
          <BsTwitterX className="cursor-pointer" size={25} />
          <IoLogoYoutube className="cursor-pointer" size={25} />
          <FaMedium className="cursor-pointer" size={25} />
        </div>
      </div>
    </div>
  )
}

export default Footer
