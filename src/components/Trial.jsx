import { GrDocumentVerified } from "react-icons/gr";

const Trail = () => {
  return (
    <div className="bg-trial bg-cover bg-center h-[350px]">
      <div className="lg:pl-[110px]">
        <div className="bg-[#000000] text-white h-[390px] w-[350px] ml-[35px]">
          <div className="font-bold text-2xl pl-[38px] pt-[40px]">
            Strengthen Your
            <br />
            Cyber Defenses.
            <br />
            Book a Free
            <br />
            Consultation Call !
          </div>
          <div className="mb-[30px]">
            <div className="mb-1 ml-9 mt-4  ">
              Let us help you identify and mitigate risks with a
              personalized security assessment from our professionals.
            </div>
            <button className="flex flex-row font-bold bg-[#004bae] text-white p-3 ml-[38px] mt-5">
              <GrDocumentVerified className="mt-1 mr-2" /> BOOK A FREE CALL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trail;
