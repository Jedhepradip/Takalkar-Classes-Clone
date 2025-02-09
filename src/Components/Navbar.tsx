import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="bg-purple-950 text-gray-300 justify-between items-center p-2 shadow-md fixe w-full sticky top-0 left-0 z-50 flex ">
                {/* Email & Phone */}
                <p className="text-sm">📧 learn@takalkarclasses.com</p>
                <p className="text-sm">📞 +91 98810 98308</p>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-2 text-2xl overflow-hidden">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition bg-white text-gray-500 rounded-full">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="">
                        <FaTwitter />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="">
                        <FaLinkedin />
                    </a>
                </div>
            </div>


            <nav className="bg-white shadow-md fixe w-full sticky top-0 left-0 z-50">
                <div className="w-full px-6 max-w-7xl mx-auto py-3 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold text-purple-600 flex items-center">
                        <img
                            src="https://takalkarclasses.com/wp-content/uploads/2023/04/new-1.png"
                            alt="Logo"
                            className="h-10"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to="/" className="text-gray-700 hover:text-purple-600 transition duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="text-gray-700 hover:text-purple-600 transition duration-300">
                            About
                        </Link>
                        <Link to="/courses" className="text-gray-700 hover:text-purple-600 transition duration-300">
                            Courses
                        </Link>
                        <Link to="/admission" className="text-gray-700 hover:text-purple-600 transition duration-300">
                            Admission
                        </Link>
                        <Link to="/gallery" className="text-gray-700 hover:text-purple-600 transition duration-300">
                            Gallery
                        </Link>
                        <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition duration-300">
                            Contact
                        </Link>
                    </div>


                    {/* Enquire Now Button */}
                    <Link to="/enquire-now">
                        <button className="hidden md:block md:px-4 md:py-2 bg-red-600 text-white rounded-sm shadow-md hover:bg-red-700 transition">
                            Enquire Now
                        </button>
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-700 text-2xl"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Menu with Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-black/50 z-10" onClick={() => setIsOpen(false)}>
                        <div
                            className="absolute top-16 left-0 w-full bg-white shadow-md py-4 space-y-4"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
                        >
                        

                            <Link to="/" className="block text-center text-gray-700 py-2 hover:text-purple-600" onClick={() => setIsOpen(false)}>
                                Home
                            </Link>
                            <Link to="/about" className="block text-center text-gray-700 py-2 hover:text-purple-600" onClick={() => setIsOpen(false)}>
                                About
                            </Link>
                            <Link to="/courses" className="block text-center text-gray-700 py-2 hover:text-purple-600" onClick={() => setIsOpen(false)}>
                                Courses
                            </Link>
                            <Link to="/admission" className="block text-center text-gray-700 py-2 hover:text-purple-600" onClick={() => setIsOpen(false)}>
                                Admission
                            </Link>
                            <Link to="/gallery" className="block text-center text-gray-700 py-2 hover:text-purple-600" onClick={() => setIsOpen(false)}>
                                Gallery
                            </Link>
                            <Link to="/contact" className="block text-center text-gray-700 py-2 hover:text-purple-600" onClick={() => setIsOpen(false)}>
                                Contact
                            </Link>

                            <div className="flex justify-center items-center">
                                <Link to="/enquire-now" onClick={() => setIsOpen(false)}>
                                    <button className="block text-center px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700">
                                        Enquire Now
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;
