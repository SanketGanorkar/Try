import { MdOutlineEmail } from "react-icons/md";
import {
  FaBullseye,
  FaEye,
  FaHandshake,
  FaPhoneAlt,
  FaUser,
} from "react-icons/fa";
import { IoPeopleSharp, IoShieldCheckmarkSharp } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import cybersec_tem from "../../public/assets/cybersec_team.jpg";
import { GrIntegration, GrShieldSecurity } from "react-icons/gr";
import about from "../../public/assets/about.jpg";
import cybersec_engineer from "/assets/cybersec_engineer.jpg";
import { BsBullseye } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Footer from "./Footer";
import CountUp from "react-countup";
import Team from "./Team.jsx";
import { useState } from "react";
const AboutUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_wcm3o3j";
    const templateID = "template_93tgdo8";
    const publicKey = "DuSbBCyG3R1hNDXzG";

    const templateParams = {
      from_name: name,
      from_email: email,
      from_message: message,
      from_subject: subject,
      from_number: number,
      to_name: "Sanket",
      message: message,
    };

    emailjs
      .send(serviceId, templateID, templateParams, publicKey)
      .then((response) => {
        alert("Message sent successfully!");
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
        setNumber("");
      })
      .catch((err) => {
        alert("Could not send the message!");
        console.log("Error sending the mail!", err);
      });
  };
  const visionMissionValues = [
    {
      id: 1,
      logo: <FaBullseye size={30} />,
      title: "Our Mission",
      desc: "Our mission at ArmourIQ Solutions is to empower businesses to grow, become efficient, and become successful through innovative IT solutions. Technology services that enable our clients to thrive in the digital age are at the forefront of our commitment to delivering cutting-edge technology services.",
    },
    {
      id: 2,
      logo: <FaEye size={30} />,
      title: "Our Vision",
      desc: "As a leading IT consulting firm in India, ArmourIQ Solutions aims to be known for our expertise, integrity, and client-centric approach. To become trusted partners in our clients' digital transformation journeys, we continuously innovate and adapt to emerging technologies.",
    },
    {
      id: 3,
      logo: <FaHandshake size={30} />,
      title: "Our Values",
      desc: "ArmourIQ Solutions, an IT consulting firm in India, is committed to excellence, innovation, integrity, client-centricity, collaboration, and continuous learning. Our goal is to fulfill clients' needs by delivering top-notch solutions. In the digital age, we empower businesses to prosper through our culture of teamwork and growth.",
    },
  ];

  const sections = [
    {
      id: 4,
      logo: <IoPeopleSharp size={35} />,
      title: "Our Philosophy",
      desc: "At ArmourIQ, we believe in securing the future of businesses through robust cybersecurity solutions. Our journey began with a precise and ambitious vision: to provide cybersecurity services that transcend mere problem-solving to revolutionize business operations. Our philosophy is simple yet profound: we view cybersecurity not just as a tool, but as a critical ally in the strategic business landscape, capable of transforming market dynamics.",
    },
    {
      id: 5,
      logo: <FaTrophy size={35} />,
      title: "Commitment to Innovation",
      desc: "Innovation is at the heart of ArmourIQ. Our team of seasoned experts specializes in finance, healthcare, and technology, ensuring we stay ahead of sector-specific vulnerabilities. We constantly evolve our methodologies and solutions to address the ever-changing cybersecurity landscape, empowering proactive risk mitigation to safeguard your organization from potential threats before they strike.",
    },
    {
      id: 6,
      logo: <BsBullseye size={35} />,
      title: "Our Expertise",
      desc: "Our approach starts with meticulous Technical Risk and Business Process Control Assessments, uncovering vulnerabilities in IT infrastructure and operational processes. Our Cyber Maturity Assessment benchmarks your cybersecurity against industry best practices, providing a clear roadmap for improvement. We tailor Cloud Assessments for Azure, Office 365, and AWS to ensure your cloud environments are secure against data vulnerabilities, access control issues, and compliance risks.",
    },
    {
      id: 7,
      logo: <GrShieldSecurity size={35} />,
      title: "Security & Quality Assurance",
      desc: "Navigating complex regulations like HIPAA, PCI DSS, and GDPR is made simpler with our Regulatory Compliance Assistance. We ensure data privacy and regulatory compliance while empowering your team through Security Awareness Training and Simulated Social Engineering Tests, fostering a culture of vigilance. Our vCISO services offer strategic guidance aligning cybersecurity with your business objectives, and our Incident Response Procedure prepares your organization to respond swiftly and effectively to cyber incidents, minimizing disruption and protecting your reputation.",
    },
    {
      id: 8,
      logo: <GrIntegration size={35} />,
      title: "Seamless Integration",
      desc: "ArmourIQ’s comprehensive services ensure seamless integration of robust security measures into your existing systems. Continuous monitoring through Threat Detection, Vulnerability Scanning, and Firewall Rule Reviews ensures your defenses remain robust and responsive to emerging threats. With our Cloud Security Configuration Audits, Mobile Security Services, Application Security Services, and Network Security Services, we provide tailored recommendations and ongoing support to maintain and enhance your security posture.",
    },
    {
      id: 9,
      logo: <IoShieldCheckmarkSharp size={35} />,
      title: "A Call to Innovate",
      desc: "We invite you to join us in securing what matters most. Partner with ArmourIQ to fortify your cybersecurity posture and thrive securely in today’s digital landscape. Discover how our tailored solutions can safeguard your organization’s future and foster a culture of innovation and vigilance. Together, we can navigate the complexities of the digital age and ensure your organization remains resilient against emerging threats. Trust in our expertise to guide you towards a secure and prosperous future.",
    },
  ];

  return (
    // <div>
    //   <div className="flex flex-col bg-white mt-3">
    //     <div>
    //       <div className="relative">
    //         <div className="bg-abbg bg-cover bg-center max-sm:h-[200px] h-[300px] opacity-50"></div>
    //         <div className="absolute inset-0 flex items-center justify-center">
    //           <div className="text-4xl md:text-7xl text-black mt-[80px] max-sm:mt-[70px] max-sm:text-5xl">
    //             About Us
    //           </div>
    //         </div>
    //       </div>
    //       <img src={about} className="ml-11 mt-11 w-[95%] rounded-2xl" />
    //       <h1 className="text-black font-semibold text-3xl ml-11 mt-5">
    //         About Us
    //       </h1>
    //       <div>
    //         <p className="mx-4 md:ml-11 text-black font-normal text-sm md:text-xl mt-3 ">
    //           At the heart of innovation, where technology meets craftsmanship,
    //           our company stands as a beacon of transformation and excellence.
    //           We are not merely cybersecurity experts we are pioneers committed
    //           to reshaping industry landscapes through digital fortification.
    //           Our services transcend mere protection—they are missions to
    //           safeguard the digital assets of businesses worldwide, propelling
    //           them towards their zenith.
    //         </p>
    //       </div>
    //       <h1 className="text-black font-semibold text-2xl md:text-4xl ml-4 md:ml-12 mt-5 mb-3">
    //         Why Choose Us{" "}
    //       </h1>
    //       <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-0">
    //         <div className="w-full lg:w-1/2 px-4 md:px-6">
    //           <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[380px] ml-6">
    //             {visionMissionValues.map((item) => (
    //               <div
    //                 key={item.id}
    //                 className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col items-center border-[#004AAD] border-[1px] hover:bg-[#004AAD] hover:text-white hover:border-white hover:border-[1px] w-[310px] h-[310px] hover:w-[320px] hover:h-[320px] transition-all 300"
    //               >
    //                 <div className="flex items-center mb-2">
    //                   <div className="mr-2">{item.logo}</div>
    //                   <h3 className="text-lg md:text-xl font-semibold text-center">
    //                     {item.title}
    //                   </h3>
    //                 </div>
    //                 <p className="text-center text-sm md:text-[17px]">
    //                   {item.desc}
    //                 </p>
    //               </div>
    //             ))}
    //           </div>
    //         </div>
    //       </div>

    //       {/* Counter Animation */}
    //       <div className="flex flex-row items-center justify-center py-4 gap-x-14 gap-y-4 lg:gap-24 flex-wrap max-md:grid max-md:grid-rows-2 bg-[#004bae] mt-3">
    //         <div className="flex flex-col items-center">
    //           <div className="flex flex-row">
    //             <CountUp
    //               delay={2}
    //               end={10}
    //               className="text-white text-3xl font-semibold"
    //               duration={2}
    //               enableScrollSpy={true}
    //               isScrollingDown={true}
    //             />
    //             <h4 className="text-3xl text-white font-semibold">+</h4>
    //           </div>

    //           <h4 className="font-semibold text-[30px] text-white ">Clients</h4>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <div className="flex flex-row">
    //             <CountUp
    //               delay={2}
    //               end={25}
    //               className="text-white text-3xl font-semibold"
    //               duration={2}
    //               enableScrollSpy={true}
    //               isScrollingDown={true}
    //             />
    //             <h4 className="text-3xl text-white font-semibold">+</h4>
    //           </div>

    //           <h4 className="font-semibold text-[30px] ml-3 text-white">
    //             Engagements
    //           </h4>
    //         </div>
    //         <div className="flex flex-col items-center">
    //           <div className="flex flex-row">
    //             <CountUp
    //               delay={2}
    //               end={5}
    //               className="text-white text-3xl font-semibold ml-4"
    //               duration={2}
    //               enableScrollSpy={true}
    //               isScrollingDown={true}
    //             />
    //             <h4 className="text-3xl text-white font-semibold">+</h4>
    //           </div>

    //           <h4 className="font-semibold text-[30px] ml-3 text-white">
    //             Team
    //           </h4>
    //         </div>
    //         <div className="flex flex-col items-center ">
    //           <div className="flex flex-row">
    //             <CountUp
    //               delay={2}
    //               end={50}
    //               className="text-white text-3xl font-semibold"
    //               duration={2}
    //               enableScrollSpy={true}
    //               isScrollingDown={true}
    //             />
    //             <h4 className="text-3xl text-white font-semibold">+</h4>
    //           </div>

    //           <h4 className="font-semibold text-[30px] ml-3 text-white">
    //             Assessment
    //           </h4>
    //         </div>
    //       </div>
    //       <div className="mt-[70px] flex flex-row">
    //         <div className=" flex flex-col">
    //           <h2 className="text-black font-semibold text-2xl ml-12">
    //             Why choose us
    //           </h2>
    //           <div>
    //             <h4 className="text-black font-bold text-3xl w-[500px] ml-12 mt-3">
    //               We Are The Best To Help You Secure Your Company's Security
    //             </h4>
    //             <p className="text-black font-normal text-10 ml-12 w-[500px] mt-3">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
    //               do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //               Ut enim ad minim veniam.
    //             </p>
    //             <div className="flex flex-row">
    //               <img
    //                 src={cybersec_engineer}
    //                 className="h-[200px] w-[280px] ml-12 rounded-lg mt-2"
    //               />
    //               <div className="flex flex-col">
    //                 <div className="flex flex-row">
    //                   <FaUser size={30} className="ml-3 mt-3" />
    //                   <div>
    //                     <h1 className="text-black font-bold mt-3 ml-3 text-xl">
    //                       Full Services
    //                     </h1>
    //                     <p className="ml-3 w-[150px]">
    //                       Lorem ipsum dolor sit amet, consectetur adipiscing
    //                       elit,
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="flex flex-row">
    //                   <FaUser size={30} className="ml-3 mt-3" />
    //                   <div>
    //                     <h1 className="text-black font-bold mt-3 ml-3 text-xl">
    //                       Full Services
    //                     </h1>
    //                     <p className="ml-3 w-[150px]">
    //                       Lorem ipsum dolor sit amet, consectetur adipiscing
    //                       elit,
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <img
    //           src={cybersec_tem}
    //           className="h-[500px] w-[400px] ml-[150px] rounded-lg"
    //         />
    //       </div>
    //       <div className="text-black mx-4 md:ml-10 text-2xl md:text-3xl font-semibold mt-5">
    //         Discover exceptional experiences through testimonials from our
    //         satisfied customers
    //       </div>
    //     </div>
    //     <div className="flex justify-center">
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-10">
    //         {sections.map((section) => (
    //           <div
    //             key={section.id}
    //             className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col items-center border-[#004AAD] border-[1px] hover:bg-[#004AAD] hover:text-white hover:border-white hover:border-[1px] w-[380px] h-[380px] "
    //           >
    //             <div className="flex flex-row">
    //               <div className="mr-2">{section.logo}</div>
    //               <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">
    //                 {section.title}
    //               </h3>
    //             </div>

    //             <p className="text-center text-sm md:text-[17px]">
    //               {section.desc}
    //             </p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //     {/* Our Team */}
    //     <Team />
    //     {/* Footer section */}
    //     <div className="flex flex-col md:flex-row">
    //       <div className="mt-10 md:mt-[100px] mx-4 md:ml-[140px]">
    //         <div className="flex flex-row items-center mb-4">
    //           <FaPhoneAlt color="#004AAD" className="mr-2" size={29} />
    //           <div className="flex flex-col">
    //             <h5 className="text-black">+91 6306867803</h5>
    //           </div>
    //         </div>
    //         <div className="flex flex-row items-center mb-4">
    //           <MdOutlineEmail color="#004AAD" className="mr-2" size={40} />
    //           <div className="flex flex-col">
    //             <h5 className="text-black">hello@armourIQ.com</h5>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="mx-4 md:ml-[100px] mb-8">
    //         <div className="flex flex-col text-white">
    //           <input
    //             type="text"
    //             placeholder="Your name"
    //             className="w-full p-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] my-3"
    //             value={name}
    //             onChange={(e) => setName(e.target.value)}
    //           />
    //           <div className="flex flex-row w-full gap-2">
    //             <input
    //               type="text"
    //               placeholder="Your Phone Number"
    //               className="p-3 w-[60%] h-[40px] text-white border-[#004bae] border-[1px] bg-[#000000]"
    //               value={number}
    //               onChange={(e) => setNumber(e.target.value)}
    //             />
    //             <input
    //               type="email"
    //               placeholder="Your Mail"
    //               className="text-white h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#000000]"
    //               value={email}
    //               onChange={(e) => setEmail(e.target.value)}
    //             />
    //           </div>
    //           <input
    //             type="text"
    //             placeholder="Subject"
    //             className="w-full pl-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] my-3"
    //             value={subject}
    //             onChange={(e) => setSubject(e.target.value)}
    //           />
    //           <textarea
    //             type="text"
    //             placeholder="Your Message"
    //             className="w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#000000] my-3"
    //             value={message}
    //             onChange={(e) => setMessage(e.target.value)}
    //           />
    //           <button
    //             className="bg-[#004bae] p-3 font-bold w-full"
    //             onClick={handleSubmit}
    //           >
    //             SEND MAIL
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <Footer />
    //   </div>
    // </div>
    <div>
      <div className="flex flex-col bg-white mt-3">
        <div>
          <div className="relative">
            <div className="bg-abbg bg-cover bg-center max-sm:h-[200px] h-[300px] opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl md:text-7xl text-black mt-[80px] max-sm:mt-[70px] max-sm:text-5xl">
                About Us
              </div>
            </div>
          </div>
          <img
            src={about}
            className="ml-4 md:ml-11 mt-11 w-[95%] rounded-2xl"
          />
          <h1 className="text-black font-semibold text-3xl ml-4 md:ml-11 mt-5">
            About Us
          </h1>
          <div>
            <p className="mx-4 md:ml-11 text-black font-normal text-sm md:text-xl mt-3">
              At the heart of innovation, where technology meets craftsmanship,
              our company stands as a beacon of transformation and excellence.
              We are not merely cybersecurity experts we are pioneers committed
              to reshaping industry landscapes through digital fortification.
              Our services transcend mere protection—they are missions to
              safeguard the digital assets of businesses worldwide, propelling
              them towards their zenith.
            </p>
          </div>
          <h1 className="text-black font-semibold text-2xl md:text-4xl ml-4 md:ml-12 mt-5 mb-3">
            Why Choose Us{" "}
          </h1>
          <div className="flex flex-col lg:flex-row items-center mt-10 lg:mt-0">
            <div className="w-full lg:w-1/2 px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[380px] ml-6 md:ml-0">
                {visionMissionValues.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col items-center border-[#004AAD] border-[1px] hover:bg-[#004AAD] hover:text-white hover:border-white hover:border-[1px] w-[310px] h-[310px] hover:w-[320px] hover:h-[320px] transition-all duration-300"
                  >
                    <div className="flex items-center mb-2">
                      <div className="mr-2">{item.logo}</div>
                      <h3 className="text-lg md:text-xl font-semibold text-center">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-center text-sm md:text-[17px]">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Counter Animation */}
          <div className="flex flex-row items-center justify-center py-4 gap-x-14 gap-y-4 lg:gap-24 flex-wrap max-md:grid max-md:grid-rows-2 bg-[#004bae] mt-3">
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={10}
                  className="text-white text-3xl font-semibold"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] text-white">Clients</h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={25}
                  className="text-white text-3xl font-semibold"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] ml-3 text-white">
                Engagements
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={5}
                  className="text-white text-3xl font-semibold ml-4"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] ml-3 text-white">
                Team
              </h4>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex flex-row">
                <CountUp
                  delay={2}
                  end={50}
                  className="text-white text-3xl font-semibold"
                  duration={2}
                  enableScrollSpy={true}
                  isScrollingDown={true}
                />
                <h4 className="text-3xl text-white font-semibold">+</h4>
              </div>

              <h4 className="font-semibold text-[30px] ml-3 text-white">
                Assessment
              </h4>
            </div>
          </div>
          <div className="mt-[70px] flex flex-col lg:flex-row">
            <div className="flex flex-col">
              <h2 className="text-black font-semibold text-2xl ml-4 md:ml-12">
                Why choose us
              </h2>
              <div>
                <h4 className="text-black font-bold text-3xl w-[90%] lg:w-[500px] ml-4 md:ml-12 mt-3">
                  We Are The Best To Help You Secure Your Company's Security
                </h4>
                <p className="text-black font-normal text-sm md:text-lg lg:text-xl w-[90%] lg:w-[500px] ml-4 md:ml-12 mt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
                <div className="flex flex-col md:flex-row">
                  <img
                    src={cybersec_engineer}
                    className="h-[200px] w-[90%] md:w-[280px] ml-4 md:ml-12 rounded-lg mt-2"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <FaUser size={30} className="ml-3 mt-3" />
                      <div>
                        <h1 className="text-black font-bold mt-3 ml-3 text-xl">
                          Full Services
                        </h1>
                        <p className="ml-3 w-[150px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <FaUser size={30} className="ml-3 mt-3" />
                      <div>
                        <h1 className="text-black font-bold mt-3 ml-3 text-xl">
                          Full Services
                        </h1>
                        <p className="ml-3 w-[150px]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={cybersec_tem}
              className="h-[500px] w-[90%] md:w-[400px] ml-4 lg:ml-[150px] rounded-lg mt-4 md:mt-0"
            />
          </div>
          <div className="text-black mx-4 md:ml-10 text-2xl md:text-3xl font-semibold mt-5">
            Discover exceptional experiences through testimonials from our
            satisfied customers
          </div>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-10">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col items-center border-[#004AAD] border-[1px] hover:bg-[#004AAD] hover:text-white hover:border-white hover:border-[1px] w-[380px] h-[380px] hover:w-[400px] hover:h-[400px] transition-all duration-300"
              >
                <div className="flex flex-row">
                  <div className="mr-2">{section.logo}</div>
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-center">
                    {section.title}
                  </h3>
                </div>
                <p className="text-center text-sm md:text-[17px]">
                  {section.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <Team />
        <div className="flex flex-col md:flex-row">
          <div className="mt-10 md:mt-[100px] mx-4 md:ml-[140px]">
            <div className="flex flex-row items-center mb-4">
              <FaPhoneAlt color="#004AAD" className="mr-2" size={29} />
              <div className="flex flex-col">
                <h5 className="text-black font-semibold">+91 6306867803</h5>
              </div>
            </div>
            <div className="flex flex-row items-center mb-4">
              <MdOutlineEmail color="#004AAD" className="mr-2" size={40} />
              <div className="flex flex-col">
                <h5 className="text-black font-semibold">hello@armourIQ.com</h5>
              </div>
            </div>
          </div>
          <div className="mx-4 md:ml-[100px] mb-8">
            <div className="flex flex-col text-white">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] my-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex flex-row w-full gap-2">
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="p-3 w-[60%] h-[40px] text-white border-[#004bae] border-[1px] bg-[#000000]"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Mail"
                  className="text-white h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#000000]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full pl-3 h-[40px] border-[#004bae] border-[1px] bg-[#000000] my-3"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                type="text"
                placeholder="Your Message"
                className="w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#000000] my-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-[#004bae] p-3 font-bold w-full"
                onClick={handleSubmit}
              >
                SEND MAIL
              </button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default AboutUs;
