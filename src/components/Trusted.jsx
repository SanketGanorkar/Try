const Cashmap = "./assets/Cashmap.png";
const FoodIn = "./assets/FoodIn.png";
const Moneytalk = "./assets/M.png";
const Naviti = "./assets/Naviti.png";
const Nudgebee = "./assets/Nudgebee.png";
const Suzie = "./assets/Suzie.png";
const Aashwat = "./assets/aashwat.png";

import Marquee from "react-fast-marquee";

const Trusted = () => {
  return (
    <div className="bg-white flex flex-col min-h-[300px] justify-center">
      <div className="flex flex-col text-black px-4 md:px-8 lg:pl-[300px]">
        <div className="font-bold text-3xl py-4 lg:py-0 lg:mb-6">
          Our Customers Trust Us
          <br />
          for Our Transparency
          <br />
          and Reliability
        </div>
        <div className="block lg:block text-center lg:text-left max-sm:text-left max-sm:w-[300px]">
          Our dedication to transparency means that our clients have a
          <br />
          clear understanding of our processes, pricing, and outcomes
          <br />
          fostering a strong sense of reliability and
          <br />
          satisfaction in our partnership.
        </div>
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap mt-8 mb-5 ">
        <div className="md:w-[1000px]">
          <Marquee autoFill pauseOnClick>
            <img
              src={Cashmap}
              className="w-29 h-20 m-1 border-[2px] transition-all duration-300 hover:scale-110 cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={FoodIn}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Moneytalk}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Naviti}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Nudgebee}
              className="w-29 h-20 m-1 htransition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Suzie}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
            <img
              src={Aashwat}
              className="w-29 h-20 m-1 transition-all duration-300 hover:scale-110 border-[2px] cursor-pointer md:mx-9 max-sm:mx-3"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
