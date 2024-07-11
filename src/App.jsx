import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Services from "./components/Services.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Blog1 from "./components/Blog/Blog1.jsx";
import Blog2 from "./components/Blog/Blog2.jsx";
import Blog3 from "./components/Blog/Blog3.jsx";
import Blog4 from "./components/Blog/Blog4.jsx";
import Scroll from "./components/Scroll.jsx";
import Policy from "./components/Policy.jsx";
import Terms from "./components/Terms.jsx";
import Service from "./components/Services/Service.jsx";
function App() {
  return (
    <>
      <BrowserRouter basename="/ArmourIQ">
        <Scroll />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/about" element={<AboutUs />} />
          <Route exact path="/services/:param" element={<Service />} />
          <Route exact path="/terms-and-conditions" element={<Terms />} />
          <Route exact path="/privacy-policy" element={<Policy />} />
          <Route exact path="/blog1" element={<Blog1 />} />
          <Route exact path="/blog2" element={<Blog2 />} />
          <Route exact path="/blog3" element={<Blog3 />} />
          <Route exact path="/blog4" element={<Blog4 />} />
        </Routes>
        {/* <Terms/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
