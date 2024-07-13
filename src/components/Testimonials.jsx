import { FaStar } from "react-icons/fa";
import user from "/assets/User.png";
const Testimonials = () => {
  const arr = [
    {
      id: 1,
      desc: "Dedicated to improving user experience, specializing in modern UI/UX design, and creating intuitive interfaces.",
      img: user,
      name: "Henry Ford",
      desig: "Sales Executive",
    },
    {
      id: 2,
      desc: "Expert in full-stack development, with a passion for building scalable applications and optimizing performance.",
      img: user,
      name: "Edward Kent",
      desig: "Senior Developer",
    },
    {
      id: 3,
      desc: "Oversees project management and ensures alignment with strategic goals, fostering a collaborative environment.",
      img: user,
      name: "Jane Maxwell",
      desig: "Assitant Director",
    },
  ];
  return (
    <div className="flex bg-[#000000] lg:justify-center">
      <div className="flex flex-col px-4 max-lg:w-screen">
        <div className="flex flex-row text-white max-sm:flex-col">
          <div>
            <h5 className="font-bold text-[13px] text-[#004bae] mt-12">
              TESTIMONIALS
            </h5>
            <h2 className="font-bold text-3xl mt-3">What Client Says About Us</h2>
          </div>
          <div>
            <button className="bg-[#004bae] w-[8rem] text-white p-2 font-semibold mt-4 sm:mt-[105px] md:ml-[5rem] lg:ml-[290px] cursor-pointer">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="max-lg:overflow-x-scroll">
          <div className="flex flex-row gap-2 md:gap-4 xl:gap-12 max-lg:w-[65rem] max-md:overflow-x-scroll">
            {arr.map((item) => (
              <div key={item.id} className="bg-[#262626] mb-9 border-[#004bae] border-[2px] w-[342px] h-[250px] mt-6 md:mt-12 pl-6 pr-3">
                <div className="flex flex-row mt-3">
                  <FaStar color="yellow" className="mt-8" />
                  <FaStar color="yellow" className="ml-2 mt-8" />
                  <FaStar color="yellow" className="ml-2 mt-8" />
                  <FaStar color="yellow" className="ml-2 mt-8" />
                  <FaStar color="yellow" className="ml-2 mt-8" />
                </div>
                <p className="text-white mt-3">
                  {item.desc}
                </p>
                <div className="flex flex-row">
                  <img src={item.img} className="h-[70px] mt-3 mb-3" />
                  <div className="flex flex-col mt-5 ml-5">
                    <h2 className="text-white font-semibold">{item.name}</h2>
                    <h6 className="text-white text-[14px]">{item.desig}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
