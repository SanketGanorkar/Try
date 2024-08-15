import { MdOutlineEmail } from "react-icons/md";
import newbg from "../../public/assets/newbg.jpeg";
import about from "../../public/assets/about_intro.jpeg";
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
// import about from "../../public/assets/about.jpg";
import img from "/assets/ServiceBg.jpg";
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
      desc: "At ArmourIQ, we prioritize securing businesses' futures through comprehensive cybersecurity solutions. Our approach integrates cybersecurity strategically to enhance operational resilience and protect against evolving threats.",
    },
    {
      id: 5,
      logo: <FaTrophy size={35} />,
      title: "Commitment to Innovation",
      desc: "Innovation is central to ArmourIQ's service ethos. With a focus on finance, healthcare, and technology sectors, our team leads in cybersecurity advancements. We continually refine methodologies for proactive risk management tailored to sector-specific challenges.",
    },
    {
      id: 6,
      logo: <BsBullseye size={35} />,
      title: "Our Expertise",
      desc: "ArmourIQ excels in conducting detailed assessments of technical risks and operational processes. Our Cyber Maturity Assessment benchmarks cybersecurity against industry standards, including customized Cloud Assessments for Azure, Office 365, and AWS environments.",
    },
    {
      id: 7,
      logo: <GrShieldSecurity size={35} />,
      title: "Security & Quality Assurance",
      desc: "ArmourIQ simplifies regulatory compliance with HIPAA, PCI DSS, GDPR, and other standards through Regulatory Compliance Assistance. We empower teams with Security Awareness Training and conduct Social Engineering Tests. Our vCISO services align cybersecurity strategies with business objectives, ensuring rapid and effective Incident Response Procedures.",
    },
    {
      id: 8,
      logo: <GrIntegration size={35} />,
      title: "Seamless Integration",
      desc: "ArmourIQ seamlessly integrates robust security measures into existing infrastructures. Our continuous monitoring and personalized recommendations strengthen defenses against emerging threats, including Threat Detection, Vulnerability Scanning, and Firewall Rule Reviews.",
    },
    {
      id: 9,
      logo: <IoShieldCheckmarkSharp size={35} />,
      title: "A Call to Innovate",
      desc: "Partner with ArmourIQ to enhance your cybersecurity posture. Explore tailored solutions designed to safeguard your organization and foster innovation and vigilance in today's digital landscape. Rely on our expertise for a secure and prosperous future.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col bg-white mt-3">
        <div>
          <div className="relative">
            {/* <div className="bg-black max-sm:h-[200px] h-[300px] opacity-15"></div> */}
            {/* <img src={img} className="max-sm:h-[200px] h-[300px] w-full" /> */}
            <div className=" bg-[#004AAD] opacity-85 h-[310px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-4xl md:text-[60px] text-white font-semibold mt-[80px] max-sm:mt-[70px] max-sm:text-5xl">
                About Us
              </div>
            </div>
          </div>
          <img
            src={about}
            className="ml-4 md:ml-[90px] mt-11 w-[85%] rounded-2xl"
          />
          <h1 className="text-black font-semibold text-3xl ml-4 md:ml-[65px] mt-[70px] max-sm:ml-[120px]">
            About Us
          </h1>
          <div>
            <p className="mx-4 md:ml-[65px] text-black font-normal text-sm md:text-xl mt-3 md:w-[90%] max-sm:ml-9">
              At the heart of innovation, where technology meets craftsmanship,
              our company stands as a beacon of transformation and excellence.
              We are not merely cybersecurity experts we are pioneers committed
              to reshaping industry landscapes through digital fortification.
              Our services transcend mere protection—they are missions to
              safeguard the digital assets of businesses worldwide, propelling
              them towards their zenith.
            </p>
          </div>
          {/* <h1 className="text-black font-semibold text-3xl md:text-3xl ml-4 md:ml-[65px] mt-[55px] mb-3 max-sm:ml-[90px]">
            Why Choose Us
          </h1> */}
          <div className="flex flex-col lg:flex-row items-center mt-6 md:ml-[47px] lg:mt-10 ">
            <div className="w-full lg:w-1/2 px-4 md:px-6">
              <div className="grid grid-cols-1 md:grid-cols-3 md:gap-[400px] ml-10 md:ml-0 max-sm:gap-y-2 max-sm:ml-5">
                {visionMissionValues.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col items-center border-[#004AAD] border-[1px] hover:bg-[#004AAD] hover:text-white hover:border-white hover:border-[1px] w-[310px] h-[310px] hover:w-[320px] hover:h-[320px] transition-all duration-300 md:mt-3"
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
          <div className="flex flex-row items-center justify-center py-4 gap-x-14 gap-y-4 lg:gap-24 flex-wrap max-md:grid max-md:grid-rows-2 bg-[#004bae] mt-[70px]">
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
              <h2 className="text-black font-semibold text-2xl ml-4 md:ml-[65px] md:mt-8">
                Why choose us
              </h2>
              <div>
                <h4 className="text-black font-bold text-3xl w-[90%] lg:w-[500px] ml-4 md:ml-[65px] mt-3">
                  Your Trusted Partner in Cybersecurity
                </h4>
                <p className="text-black font-normal text-sm md:text-lg lg:text-xl w-[90%] lg:w-[500px] ml-4 md:ml-[65px] mt-3">
                  With our cutting-edge solutions and expert team, we ensure
                  that your company is safeguarded against the latest cyber
                  threats. Our commitment to excellence and customer
                  satisfaction sets us apart as leaders in the cybersecurity
                  industry.
                </p>
                <div className="flex flex-col md:flex-row">
                  <img
                    src={cybersec_engineer}
                    className="h-[200px] w-[90%] md:w-[280px] ml-4 md:ml-[65px] rounded-lg mt-2"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <FaUser size={30} className="ml-3 mt-3" />
                      <div>
                        <h1 className="text-black font-bold mt-3 ml-3 text-xl">
                          Comprehensive Solutions
                        </h1>
                        <p className="ml-3 w-[150px]">
                          Full-spectrum protection, from threat detection to
                          response.
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-row">
                      <FaUser size={30} className="ml-3 mt-3" />
                      <div>
                        <h1 className="text-black font-bold mt-3 ml-3 text-xl">
                          Experienced Team
                        </h1>
                        <p className="ml-3 w-[150px]">
                          Experienced experts safeguarding your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src={cybersec_tem}
              className="h-[500px] w-[90%] md:w-[400px] ml-4 lg:ml-[150px] rounded-lg mt-4 md:mt-8"
            />
          </div>

          <div className="text-black mx-4 md:ml-[65px] text-2xl md:text-3xl font-semibold mt-[65px]">
            Discover exceptional experiences through testimonials from our
            satisfied customers
          </div>
        </div>
        <div className="flex justify-center md:ml-[25px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 p-4 md:p-10">
            {sections.map((section) => (
              <div
                key={section.id}
                className="bg-[#F6F5F5] text-black p-6 rounded-lg flex flex-col items-center border-[#004AAD] border-[1px] hover:bg-[#004AAD] hover:text-white hover:border-white hover:border-[1px] w-[360px] h-[290px] hover:w-[370px] hover:h-[300px] transition-all duration-300"
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
        <div className="flex flex-col md:flex-row justify-center mt-[70px] max-sm:mt-[70px] ">
          <div className="flex flex-col max-sm:ml-[67px] ">
            <h1 className="text-black font-semibold md:ml-12 text-[18px] whitespace-nowrap">
              Secure Your Business with Armour IQ
            </h1>
            <h2 className="text-black font-semibold md:ml-12 text-[18px]">
              Have questions or need help?{" "}
            </h2>
            <h2 className="text-black font-semibold md:ml-12 text-[18px]">
              Our experts are here for you.
            </h2>
          </div>
          <div className="max-md:mt-10 mx-4 md:ml-[90px] max-sm:mt-2">
            <div className="flex flex-col items-center md:items-start mb-4">
              <h3 className="text-black font-bold max-sm:mt-3">
                Contact Us to
              </h3>
              <ul className="list-disc list-inside mt-2">
                <li className="whitespace-nowrap">
                  Discover tailored security solutions
                </li>
                <li className="whitespace-nowrap">
                  Get a free security assessment
                </li>
                <li className="whitespace-nowrap">Receive prompt support</li>
              </ul>
              <div className="flex flex-col max-sm:mt-5 mt-4">
                <div className="flex flex-row items-center mb-0">
                  <FaPhoneAlt color="#004AAD" className="mr-2" size={17} />
                  <h5 className="text-black font-semibold ml-1 mb-4 mt-1 text-[17px]">
                    +91 6306867803
                  </h5>
                </div>
                <div className="flex flex-row items-center mb-2">
                  <MdOutlineEmail color="#004AAD" className="mr-2" size={22} />
                  <h5 className="text-black font-semibold ml-1">
                    hello@armourIQ.com
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-9 md:ml-[100px] mb-8">
            <div className="flex flex-col text-black">
              <input
                type="text"
                placeholder="Your name"
                className="w-full p-3 h-[40px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="flex flex-row w-full gap-2">
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="p-3 w-[60%] h-[40px] border-[#004bae] border-[1px] bg-[#F6F5F5]"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="Your Mail"
                  className="h-[40px] w-[80%] p-3 border-[#004bae] border-[1px] bg-[#F6F5F5]"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <textarea
                type="text"
                placeholder="Your Message"
                className="w-full pl-2 pt-2 h-[100px] border-[#004bae] border-[1px] bg-[#F6F5F5] my-3"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                className="bg-[#004bae] p-3 font-bold w-full text-white"
                onClick={handleSubmit}
              >
                SEND MAIL
              </button>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
