import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar'; 
import Home from './Home'; // Home wrapper
import About from './About'; // About page
import ServiceCatalog from './ServiceCatalog';
import Contact from "./Contact";
import Footer from './Footer'; // Footer component
import Blog from './Blog'; // Import Blog component
import Admin from './Admin';
import BlogPost from './BlogPost';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar /> {/* Include the Navbar component */}
        <div className="flex-grow"> {/* Ensure content takes the available height */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page */}
            <Route path="/about" element={<About />} /> {/* About page */}
            <Route path="/services" element={<ServiceCatalog />} /> {/* Services page */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} /> {/* Add this line */}
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
}

export default App;
