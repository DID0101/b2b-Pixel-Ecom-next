// components/Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">B2B Pixel</h2>
            <p className="text-gray-400 mt-2">Your partner in digital growth.</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start mb-6 md:mb-0">
            <a href="#about" className="text-gray-400 hover:text-white mx-3">
              About
            </a>
            <a href="#services" className="text-gray-400 hover:text-white mx-3">
              Services
            </a>
            <a href="#blog" className="text-gray-400 hover:text-white mx-3">
            Case Studies
            </a>
            
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-end">
            <a href="#" className="text-gray-400 hover:text-white mx-2">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/b2bpixel" className="text-gray-400 hover:text-white mx-2">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/b2bpixel/" className="text-gray-400 hover:text-white mx-2">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/b2bpixel/" className="text-gray-400 hover:text-white mx-2">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} B2B Pixel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
