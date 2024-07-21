import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "/assets/Company.png";
import logo2 from "/assets/logo2.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 flex flex-row bg-white h-[98px] items-center px-4">
        <img
          src={logo2}
          alt="Company Logo"
          className="h-[130px] ml-0 mr-auto sm:ml-0 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="flex flex-row max-sm:hidden items-center text-black list-none ml-auto font-[Roboto]">
          <li
            className="mr-6 mb-3 text-[20px] font-medium cursor-pointer"
            onClick={() => {
              navigate("/");
              
            }}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className="mr-6 mb-3 text-[20px] font-medium cursor-pointer"
            onClick={() => navigate("/about")}
          >
            About Us
          </li>
          <li
            className="relative group mr-4 mb-3 text-[20px] font-medium cursor-pointer"
            onClick={() => navigate("/services")}
          >
            Services
          </li>
          <li
            className="relative group mr-6 mb-3 text-[20px] font-medium cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <a href="#blog">Blog</a>
          </li>
          <li
            className="mr-6 mb-3 text-[20px] font-medium cursor-pointer"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </li>
        </ul>
        <IoMdMenu
          color="black"
          size={25}
          className="mr-3 mb-2 block sm:hidden max-sm:h-8 max-sm:w-8 cursor-pointer"
          onClick={() => setVisibleMenu(true)}
        />
      </div>
      {visibleMenu && (
        <div className="fixed top-0 left-0 h-screen w-screen bg-black transition z-20">
          <RxCross2
            color="white"
            size={25}
            className="absolute top-4 right-4 max-sm:h-8 max-sm:w-8 cursor-pointer"
            onClick={() => setVisibleMenu(false)}
          />
          <ul className="text-white absolute top-14 right-10 text-right text-2xl flex flex-col gap-4">
            <li onClick={() => {
                navigate("/");
                // scrollToSection("home");
                setVisibleMenu(false);
              }}><a href="#home">HOME</a></li>
            <li
              onClick={() => {
                navigate("/about");
                setVisibleMenu(false);
              }}
            >
              ABOUT US
            </li>
            <li
              onClick={() => {
                navigate("/services");
                setVisibleMenu(false);
              }}
            >
              SERVICES
            </li>
            <li
              onClick={() => {
                navigate("/");
                setVisibleMenu(false);
              }}
            >
              <a href="#team">TEAM</a>
            </li>
            <li
              onClick={() => {
                navigate("/");
                setVisibleMenu(false);
              }}
            >
              <a href="#blog">BLOG</a>
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                setVisibleMenu(false);
              }}
            >
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
