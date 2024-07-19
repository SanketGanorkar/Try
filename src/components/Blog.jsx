import blog1 from "/assets/Blog1.jpg";
import blog2 from "/assets/Blog2.jpg";
import blog3 from "/assets/Blog3.jpg";
import blog4 from "/assets/Blog4.jpg";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const arr = [
    {
      id: 1,
      img: blog1,
      title:
        "Defending Against Phishing: Strategies to Protect Your Organization",
      date: "July 13 2022",
      comments: "0",
      path: "/blog1",
      desc: "Cyber threats are constantly evolving, and staying informed is crucial. Here are the top 5 cybersecurity threats.",
    },
    {
      id: 2,
      img: blog2,
      title:
        "How to Conduct an Effective Tabletop Exercise for Cybersecurity Preparedness",
      date: "August 21 2022",
      comments: "5",
      path: "/blog2",
      desc: "AI is evolving rapidly with new trends emerging every year. Stay updated with the latest developments in AI technology.",
    },
    {
      id: 3,
      img: blog3,
      title:
        "Unveiling the Importance of Technical Risk Assessment in Cybersecurity",
      date: "September 10 2022",
      comments: "2",
      path: "/blog3",
      desc: "Blockchain technology is set to revolutionize various industries. Learn about its future prospects and potential.",
    },
    // {
    //   id: 4,
    //   img: blog4,
    //   title:
    //     "Unlocking the Potential of Your Cybersecurity Maturity Assessment",
    //   date: "September 10 2022",
    //   comments: "2",
    //   path: "/blog4",
    //   desc: "Blockchain technology is set to revolutionize various industries. Learn about its future prospects and potential.",
    // },
    // {
    //   id: 5,
    //   img: blog4,
    //   title:
    //     "Unlocking the Potential of Your Cybersecurity Maturity Assessment",
    //   date: "September 10 2022",
    //   comments: "2",
    //   path: "/blog4",
    //   desc: "Blockchain technology is set to revolutionize various industries. Learn about its future prospects and potential.",
    // },
    // {
    //   id: 6,
    //   img: blog4,
    //   title:
    //     "Unlocking the Potential of Your Cybersecurity Maturity Assessment",
    //   date: "September 10 2022",
    //   comments: "2",
    //   path: "/blog4",
    //   desc: "Blockchain technology is set to revolutionize various industries. Learn about its future prospects and potential.",
    // },
  ];

  return (
    <div
      className="bg-white flex flex-col items-center sm:pt-[70px]"
      id="blog"
    >
      <h4 className="text-[#004AAD] font-bold mt-[65px] text-nowrap">
        BLOG & NEWS
      </h4>
      <h2 className="text-black font-bold text-3xl">Latest News</h2>
      <p className="text-black mt-3 text-center">
        Stay updated with the latest cybersecurity trends, news, and expert
        insights to keep your business secure.
      </p>
      <div className="flex flex-wrap justify-center">
        <Slider {...settings}>
          {arr.map((item) => (
            <div
              key={item.id}
              className="border-[#004bae] border-[1px] my-4 mx-2 w-[320px]"
            >
              <Link to={item.path}>
                <img
                  src={item.img}
                  className="w-[320px] h-[200px] hover:scale-110 transition-transform duration-300"
                />
              </Link>
              <Link to={item.path}>
                <h2 className="ml-2 mt-2 text-black text-xl font-bold">
                  {item.title}
                </h2>
              </Link>

              <div className="flex flex-row items-center ml-2 mt-2 text-black">
                <div>{item.date}</div>
                <div className="flex flex-row items-center ml-auto">
                  <FaRegCommentAlt className="mr-2 mt-1" />
                  <div className="mr-4 ">{item.comments}</div>
                </div>
              </div>
              <p className="ml-2 text-black mt-2">{item.desc}</p>
              <Link to={item.path}>
                <h2 className="ml-2 mt-3 mb-2 text-black font-bold cursor-pointer hover:text-[#004AAD]">
                  READ MORE
                </h2>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Blog;
