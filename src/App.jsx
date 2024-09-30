import About from "./components/AboutUs";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallary";
import Header from "./components/Header/Heading" ;
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Schedule from "./components/Sechedule";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Router>
<Navbar/>
      <Routes>
        <Route path="/" element={
              <Body />


        } />

        <Route path="/about" element={<About />} />

        {/* Schedule page route */}
        <Route path="/schedule" element={<Schedule />} />

        {/* Gallery page route */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Contact page route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer will always be shown on all pages */}
      <Footer />
    </Router>
  );
}
