import React from "react";
import img from "/assets/ServiceBg.jpg";
import { services } from "../../data/services.js";
import { FaCheck } from "react-icons/fa";
import Footer from "./../Footer.jsx";
import { useParams } from "react-router-dom";
import Contact from "./Contact/ContactD.jsx";

function Service(props) {
  const { param } = useParams();

  return (
    <div className="bg-black overflow-x-hidden">
      <div className="relative">
        {/* <img src={img} className="topic-bg" /> */}
        <div className="topic-bg"></div>
        <div className="topic">{services[param].topic}</div>
      </div>
      <div className="content bg-white">
        <div className="intro">
          <div className="img-div">
            <img
              src={`../assets${services[param].image}`}
              className="image-in-service"
            />
          </div>
          <div className="intro-left">
            <div className="heading">
              {services[param].heading1} <br className="hidden sm:block" />{" "}
              {services[param].heading2}
            </div>
            <p className="intro-content">{services[param].content}</p>
          </div>
        </div>
        <div className="from-approach">
          <div className="approach-head">{services[param].approaches.head}</div>
          <ul className="approach-list">
            {services[param].approaches.data?.map((item, index) => (
              <li
                className="text-lg border-black border-[1px] rounded-lg hover:bg-black group hover:scale-105 transition-all 500 cursor-pointer"
                key={index}
              >
                <div className="list-content">
                  <div className="text-black font-semibold text-lg sm:text-3xl mb-2 group-hover:text-white">
                    {item.approachHead}
                  </div>
                  <div className="text-black group-hover:text-white">
                    {item.content}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* {services[param].benefits && (
            <div className="benefits-content bg-white">
              <h1 className="key-benefit text-black text-3xl font-bold ml-8 mt-8 max-sm:ml-2 mmax-sm:mb-2">
                {services[param].benefits.head}
              </h1>
              <ul className="benefits-list">
                {services[param].benefits.data.map((item, index) => (
                  <li
                    className="text-base sm:text-lg mb-4 ml-8 max-sm:ml-2 text-black max-sm:mt-3"
                    key={index}
                  >
                    <span className="font-semibold">{item.title}</span> -{" "}
                    {item.explain}
                  </li>
                ))}
              </ul>
            </div>
          )} */}
          {services[param].benefits && (
            <div className="benefits-container bg-white p-6 border rounded-lg shadow-sm">
              <h1 className="key-benefit text-black text-3xl font-bold ml-8 mt-8 max-sm:ml-2 max-sm:mb-2">
                {services[param].benefits.head}
              </h1>
              <ul className="benefits-list">
                {services[param].benefits.data.map((item, index) => (
                  <li
                    className="benefits-item text-base sm:text-lg mb-4 max-sm:ml-2 text-black max-sm:mt-3 flex items-start"
                    key={index}
                  >
                    <FaCheck className="mr-2 mt-3 text-[#004AAD]" />
                    <div className="benefits-text">
                      <span className="font-semibold">{item.title}</span> -{" "}
                      {item.explain}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex flex-col bg-white">
            {services[param].extra &&
              services[param].extra.map((item, index) => (
                <div key={index}>
                  <h1 className="extra-content mt-12">{item.head}</h1>
                  <p className="extra-con-para">{item.content}</p>
                </div>
              ))}
          </div>
          <div className="contact-in-services flex flex-col ">
            <div className="lg:w-[60%]">
              <p className="extra-con-para">{services[param].getInTouch}</p>
            </div>
          </div>
          <div className="flex flex-row mt-10 lg:px-1 ml-7 max-sm:ml-1">
            <div>
              <button className="bg-black text-white w-[105px] text-center rounded-sm p-1">
                Get Started
              </button>
              <p className="mt-2 md:w-full w-full">
                {services[param].getStarted}
              </p>
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Service;
