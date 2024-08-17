import { Link } from "react-router-dom";
import Footer from "./Footer";
import "./Services.css";
import { FaRegArrowAltCircleRight, FaMobileAlt } from "react-icons/fa";
import { TbCloudComputing } from "react-icons/tb";
import { MdSettingsApplications } from "react-icons/md";
import { AiFillSecurityScan } from "react-icons/ai";

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
      logo: <TbCloudComputing />,
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
      logo: <FaMobileAlt />,
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
      logo: <MdSettingsApplications />,
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
      logo: <TbCloudComputing />,
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
      logo: <TbCloudComputing />,
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
      logo: <TbCloudComputing />,
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
      logo: <TbCloudComputing />,
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
      logo: <TbCloudComputing />,
    },
    {
      id: 9,
      title: "Security Program",
      path: "/services/awareness",
      highlights: [
        "Security Awareness Training",
        "Simulated Social Engineering Test",
      ],
      logo: <AiFillSecurityScan />,
    },
  ];
  const faqs = [
    {
      id: 1,
      question: "What types of cybersecurity solutions do you offer?",
      answer:
        "We offer a comprehensive range of cybersecurity solutions, including network security, endpoint protection, cloud security, identity and access management, and threat intelligence.",
    },
    {
      id: 2,
      question: "How do you ensure the security of sensitive data?",
      answer:
        "We implement advanced encryption, multi-factor authentication, and continuous monitoring to protect sensitive data from unauthorized access and breaches.",
    },
    {
      id: 3,
      question:
        "What industries do you serve with your cybersecurity services?",
      answer:
        "We serve various industries including finance, healthcare, retail, government, and education, providing tailored cybersecurity solutions to meet industry-specific challenges.",
    },
    {
      id: 4,
      question: "Do you offer 24/7 monitoring and support?",
      answer:
        "Yes, we provide round-the-clock monitoring and support to ensure your systems are always protected and any potential threats are addressed immediately.",
    },
    {
      id: 5,
      question: "How can your services help with regulatory compliance?",
      answer:
        "Our cybersecurity solutions help organizations comply with industry regulations such as GDPR, HIPAA, and PCI-DSS by providing robust security controls and regular audits.",
    },
    {
      id: 6,
      question: "Can you help with incident response and recovery?",
      answer:
        "Absolutely. Our team is equipped to handle incident response, helping you quickly contain, mitigate, and recover from cybersecurity incidents.",
    },
  ];

  return (
    <div id="services" className="bg-white min-h-screen mt-[80px]">
      <div className="relative">
        <div className=" bg-[#004AAD] opacity-100 h-[182px]"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-black mt-[50px] mb-9 max-sm:mt-[50px]">
            <span className="ml-[8px] text-[4xl] md:text-[45px] text-white font-semibold">
              Our Services
            </span>
          </div>
        </div>
      </div>
      <h1 className="text-black font-bold text-3xl ml-[60px] mt-4 max-sm:ml-6 text-balance">
        Enhancing Organisational Cybersecurity Through Comprehensive Services
      </h1>
      <div className="text-black text-xl ml-[60px] mt-5 max-sm:ml-7 text-balance">
        Our cybersecurity services provide comprehensive protection for your
        business against cyber threats, ensuring data security, regulatory
        compliance, and business continuity. We offer risk assessment and
        management to identify vulnerabilities, advanced threat detection and
        response for real-time protection, and robust data protection and
        encryption.
      </div>
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-1 md:grid-cols-3 md:w-[75%] gap-4 p-4 lg:mt-2">
          {services.map((item) => (
            <div
              key={item.id}
              className="md:w-[280px] md:h-[280px] mb-5 w-full h-full flex justify-center"
            >
              {/* For Desktop */}
              <Link to={item.path} className="hidden lg:block h-full m-1">
                <div className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col justify-between items-center border-[#004bae] border-[1px] w-[280px] h-[280px] cursor-pointer hover:bg-[#004bae] hover:border-white hover:border-[1px] hover:text-white hover:h-[300px] hover:w-[300px] transition-all duration-300">
                  <div className="w-full h-full flex flex-col items-center justify-center">
                    {/* <img src={item.logo} className="" /> */}
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <ul className="list-disc text-left pl-5 mb-2">
                      {item.highlights.slice(0, 3).map((highlight, index) => (
                        <li key={index}>{highlight}</li>
                      ))}
                    </ul>
                    <span className="text-black hover:text-white mt-2 hover:font-bold">
                      <FaRegArrowAltCircleRight size={30} className="" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* For Mobile */}
              <div className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col justify-between items-center border-[#004bae] border-[1px] w-[250px] h-[250px] lg:hidden hover:bg-[#004bae] hover:border-white hover:border-[1px] hover:text-white hover:h-[300px] hover:w-[300px] transition-all duration-300">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  {/* <img src={item.logo} className="" /> */}
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
                    <FaRegArrowAltCircleRight size={30} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* transition-all duration-300 */}
      <div className="p-10 pt-0 lg:mt-2 flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl max-sm:text-2xl">
          Frequently Asked Questions
        </h1>
        <h3 className="font-normal text-xl text-gray-500 mt-2">
          Your Queries, Our Answers
        </h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-5 mt-5">
          {faqs.map((faq, index) => (
            <div key={index}>
              <details className="group cursor-pointer" name="accordian">
                <summary className="font-semibold text-[15px] text-black">
                  {faq.question}
                </summary>
                <p className="font-semibold text-[15px] text-black ml-3">
                  {faq.answer}
                </p>
              </details>
              {index < faqs.length && (
                <hr className="border-t-1 border-gray-300 mt-3" />
              )}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
