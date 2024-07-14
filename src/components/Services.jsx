import { Link } from "react-router-dom";
import Footer from "./Footer";

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
    },
    {
      id: 2,
      title: "Mobile Security",
      path: "/services/mobile",
      highlights: [
        "Enhanced Application Security",
        "Protect User Data",
        "Compliance Assurance",
      ],
    },
    {
      id: 3,
      title: "Application Security",
      path: "/services/application",
      highlights: [
        "Enhanced Application Security",
        "Compliance Assurance",
        "Risk Mitigation",
      ],
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
    },
    {
      id: 6,
      title: "SOC & Management Services",
      path: "/services/soc",
      highlights: [
        "Proactive Threat Management",
        "Expert Incident Response",
        "Strategic Security Guidance",
      ],
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
    },
    {
      id: 10,
      title: "Security Awareness Program",
      path: "/services/awareness",
      highlights: [
        "Security Awareness Training",
        "Simulated Social Engineering Test",
      ],
    },
  ];

  return (
    <div id="services" className="bg-[#000000] min-h-screen mt-[80px]">
      <div className="relative">
        <div className="bg-abbg bg-cover bg-center h-[240px] opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-4xl text-white mt-12 mb-9">
            <span className="ml-[15px] text-6xl">Our Services</span>
          </div>
        </div>
      </div>
      <h1 className="text-white font-bold text-3xl ml-10 mt-4">
        Enhancing Organisational Cybersecurity Through Comprehensive Services
      </h1>
      <div className="text-white text-xl ml-10 mt-5">
        Our cybersecurity services provide comprehensive protection for your
        business against cyber threats, ensuring data security, <br />regulatory
        compliance, and business continuity. We offer risk assessment and
        management to identify vulnerabilities, advanced <br />threat detection and
        response for real-time protection, and robust data protection and
        encryption.
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10 lg:mt-2">
        {services.map((item) => (
          <div key={item.id} className="w-full h-full">
            {/* For Desktop */}
            <Link to={item.path} className="hidden lg:block w-full h-full">
              <div className="bg-[#262626] text-white p-6 rounded-lg flex flex-col justify-between items-center border-[#004bae] border-[1px] w-full h-full cursor-pointer hover:bg-[#004bae] hover:border-white hover:border-[1px]">
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <ul className="list-disc text-left pl-5 mb-2">
                    {item.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                  <span className="text-white mt-2 hover:font-bold">...read more</span>
                </div>
              </div>
            </Link>

            {/* For Mobile */}
            <div className="bg-[#262626] text-white p-6 rounded-lg flex flex-col justify-between items-center border-[#004bae] border-[1px] w-full h-full lg:hidden hover:bg-[#004bae] hover:border-white hover:border-[1px]">
              <div className="w-full h-full flex flex-col items-center justify-center">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <ul className="list-disc text-left pl-5 mb-2">
                  {item.highlights.slice(0, 3).map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
                <Link to={item.path} className="text-white mt-2 hover:font-bold">...read more</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Services;
