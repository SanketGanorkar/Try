import Cashmap from '/assets/Cashmap.png';
import FoodIn from '/assets/FoodIn.png';
import Moneytalk from '/assets/Moneytalk.png';
import Naviti from '/assets/Naviti.png';
import Nudgebee from '/assets/Nudgebee.png';
import Suzie from '/assets/Suzie.png'; // Assuming security.jpg is Suzie's logo

const Trusted = () => {
  return (
    <div className="bg-[#000000] flex flex-row min-h-[300px] justify-center items-center max-lg:flex-col max-lg:items-center">
      <div className="flex flex-col text-white max-md:px-2">
        <div className="font-bold text-3xl py-4 lg:py-0 lg:mb-6">
          Our Customers Trust Us
          <br />
          for Our Transparency
          <br />
          and Reliability
        </div>
        <div className="hidden lg:block">
          Our dedication to transparency means that our clients have a
          <br />
          clear understanding of our processes, pricing, and outcomes
          <br />
          fostering a strong sense of reliability and 
          <br />satisfaction in our partnership.
        </div>
      </div>
      <div className="text-white sm:pt-10 lg:pt-0 lg:pl-10 max-lg:flex max-lg:flex-wrap max-lg:justify-center items-center sm:mt-8 max-sm:mb-5">
        <div className="flex flex-row lg:pb-5 ">
          <img src={Cashmap} className="w-28 h-28 m-1 animate-bounce " alt="Cashmap" />
          <img src={FoodIn} className="w-28 h-28 m-1 animate-bounce" alt="FoodIn" />
          <img src={Moneytalk} className="w-28 h-28 m-1 animate-bounce" alt="Moneytalk" />
        </div>
        <div className="flex flex-row lg:pb-5">
          <img src={Naviti} className="w-28 h-28 m-1 animate-bounce" alt="Naviti" />
          <img src={Nudgebee} className="w-28 h-28 m-1 animate-bounce" alt="Nudgebee" />
          <img src={Suzie} className="w-28 h-28 m-1 animate-bounce" alt="Suzie" />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
