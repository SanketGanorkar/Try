import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const ContactD = () => {
  return (
    <div className="">
      <div className="mt-[20px] sm:ml-5 flex flex-row max-sm:mt-[60px] max-md:flex-col gap-4">
        <div className="flex flex-col ">
          <div className="flex flex-row ">
            <FaPhone color="#004bae" className="ml-4 mt-4" size={26} />
            <div className="flex flex-col">
              <h5 className="text-black ml-5 mt-2 font-medium">+1 469 296 9672</h5>
              <h5 className="text-black ml-5 font-medium">+91 9302864102</h5>
            </div>
          </div>
          <div className="flex flex-row">
            <MdOutlineEmail color="#004bae" className="ml-4 mt-4" size={36} />
            <div className="flex flex-col">
              <h5 className="text-black ml-3 mt-5 font-medium">hello@armouriq.com</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-black xl:ml-[95px] md:w-[480px]">
          <input
            type="text"
            placeholder="Your name"
            className=" p-3 h-[40px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
          />
          <div className="flex flex-row w-full gap-2">
            <input
              type="number"
              placeholder="Your Phone Number"
              className="p-3 w-[50%] h-[40px] text-black border-[#004bae] border-[1px] bg-[#F6F5F5]"
            />
            <input
              type="email"
              placeholder="Your Mail"
              className="text-black h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#F6F5F5]"
            />
          </div>
          <textarea
            type="text"
            placeholder="Your Message"
            className=" w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
          />
          <button className="bg-[#004bae] p-3 font-bold w-full text-white">SEND</button>
        </div>
      </div>
    </div>
  );
};
export default ContactD;
