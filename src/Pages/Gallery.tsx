import React from 'react'

const images = [
  "https://takalkarclasses.com/wp-content/uploads/2023/10/AA-2062.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/AA-1686.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1653.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1976.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1915.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1536.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1528.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/AA-1699.jpg",
  "https://takalkarclasses.com/wp-content/uploads/2023/10/IMG_1755.jpg",
];

const Gallery: React.FC = () => {
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
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Gallery</h1>
          <p className="mt-2 text-lg text-gray-200">
            <a href="/" className="hover:underline text-gray-300">Home</a> &raquo; Gallery
          </p>
        </div>
      </div>

      <div className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-black mb-6">Gallery</h1>
        <div className='flex justify-center items-center mb-5 gap-4'>
          <button className='bg-red-500 py-2 px-4 '>All</button>
          <button className='py-2 px-7 border border-black'>Jallosh 2022</button>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-60 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className='flex mt-10 rounded-sm justify-center items-center'>
          <button className='bg-red-500 py-2 px-5'>LOAD MORE</button>
        </div>
      </div>
    </>
  )
}

export default Gallery
