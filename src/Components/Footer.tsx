import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Logo & About */}
        <div>
          <img
            src="https://takalkarclasses.com/wp-content/uploads/2023/04/Fotter-Logo-1.png"
            alt="Takalkar Eduhub"
            className="w-36"
          />
          <p className="mt-4 text-gray-400 text-sm leading-relaxed">
            Takalkar Eduhub Pvt. Ltd. with a directorial experience of **70+ years** has evolved tremendously, 
            both in scale and the quality of education.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Courses</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Courses</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">SSC</a></li>
            <li><a href="#" className="hover:text-white">CBSE</a></li>
            <li><a href="#" className="hover:text-white">ICSE</a></li>
            <li><a href="#" className="hover:text-white">HSC</a></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Policies</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Terms & Services</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Accessibility</a></li>
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Feedback</a></li>
          </ul>
        </div>

        {/* Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Subscribe to our Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg focus:outline-none text-black"
            />
            <button className="bg-purple-600 px-4 py-2 rounded-r-lg text-white hover:bg-purple-700">
              Subscribe
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Takalkar Eduhub Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
