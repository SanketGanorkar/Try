import { Link } from "react-router-dom";
import Footer from "./Footer";
// import newbg from "../../public/assets/newbg.jpeg"
import './Services.css'
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Cloud Security",
      path: "/services/cloud",
      highlights: [
        "Enhanced Security",
        "Compliance Assurance",
        "Cost Efficiency",
      ],
      footer: "...read more",
    },
    {
      id: 2,
      title: "Mobile Security",
      path: "/services/mobile",
      highlights: [
        "Proactive Application Security",
        "Protect User Data",
        "Compliance Assurance",
      ],
      footer: "...read more",
    },
    {
      id: 3,
      title: "Application Security",
      path: "/services/application",
      highlights: [
        "Proactive Application Security",
        "Compliance Assurance",
        "Risk Mitigation",
      ],
      footer: "...read more",
    },
    {
      id: 4,
      title: "Network Security",
      path: "/services/network",
      highlights: [
        "Enhanced Network Security",
        "Compliance Assurance",
        "Risk Mitigation",
      ],
      footer: "...read more",
    },
    {
      id: 5,
      title: "Audit & Compliance",
      path: "/services/audit",
      highlights: [
        "Enhanced Security Posture",
        "Compliance Assurance",
        "Risk Mitigation",
      ],
      footer: "...read more",
    },
    {
      id: 6,
      title: "SOC & Services",
      path: "/services/soc",
      highlights: [
        "Active Threat Management",
        "Expert Incident Response",
        "Strategic Security Guidance",
      ],
      footer: "...read more",
    },
    {
      id: 7,
      title: "Maturity Assessment",
      path: "/services/maturity",
      highlights: [
        "Enhanced Security Posture",
        "Strategic Guidance",
        "Compliance Assurance",
      ],
      footer: "...read more",
    },
    {
      id: 8,
      title: "Virtual CISO as a Service",
      path: "/services/virtual",
      highlights: [
        "Cost-Effective Expertise",
        "Efficient Technology Selection",
        "On-Demand Services",
      ],
      footer: "...read more",
    },
    {
      id: 9,
      title: "Staff Augmentation",
      path: "/services/staff",
      highlights: [
        "Flexible Resource Allocation",
        "Specialized Expertise",
        "Seamless Integration",
      ],
      footer: "...read more",
    },
    {
      id: 10,
      title: "Security Program",
      path: "/services/awareness",
      highlights: [
        "Security Awareness Training",
        "Simulated Social Engineering Test",
      ],
      footer: "...read more",
    },
  ];

  return (
    <div id="services" className="bg-white min-h-screen mt-[80px]">
      <div className="relative">
        <div className=" bg-black opacity-15 h-[240px]" ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-black mt-12 mb-9">
            <span className="ml-[15px] text-6xl text-black font-bold">Our Services</span>
          </div>
        </div>
      </div>
      <h1 className="text-black font-bold text-3xl ml-10 mt-4">
        Enhancing Organisational Cybersecurity Through Comprehensive Services
      </h1>
      <div className="text-black text-xl ml-10 mt-5">
        Our cybersecurity services provide comprehensive protection for your
        business against cyber threats, ensuring data security, <br />
        regulatory compliance, and business continuity. We offer risk assessment
        and management to identify vulnerabilities, advanced <br />
        threat detection and response for real-time protection, and robust data
        protection and encryption.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 lg:mt-2">
        {services.map((item) => (
          <div key={item.id} className="w-full h-full">
            {/* For Desktop */}
            <Link to={item.path} className="hidden lg:block w-full h-full">
              <div className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col justify-between items-center border-[#004bae] border-[1px] w-[280px] h-[280px] cursor-pointer hover:bg-[#004bae] hover:border-white hover:border-[1px] hover:text-white hover:h-[300px] hover:w-[300px] transition-all duration-300">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <ul className="list-disc text-left pl-5 mb-2">
                    {item.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                  <span className="text-black hover:text-white mt-2 hover:font-bold">
                    {/* <FaRegArrowAltCircleRight color="blue" size={30} className=""/> */}
                    <FaRegArrowAltCircleRight size={30} className=""/>
                  </span>
                </div>
              </div>
            </Link>

            {/* For Mobile */}
            <div className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col justify-between items-center border-[#004bae] border-[1px] w-[250px] h-[250px] lg:hidden hover:bg-[#004bae] hover:border-white hover:border-[1px] hover:text-white hover:h-[300px] hover:w-[300px] transition-all duration-300">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <ul className="list-disc text-left pl-5 mb-2">
                  {item.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <Link
                  to={item.path}
                  className="text-black mt-2 hover:font-bold"
                >
                  <FaRegArrowAltCircleRight size={30}/>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* transition-all duration-300 */}
      <div className="p-10 pt-0 lg:mt-2 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl max-sm:text-2xl">Frequently Asked Questions</h1>
        <h3 className="font-normal text-xl text-gray-500 mt-2">Your Queries, Our Answers</h3>
        <div className="flex flex-col gap-y-5">
            <details className="group cursor-pointer ">
              <summary className="font-semibold text-[20px] text-black max-sm:w-[380px]">What Is The Development Time For A New Website?</summary>
              <p className="font-semibold text-[15px] text-black ml-3 w-[530px] max-sm:w-[350px]">The normal developing period of a new website usually varies from 3 to up to 12 weeks, subject to project complexity and size.</p>
            </details>
            <hr className="border-t-2 border-gray-300"/>
            <details className="group cursor-pointer">
              <summary className="font-semibold text-[20px] text-black max-sm:w-[380px]">What Is The Development Time For A New Website?</summary>
              <p className="font-semibold text-[15px] text-black ml-3 w-[530px] max-sm:w-[350px]">The normal developing period of a new website usually varies from 3 to up to 12 weeks, subject to project complexity and size.</p>
            </details>
            <hr className="border-t-2 border-gray-300"/>
            <details className="group cursor-pointer">
              <summary className="font-semibold text-[20px] text-black max-sm:w-[380px]">What Is The Development Time For A New Website?</summary>
              <p className="font-semibold text-[15px] text-black ml-3 w-[530px] max-sm:w-[350px]">The normal developing period of a new website usually varies from 3 to up to 12 weeks, subject to project complexity and size.</p>
            </details>
            <hr className="border-t-2 border-gray-300"/>
            <details className="group cursor-pointer">
              <summary className="font-semibold text-[20px] text-black max-sm:w-[380px]">What Is The Development Time For A New Website?</summary>
              <p className="font-semibold text-[15px] text-black ml-3 w-[530px] max-sm:w-[350px]">The normal developing period of a new website usually varies from 3 to up to 12 weeks, subject to project complexity and size.</p>
            </details>
            <hr className="border-t-2 border-gray-300"/>
            <details className="group cursor-pointer">
              <summary className="font-semibold text-[20px] text-black max-sm:w-[380px]">What Is The Development Time For A New Website?</summary>
              <p className="font-semibold text-[15px] text-black ml-3 w-[530px] max-sm:w-[350px]">The normal developing period of a new website usually varies from 3 to up to 12 weeks, subject to project complexity and size.</p>
            </details>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
