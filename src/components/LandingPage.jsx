import Footer from "./Footer.jsx";
import Trial from "./Trial.jsx";
import Trusted from "./Trusted.jsx";
import Testimonials from "./Testimonials.jsx";
import Team from "./Team.jsx";
import Intro from "./Intro.jsx";
import Blog from "./Blog.jsx";

const LandingPage = () => {
  return (
    <>
      <div id="home">
        <Intro />
        <Trusted />
        <Trial />
        <Team />
        <Blog />
        <Testimonials />
        <Footer />
      </div>
    </>
  );
};

export default LandingPage;
