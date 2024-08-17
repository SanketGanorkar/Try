import Footer from "./Footer.jsx";
import Trial from "./Trial.jsx";
import Trusted from "./Trusted.jsx";
import Testimonials from "./Testimonials.jsx";
import Intro from "./Intro.jsx";
import Blog from "./Blog.jsx";

const LandingPage = () => {
  return (
    <>
      <div id="home">
        <Intro />
        <Trusted />
        <Trial />
        <Blog />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
