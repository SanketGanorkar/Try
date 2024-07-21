// import Cashmap from "/assets/Cashmap.png";
// import FoodIn from "/assets/FoodIn.png";
// import Moneytalk from "/assets/Moneytalk.png";
// import Naviti from "/assets/Naviti.png";
// import Nudgebee from "/assets/Nudgebee.png";
// import Suzie from "/assets/Suzie.png";

// const Trusted = () => {
//   return (
//     <div className="bg-white flex flex-row min-h-[300px] justify-center items-center max-lg:flex-col max-lg:items-center">
      // <div className="flex flex-col text-black max-md:px-2">
      //   <div className="font-bold text-3xl py-4 lg:py-0 lg:mb-6">
      //     Our Customers Trust Us
      //     <br />
      //     for Our Transparency
      //     <br />
      //     and Reliability
      //   </div>
      //   <div className="hidden lg:block">
      //     Our dedication to transparency means that our clients have a
      //     <br />
      //     clear understanding of our processes, pricing, and outcomes
      //     <br />
      //     fostering a strong sense of reliability and
      //     <br />
      //     satisfaction in our partnership.
      //   </div>
      // </div>
//       <div className="text-black sm:pt-10 lg:pt-0 lg:pl-10 max-lg:flex max-lg:flex-wrap max-lg:justify-center items-center sm:mt-8 max-sm:mb-5">
//         <div className="flex flex-row lg:pb-5 ">
//           <img
//             src={Cashmap}
//             className="w-28 h-28 m-1 animate-bounce  border-[2px] cursor-pointer"
//           />
//           <img
//             src={FoodIn}
//             className="w-28 h-28 m-1 animate-bounce border-[2px] cursor-pointer"
//           />
//           <img
//             src={Moneytalk}
//             className="w-28 h-28 m-1 animate-bounce border-[2px] cursor-pointer"
//           />
//         </div>
//         <div className="flex flex-row lg:pb-5">
//           <img
//             src={Naviti}
//             className="w-28 h-28 m-1 animate-bounce border-[2px] cursor-pointer"
//           />
//           <img
//             src={Nudgebee}
//             className="w-28 h-28 m-1 animate-bounce border-[2px] cursor-pointer"
//           />
//           <img
//             src={Suzie}
//             className="w-28 h-28 m-1 animate-bounce border-[2px] cursor-pointer"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Trusted;
import Cashmap from "/assets/Cashmap.png";
import FoodIn from "/assets/FoodIn.png";
import Moneytalk from "/assets/Moneytalk.png";
import Naviti from "/assets/Naviti.png";
import Nudgebee from "/assets/Nudgebee.png";
import Suzie from "/assets/Suzie.png";

const Trusted = () => {
  return (
    <div className="bg-white flex flex-col min-h-[300px] justify-center">
      <div className="flex flex-col text-black px-4 md:px-8 lg:pl-[280px]">
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
        <img
          src={Cashmap}
          className="w-28 h-28 m-1 border-[2px] transition-all duration-300 hover:w-[120px] hover:h-[120px] cursor-pointer"
        />
        <img
          src={FoodIn}
          className="w-28 h-28 m-1 hover:w-[120px] hover:h-[120px] transition-all duration-300 border-[2px] cursor-pointer"
        />
        <img
          src={Moneytalk}
          className="w-28 h-28 m-1 hover:w-[120px] hover:h-[120px] transition-all duration-300 border-[2px] cursor-pointer"
        />
        <img
          src={Naviti}
          className="w-28 h-28 m-1 hover:w-[120px] hover:h-[120px] transition-all duration-300 border-[2px] cursor-pointer"
        />
        <img
          src={Nudgebee}
          className="w-28 h-28 m-1 hover:w-[120px] hover:h-[120px] transition-all duration-300 border-[2px] cursor-pointer"
        />
        <img
          src={Suzie}
          className="w-28 h-28 m-1 hover:w-[120px] hover:h-[120px] transition-all duration-300 border-[2px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Trusted;

