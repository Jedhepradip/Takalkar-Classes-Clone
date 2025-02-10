import React from "react";
import { FaGraduationCap, FaHeart, FaUsers } from "react-icons/fa";
const AboutHeader: React.FC = () => {
  return (
    <>
      <div
        className="relative w-full h-[300px] flex flex-col items-center justify-center text-white text-center"
        style={{
          backgroundImage: "url('https://takalkarclasses.com/wp-content/uploads/2023/04/About.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for Better Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
          <p className="mt-2 text-lg text-gray-200">
            <a href="/" className="hover:underline text-gray-300">Home</a> &raquo; About
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://takalkarclasses.com/wp-content/uploads/2023/04/about.jpg"
              alt="About Takalkar Classes"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right - Text Content */}
          <div className="text-gray-800">
            <h2 className="text-4xl font-bold text-purple-700 mb-6">
              About Takalkar Classes
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              In the year **1987**, a visionary saw a dream. A dream to impart quality education to
              every student who would come seeking it. Through his persistent efforts, **Prof. Kedar Takalkar**
              realized his dream and brought the Takalkar legacy to life, along with
              **Prof. Vrinda Takalkar, Prof. Ritesh Bhattad, and Mr. Sheetal Patil** as support pillars and
              directors of the organization.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Takalkar Eduhub Pvt. Ltd., with a directorial experience of **70+ years**, has evolved tremendously,
              both in their scale and the quality of education. Started from just **20 students** in the first batch,
              the class today caters to **thousands of students** every year.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              A **student-centric approach**, **stress-free environment**, and **personal attention** from
              our dedicated team of teachers play a crucial role in helping students achieve their goals
              and fulfilling the dreams of their parents.
            </p>

            {/* Apply Button */}
            <button className="bg-green-600 text-white px-6 py-3 rounded-sm font-semibold text-sm shadow-md 
                             hover:bg-green-700 transition duration-300">
              Apply for Admission
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:p-16 p-5">
        {/* Text Section */}
        <div className="flex-1 text-gray-800 space-y-4">
          <h2 className="text-3xl font-bold text-blue-700">Prof. Kedar Takalkar</h2>
          <p className="text-lg leading-relaxed">
            Prof. Kedar Takalkar is a noted educationist and has conducted more than 300 Faculty Development Workshops and more than 3000 seminars all over Maharashtra for parents and students. Through these seminars, he has guided on topics such as – Parenting, Techniques of Studying, How to write Board Papers, FYJC admission guidance, Aptitude tests, Engineering & Medical admission counseling etc. As an accomplished career counselor, he has been instrumental in directing thousands of young minds towards their dream careers. Times of India group has rightly felicitated him with the ‘Best Career Counsellor Award’ for Four consecutive years 2017, 2018, 2019 & 2020.
          </p>
          <p className="font-semibold">PROF. KEDAR TAKALKAR</p>
          <p className="italic">FOUNDER</p>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src="https://takalkarclasses.com/wp-content/uploads/2023/04/director.png"
            alt="Prof. Kedar Takalkar"
            className="w-96 h-auto rounded-sm shadow-lg"
          />
        </div>
      </div>


      <div className="p-10 space-y-8  rounded-xl max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-black text-center uppercase tracking-wide">
          What Makes Us Different
        </h2>

        <p className="text-lg text-black text-center max-w-2xl mx-auto leading-relaxed">
          Takalkar Classes is Your Pathway to IITs, NITs, & Top Engineering & Medical Colleges.
        </p>

        <p className="text-md text-black text-center max-w-3xl mx-auto leading-relaxed">
          We provide a conducive environment where students can explore, think, learn, and perform exceptionally well in studies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Feature 1 */}

          <div className="flex gap-2 bg-white p-6 rounded-lg  transition-all duration-300">
            <FaGraduationCap className=" text-2xl transform hover:scale-110 transition duration-300" />
            <p className="text-lg font-medium text-black">IITs & NITs Preparation</p>
          </div>

          <div className="flex gap-2 bg-white p-6 rounded-lg  transition-all duration-300">
            <FaHeart className=" text-2xl transform hover:scale-110 transition duration-300" />
            <p className="text-lg font-medium text-black">Student-Centric Approach</p>
          </div>
          {/* Feature 3 */}
          <div className="flex gap-2 bg-white p-6 rounded-lg  transition-all duration-300">
            <FaUsers className=" text-2xl transform hover:scale-110 transition duration-300" />
            <p className="text-lg font-medium text-black">Experienced Faculty</p>
          </div>
        </div>
      </div>


      <div className=" p-10 rounded-xl max-w-4xl mx-auto text-center space-y-6">
        <h1 className="text-3xl font-extrabold text-black leading-relaxed">
          Teaching Methodology
        </h1>
        <p className="text-lg text-gray-800 max-w-2xl mx-auto">
          Our focus is more than grades; we want a shift in the perspective, we want to reshape how students look at studies.
        </p>
        <img
          src="https://takalkarclasses.com/wp-content/uploads/2023/10/Group-213.png"
          alt="Teaching Methodology"
          className="w-full h-[500px] max-w-5xl rounded-lg duration-300"
        />
      </div>
    </>
  );
};

export default AboutHeader;
