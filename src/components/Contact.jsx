import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneVolume } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'service_wcm3o3j';
    const templateID = 'template_93tgdo8';
    const publicKey = 'DuSbBCyG3R1hNDXzG';

    const templateParams = {
      from_name: name,
      from_email: email,
      from_message: message,
      from_subject: subject,
      from_number: number,
      to_name: 'Sanket',
      message: message,
    };

    emailjs.send(serviceId, templateID, templateParams, publicKey)
      .then((response) => {
        alert('Message sent successfully!');
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
        setNumber('');
      })
      .catch((err) => {
        alert('Could not send the message!');
        console.log('Error sending the mail!', err);
      });
  };

  return (
    <div className="flex bg-[#000000] justify-center" id="contact">
      <div className="flex flex-row py-6 max-lg:px-6 max-lg:gap-8 max-md:flex-col">
        <div className="lg:ml-[50px]">
          <h3 className="ml-3 mb-1 text-[#004bae] font-bold">CONTACT US</h3>
          <h2 className="ml-3 mt-1 text-white text-3xl font-bold">
            Contact Information
          </h2>
          <div className="flex flex-row">
            <CiLocationOn color="#004bae" className="ml-3 mt-4" size={40} />
            <div className="flex flex-col">
              <h5 className="text-white ml-3 mt-5">
                Saket Salcon, Rasvilas, Saket District
                <br />
                Centre, Sector 6, Pushp Vihar,
                <br />
                New Delhi, India - 110017
              </h5>
            </div>
          </div>
          <div className="flex flex-row">
            <FaPhoneVolume color="#004bae" className="ml-4 mt-5" size={28} />
            <div className="flex flex-col">
              <h5 className="text-white ml-5 mt-5">+1 469 296 9672</h5>
            </div>
          </div>
          <div className="flex flex-row">
            <MdOutlineEmail color="#004bae" className="ml-3 mt-4" size={40} />
            <div className="flex flex-col">
              <h5 className="text-white ml-3 mt-5">hello@armour.com</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-white lg:ml-[130px]">
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
              className="p-3 w-[80%] text-white border-[#004bae] border-[1px] bg-[#000000]"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Mail"
              className="text-white w-[50%] p-3 border-[#004bae] border-[1px] bg-[#000000]"
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
  );
};

export default Contact;
