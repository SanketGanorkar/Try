import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import logo from "/assets/Company.png";
import logo2 from "/assets/logo2.png";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

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
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scaleY: 0.5 }}
                animate={{ opacity: 1, scaleY: 1 }}
                exit={{ opacity: 0, scaleY: 0.5 }}
                style={{ transformOrigin: "top" }}
                className="absolute h-auto w-auto bg-gray-dk left-4 top-0 mt-[3.5rem] py-6 flex z-[80] max-[861px]:hidden bg-gray-500"
              >
                <div className="flex flex-col gap-1 h-full w-[11rem] border-r-2 border-gray-bg">
                  <p className="py-2 px-5 hover:bg-gray-bg transition cursor-pointer">
                    Popular
                  </p>
                  <p className="py-2 px-5 hover:bg-gray-bg transition cursor-pointer">
                    New
                  </p>
                  <p className="py-2 px-5 hover:bg-gray-bg transition cursor-pointer">
                    Alphabetical
                  </p>
                  <p className="py-2 px-5 hover:bg-gray-bg transition cursor-pointer">
                    Release calender
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-gray-500 pl-4 mb-3">GENRE</p>
                  <div className="grid grid-rows-3 grid-flow-col gap-2">
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Action
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Adventure
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Comedy
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Drama
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Fantasy
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Rommance
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Sci-Fi
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Sports
                    </p>
                    <p className="py-2 px-5 w-[10rem] hover:bg-gray-bg cursor-pointer">
                      Thriller
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            ;
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
            <li
              onClick={() => {
                navigate("/");
                // scrollToSection("home");
                setVisibleMenu(false);
              }}
            >
              <a href="#home">HOME</a>
            </li>
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
