import { FaStar } from "react-icons/fa";
import user from "/assets/User.png";
const Testimonials = () => {
  const arr = [
    {
      id: 1,
      desc: "The team was incredibly professional and knowledgeable. Their expertise in handling our security needs has been invaluable.",
      img: user,
      name: "Henry Ford",
      desig: "Sales Executive",
    },
    {
      id: 2,
      desc: "Oversees project management and ensures alignment with strategic goals, fostering a collaborative environment.",
      img: user,
      name: "Edward Kent",
      desig: "Senior Developer",
    },
    {
      id: 3,
      desc: "The cybersecurity solutions provided by this company have drastically improved our security posture.",
      img: user,
      name: "Jane Maxwell",
      desig: "Assitant Director",
    },
  ];
  return (
    <div className="flex bg-white lg:justify-center">
      <div className="flex flex-col px-4 max-lg:w-screen">
        <div className="flex flex-row text-black max-sm:flex-col">
          <div>
            <h5 className="font-bold text-[#004bae] mt-12">
              TESTIMONIALS
            </h5>
            <h2 className="font-bold text-3xl mt-3">What Client Says About Us</h2>
          </div>
          <div>
            <button className="bg-[#004AAD] w-[8rem] text-white p-2 font-bold mt-4 sm:mt-[105px] md:ml-[5rem] lg:ml-[290px] cursor-pointer">
              SEE MORE
            </button>
          </div>
        </div>

        <div className="max-lg:overflow-x-scroll">
          <div className="flex flex-row gap-2 md:gap-4 xl:gap-12 max-lg:w-[65rem] max-md:overflow-x-scroll">
            {arr.map((item) => (
              <div key={item.id} className="bg-[#F6F5F5] mb-9 border-[2px] w-[342px] h-[250px] mt-6 md:mt-12 pl-6 pr-3">
                <div className="flex flex-row mt-3">
                  <FaStar color="black" className="mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                  <FaStar color="black" className="ml-2 mt-8" />
                </div>
                <p className="text-black mt-3">
                  {item.desc}
                </p>
                <div className="flex flex-row">
                  <img src={item.img} className="h-[70px] mt-3 mb-3" />
                  <div className="flex flex-col mt-5 ml-5">
                    <h2 className="text-black font-semibold">{item.name}</h2>
                    <h6 className="text-black text-[14px]">{item.desig}</h6>
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
