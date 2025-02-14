import React, { useState, useEffect, useCallback } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaUsers, FaClock, FaChalkboardTeacher, FaAward, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { motion } from "framer-motion";
import { FaPhone } from "react-icons/fa";

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8oKoIwr50gy1saSLQXHY09s-EyZmftYSYw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReQdWmp5nNEGXfkY17VBy3uQ17vdVemX3O-Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaOFC-3V3sdgl-NJOuEK2vBi8msRew3Mdnxw&s",
];

const Home: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  // Auto-slide effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [nextSlide]);


  const courses = [
    {
      title: "8th, 9th, 10th",
      subtitle: "(SSC, CBSE, ICSE Boards)",
      description:
        "Foundation courses designed to strengthen fundamental concepts and prepare students for future academic challenges.",
      image: "https://takalkarclasses.com/wp-content/uploads/2023/04/8th-9th-10th-1.png",
      bgColor: "bg-purple-600",
    },
    {
      title: "11th, 12th, Science-PCMB",
      subtitle: "(HSC & CBSE)",
      description:
        "Advanced courses covering Physics, Chemistry, Mathematics, and Biology (PCMB) to prepare students for board exams and competitive exams.",
      image: "https://takalkarclasses.com/wp-content/uploads/2023/04/11th-12th-Science-PCMB.png",
      bgColor: "bg-blue-600",
    },

    {
      title: "JEE, NEET, CET",
      subtitle: "Entrance Exam Preparation",
      description:
        "Comprehensive coaching for engineering (JEE), medical (NEET), and state-level entrance exams (CET) with expert guidance and practice tests.",
      image: "https://takalkarclasses.com/wp-content/uploads/2023/04/JEE-NEET-CET.png",
      bgColor: "bg-green-600",
    },
  ];

  const branches = [
    {
      name: "BIBVEWADI (H.O.)",
      address: "634/1, Above People’s Bank, Bharat Jyoti Bus Stop, Bibvewadi, Pune - 411037.",
      contact: "3212321232 / 3232323232",
      googleMap: "https://goo.gl/maps/bibvewadi",
    },
    {
      name: "KOTHRUD",
      address: "1st Floor, Rahul Complex, Paud Road, Kothrud, Pune - 411038.",
      contact: "9876543210 / 9876501234",
      googleMap: "https://goo.gl/maps/kothrud",
    },
    {
      name: "KARVENAGAR",
      address: "Near Karve Statue, Karvenagar, Pune - 411052.",
      contact: "9123456789 / 9876123456",
      googleMap: "https://goo.gl/maps/karvenagar",
    },
    {
      name: "NARHE",
      address: "2nd Floor, Goyal Plaza, Near Navale Bridge, Narhe, Pune - 411041.",
      contact: "9988776655 / 8866554433",
      googleMap: "https://goo.gl/maps/narhe",
    },
    {
      name: "HADAPSAR",
      address: "3rd Floor, Amanora Mall, Hadapsar, Pune - 411028.",
      contact: "9977885544 / 8877665533",
      googleMap: "https://goo.gl/maps/hadapsar",
    },
    {
      name: "KONDHWA",
      address: "Opp. Mega Mart, NIBM Road, Kondhwa, Pune - 411048.",
      contact: "9966554433 / 8855443322",
      googleMap: "https://goo.gl/maps/kondhwa",
    },
    {
      name: "VIMAN NAGAR",
      address: "4th Floor, Phoenix Market City, Viman Nagar, Pune - 411014.",
      contact: "9955443322 / 8844332211",
      googleMap: "https://goo.gl/maps/viman",
    },
    {
      name: "SHIVAJINAGAR",
      address: "Near Modern College, Jangali Maharaj Road, Shivajinagar, Pune - 411005.",
      contact: "9944332211 / 8833221100",
      googleMap: "https://goo.gl/maps/shivajinagar",
    },
    {
      name: "KOREGAON PARK",
      address: "Lane 5, Koregaon Park, Pune - 411001.",
      contact: "9933221100 / 8822110099",
      googleMap: "https://goo.gl/maps/koregaon",
    },
    {
      name: "WAKAD",
      address: "Opp. Dange Chowk, Wakad, Pune - 411057.",
      contact: "9922110099 / 8811009988",
      googleMap: "https://goo.gl/maps/wakad",
    },
    {
      name: "PIMPRI",
      address: "Near Finolex Chowk, Pimpri, Pune - 411018.",
      contact: "9911009988 / 8800998877",
      googleMap: "https://goo.gl/maps/pimpri",
    },
    {
      name: "CHINCHWAD",
      address: "Old Mumbai Pune Highway, Chinchwad, Pune - 411019.",
      contact: "9900998877 / 8799887766",
      googleMap: "https://goo.gl/maps/chinchwad",
    },
    {
      name: "NIGDI",
      address: "Near Bhakti Shakti Chowk, Nigdi, Pune - 411044.",
      contact: "9899887766 / 8788776655",
      googleMap: "https://goo.gl/maps/nigdi",
    },
    {
      name: "BANER",
      address: "Opp. Orchid Hotel, Baner Road, Pune - 411045.",
      contact: "9888776655 / 8777665544",
      googleMap: "https://goo.gl/maps/baner",
    },
    {
      name: "AUNDH",
      address: "Near DAV Public School, Aundh, Pune - 411007.",
      contact: "9877665544 / 8766554433",
      googleMap: "https://goo.gl/maps/aundh",
    },
    {
      name: "KHARADI",
      address: "EON IT Park Road, Kharadi, Pune - 411014.",
      contact: "9866554433 / 8655443322",
      googleMap: "https://goo.gl/maps/kharadi",
    },
    {
      name: "MAGARPATTA",
      address: "Tower 2, Cybercity, Magarpatta, Pune - 411028.",
      contact: "9855443322 / 8744332211",
      googleMap: "https://goo.gl/maps/magarpatta",
    },
    {
      name: "F.C. ROAD",
      address: "Near Deccan Gymkhana, Fergusson College Road, Pune - 411004.",
      contact: "9844332211 / 8733221100",
      googleMap: "https://goo.gl/maps/fcroad",
    },
    {
      name: "SWARGATE",
      address: "Opp. ST Stand, Swargate, Pune - 411037.",
      contact: "9833221100 / 8722110099",
      googleMap: "https://goo.gl/maps/swargate",
    },
    {
      name: "PASHAN",
      address: "Near Balaji Chowk, Pashan, Pune - 411021.",
      contact: "9822110099 / 8711009988",
      googleMap: "https://goo.gl/maps/pashan",
    },
    {
      name: "KOTHRUD",
      address: "1st Floor, Rahul Complex, Paud Road, Kothrud, Pune - 411038.",
      contact: "9876543210 / 9876501234",
      googleMap: "https://goo.gl/maps/kothrud",
    }
  ];

  return (
    <>
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="relative h-56 md:h-[450px] overflow-hidden rounded-lg">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`absolute inset-0 w-full h-[500px] object-cover transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0"
                }`}
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? "bg-purple-600 scale-110" : "bg-gray-400"
                }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center space-x-4 mt-0 px-5">
        {/* Left Section */}
        <div className="bg-white rounded-xl p-6 w-full md:w-1/2">
          <img
            src="https://takalkarclasses.com/wp-content/uploads/2023/04/About.png"
            alt="Takalkar Classes"
            className="object-cover rounded-full"
          />
          <h2 className="text-3xl font-extrabold mt-4">
            <span className="text-green-600">Takalkar</span> Classes
          </h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            In the year 1987, a visionary saw a dream—to impart quality education
            to every student who sought it. Through his persistent efforts,{" "}
            <span className="font-semibold text-gray-900">Prof. Kedar Takalkar</span>{" "}
            realized this dream, bringing the Takalkar Legacy to life, alongside{" "}
            <span className="font-semibold text-gray-900">Prof. Vrinda Takalkar</span>,
            <span className="font-semibold text-gray-900"> Prof. Ritesh Bhattad</span>, and{" "}
            <span className="font-semibold text-gray-900">Mr. Sheetal Patil</span>.
          </p>

          {/* Achievements */}
          <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center gap-2">
              <FaUsers className="text-gary-600 text-2xl mt-1 " />
              <p className="mt-2 text-[14px] font-semibold">1 Lakh Alumni+</p>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-gary-600 text-2xl mt-1 " />
              <p className="mt-2 text-[14px] font-semibold">35+ Years Legacy</p>
            </div>
            <div className="flex items-center gap-2">
              <FaChalkboardTeacher className="text-gary- mt-1 600 text-2xl" />
              <p className="mt-2 text-[14px] font-semibold">Expert Faculty</p>
            </div>
            <div className="flex items-center gap-2">
              <FaAward className="text-gary-600 text-2xl mt-1 " />
              <p className="mt-2 text-[14px] font-semibold">Top Results</p>
            </div>
            <div className="flex items-center gap-2">
              <FaGraduationCap className="text-gary-600  mt-1 text-2xl" />
              <p className="mt-2 text-[14px] font-semibold">Career Guidance</p>
            </div>
            <div className="flex items-center gap-2">
              <FaTrophy className="text-gary-600 text-2x mt-1 l" />
              <p className="mt-2 text-[14px] font-semibold">National Recognition</p>
            </div>
          </div>
        </div>

        {/* Female Version */}
        <div className="rounded-xl p-6 w-full md:w-1/2 text-center">
          <img
            src="https://takalkarclasses.com/wp-content/uploads/2023/06/Group-169_11zon.png"
            alt="Female Version"
            className="mx-auto w-full h-full object-cover rounded-full border-4 shadow-md"
          />

        </div>
      </div>

      <div className="relative w-full bg-cover bg-center" style={{ backgroundImage: "url('https://takalkarclasses.com/wp-content/uploads/2023/04/About.png')" }}>
        {/* Dark Overlay for better readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Header Content */}
        <div className="relative z-10 text-white text-center py-16 px-6">
          <h2 className="text-3xl md:text-4xl font-bold">FLEXIBLE COURSES</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg">
            Our goal is to make students enjoy studies and prepare them for reaching greater heights. Our unique teaching methodology focuses on making students learn conceptually and in a way that works for them.
          </p>
        </div>

        {/* Cards Section */}
        <div className="relative z-10 max-w-6xl mx-auto md:px-28 p-4 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className="bg-white text-black p-0 rounded-lg shadow-lg hover:shadow-2xl transition-all h-[400px] flex flex-col items-center">
                {/* Course Image */}
                <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold">{course.title}</h3>
                <p className="text-lg mt-2">{course.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="https://takalkarclasses.com/wp-content/uploads/2023/04/About-the-founder.png"
              alt="About the Founder"
              className="w-full max-w-sm rounded-lg"
            />
          </motion.div>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-gray-800"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">
              ABOUT THE FOUNDER
            </h2>
            <p className="text-lg leading-relaxed">
              Prof. Kedar Takalkar is a noted educationist and has conducted more than{" "}
              <span className="font-semibold text-purple-600">300 Faculty Development Workshops</span>
              and over <span className="font-semibold text-purple-600">3000 seminars</span> across Maharashtra for parents and students.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Through these seminars, he has provided guidance on topics such as Parenting, Study Techniques,
              Writing Board Papers, FYJC Admissions, Aptitude Tests, and Engineering & Medical Admission Counseling.
            </p>
            <p className="mt-4 text-lg leading-relaxed">
              Recognized as an **accomplished career counselor**, he has helped thousands of young minds achieve their dream careers.
              <span className="font-semibold text-purple-600">Times of India</span> awarded him the **Best Career Counselor Award** for three consecutive years (2017, 2018 & 2019).
            </p>

            {/* Profile Image & Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center mt-6"
            >
              <div className="w-full">
                <img
                  src="https://takalkarclasses.com/wp-content/uploads/2023/05/Kedar-Takalkar.png"
                  alt="Prof. Kedar Takalkar"
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">PROF. KEDAR TAKALKAR</h3>
                <p className="text-gray-600 text-lg">Founder</p></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="bg-gray-100 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Section Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-purple-700 underline mb-8">
            LATEST ARTICLE
          </h1>

          {/* Article Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://takalkarclasses.com/wp-content/uploads/2023/04/Group-47.png"
                alt="Article 1"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="https://takalkarclasses.com/wp-content/uploads/2023/04/image-5.png"
                alt="Article 2"
                className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mb-10">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700 text-center mb-8">
          13 CENTRES IN PUNE & PCMC
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10">
          Takalkar Classes is now closer to you!
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-lg shadow-lg transition-all duration-300 
                        hover:bg-gray-400 hover:scale-105 h-[250px] flex flex-col justify-between"
            >
              {/* Branch Name (Clickable) */}
              <a
                href={branch.googleMap}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-black flex items-center gap-2 hover:text-white"
              >
                {branch.name}
              </a>

              {/* Address */}
              <p className="text-gray-600 hover:text-gray-200 mt-2">{branch.address}</p>

              {/* Contact Number */}
              <div className="mt-4 flex items-center gap-2 text-lg text-gray-800 hover:text-gray-200">
                <FaPhone />
                {branch.contact}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
