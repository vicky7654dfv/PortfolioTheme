import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import HomePage1 from "./pages/HomePage1/HomePage1";
import Error from "./pages/Error/Error";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import HomePage2 from "./pages/HomePage2/HomePage2";
import Loader from "./components/Loader/Loader";
import { useLoading } from "./components/LoadingContext/LoadingContext";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import Resume from "./pages/Resume/Resume";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function RouterContainer() {
  const location = useLocation();
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 600); // loader duration

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <>
      {loading && <Loader />}

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/About" element={<About />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/DashBoard" element={<Dashboard />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/HomePage2" element={<HomePage2 />} />
      </Routes>
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <BrowserRouter>
        <RouterContainer />
    </BrowserRouter>
  );
}

export default App;
