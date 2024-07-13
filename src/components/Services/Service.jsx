import React from 'react'
import img from "/assets/ServiceBg.jpg";
import {services} from "../../data/services.js"
import Footer from "./../Footer.jsx";
import { useParams } from 'react-router-dom';

function Service(props) {
    const { param } = useParams();

    return ( 
        <div className="bg-[#262626]">
            <div className="relative">
                <img
                    src={img}
                    className="topic-bg"
                    alt="Service Image"
                />
                <div className="topic">
                    {services[param].topic}
                </div>
            </div>
            <div className="content bg-[#262626]">
                <div className="intro">
                    <div className="img-div">
                        <img
                            src={`../assets${services[param].image}`}
                            className="image-in-service"
                        />
                    </div>
                    <div className="intro-left">
                        <div className="heading">
                            {services[param].heading1} <br className="hidden sm:block" /> {services[param].heading2}
                        </div>
                        <p className="intro-content">
                            {services[param].content}
                        </p>
                    </div>
                </div>
                <div className="from-approach">
                    <div className="approach-head">
                        {services[param].approaches.head}
                    </div>
                    <ul className="approach-list">
                        {
                            services[param].approaches.data?.map((item, index) => (
                                <li className="text-lg" key={index}>
                                    <div className="list-content ">
                                        <div className="text-white font-semibold text-lg sm:text-3xl mb-2 ">
                                            {item.approachHead}
                                        </div>
                                        <div className="text-white">
                                            {item.content}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {services[param].benefits && 
                        <div className="benefits-content bg-[#262626]">
                            <h1 className="key-benefit text-white text-3xl font-bold ml-8 mt-8 max-sm:ml-2 mmax-sm:mb-2">
                                {services[param].benefits.head}
                            </h1>
                            <ul className="benefits-list">
                                {
                                    services[param].benefits.data.map((item, index) => (
                                        <li className="text-base sm:text-lg mb-4 ml-8 max-sm:ml-2 text-white max-sm:mt-3" key={index}>
                                            <span className="font-semibold">
                                                {item.title}
                                            </span>{" "}
                                            - {item.explain}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                    <div className="flex flex-col bg-[#262626]">
                        {
                            services[param].extra && 
                            services[param].extra.map((item, index) => (
                                <div key={index}>
                                    <h1 className="extra-content mt-12">
                                        {item.head}
                                    </h1>
                                    <p className="extra-con-para">
                                        {item.content}
                                    </p>
                                </div>
                            )) 
                        }
                    </div>
                    <div className="contact-in-services flex flex-col ">
                        <div className='lg:w-[60%]'>
                            {/* <button className="get-in-touch">
                                Get in Touch
                            </button> */}
                            <p className="extra-con-para">
                                {services[param].getInTouch}
                            </p>
                        </div>
                        {/* <ContactD /> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Service
