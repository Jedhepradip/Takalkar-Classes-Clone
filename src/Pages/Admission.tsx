import React from 'react'

const Admission: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Admissions</h1>
          <p className="mt-2 text-lg text-gray-200">
            <a href="/" className="hover:underline text-gray-300">Home</a> &raquo; Admissions
          </p>
        </div>
      </div>

      <div className=" p-8 rounded-xl max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="flex justify-center">
            <img
              src="https://takalkarclasses.com/wp-content/uploads/2024/12/Takalkar-classes-admission.png"
              alt="Takalkar Classes Admission"
              className="w-full max-w-lg rounded-lg shadow-md"
            />
          </div>

          {/* Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-black text-center mb-6">Fill out the form</h1>

            <form className="space-y-4">
              {/* Name Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Mobile Number Input */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Select Course */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Select Course</label>
                <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Choose a course</option>
                  <option value="MHT-CET">MHT-CET</option>
                  <option value="JEE">JEE</option>
                  <option value="NEET">NEET</option>
                </select>
              </div>

              {/* Select Center */}
              <div>
                <label className="block text-gray-700 font-medium mb-1">Select Center</label>
                <select className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">Choose a center</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Nagpur">Nagpur</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-semibold p-3 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Admission
