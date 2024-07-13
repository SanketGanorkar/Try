import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "/assets/Company.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  const navigate = useNavigate();
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 flex flex-row bg-[#000000] h-[98px] items-center px-4">
        <img
          src={logo}
          alt="Company Logo"
          className="h-[130px] ml-0 mr-auto sm:ml-0 cursor-pointer"
          onClick={() => navigate("/")}
        />
        <ul className="flex flex-row max-sm:hidden items-center text-white list-none ml-auto">
          <li
            className="mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
              
            }}
          >
            <a href="#home">HOME</a>
          </li>
          <li
            className="mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => navigate("/about")}
          >
            ABOUT US
          </li>
          <li
            className="relative group mr-4 mb-3 font-bold cursor-pointer"
            onClick={() => navigate("/services")}
          >
            SERVICES
          </li>
          <li
            className="relative group mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          >
            <a href="#blog">BLOG</a>
          </li>
          <li
            className="mr-6 mb-3 font-bold cursor-pointer"
            onClick={() => {
              navigate("/contact");
            }}
          >
            CONTACT
          </li>
        </ul>
        <IoMdMenu
          color="white"
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
          <ul className="text-white absolute top-14 right-4 text-right text-2xl flex flex-col gap-4">
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
                // scrollToSection("team");
                setVisibleMenu(false);
              }}
            >
              <a href="#team">TEAM</a>
            </li>
            <li
              onClick={() => {
                navigate("/");
                // scrollToSection("blog");
                setVisibleMenu(false);
              }}
            >
              <a href="#blog">BLOG</a>
            </li>
            <li
              onClick={() => {
                navigate("/");
                // scrollToSection("contact");
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
