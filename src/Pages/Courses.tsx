import React from 'react'

const Courses: React.FC = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold">Courses</h1>
          <p className="mt-2 text-lg text-gray-200">
            <a href="/" className="hover:underline text-gray-300">Home</a> &raquo; Courses
          </p>
        </div>
      </div>

      <div className=" p-10 rounded-xl  max-w-4xl mx-auto text-center space-y-6">
        {/* Title */}
        <h1 className="text-5xl font-extrabold text-red-600">Courses Offered</h1>

        {/* Image */}
        <img
          src="https://takalkarclasses.com/wp-content/uploads/2023/05/i1.png"
          alt="Courses Offered"
          className="w-16 flex  rounded-lg h-16 duration-300"
        />

        {/* Description */}
        <p className="text-lg text-gray-800 max-w-3xl mx-auto leading-relaxed">
          The MHT-CET or <span className="font-semibold">Common Entrance Test</span> is an annual entrance exam conducted by the Government of Maharashtra. It is conducted by the <span className="font-semibold">Directorate of Technical Education.</span> The degree courses of the following streams are mainly accounted for in this entrance exam:
        </p>

        {/* Course List */}
        <ul className="text-lg text-gray-900 max-w-2xl mx-auto list-disc list-inside space-y-2 text-left">
          <li><span className="font-semibold text-blue-700">Engineering</span></li>
          <li><span className="font-semibold text-blue-700">Pharmacy</span></li>
        </ul>

        {/* Additional Info */}
        <p className="text-md text-gray-700 max-w-3xl mx-auto leading-relaxed">
          The test was conducted in online mode for the first time in 2019. The State Common Entrance Test Cell, Maharashtra released the syllabus and marking scheme for the <span className="font-semibold">Computer-Based Test (CBT).</span>
        </p>
      </div>
    </>
  )
}

export default Courses
