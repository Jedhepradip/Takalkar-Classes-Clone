import React from 'react'
import { FaHome, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
const Contact: React.FC = () => {
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
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Contact</h1>
                    <p className="mt-2 text-lg text-gray-200">
                        <a href="/" className="hover:underline text-gray-300">Home</a> &raquo; Contact
                    </p>
                </div>
            </div>

            <div className='font-sans py-5 md:px-10 flex justify-around items-center w-full h-full flex-wrap'>
                <div className='bg-white py-8 px-10 rounded-lg md:w-[40%] w-full mb-4 md:mb-0'>
                    <form >
                        <div className='mb-2'>
                            <label htmlFor="Name" className='block text-gray-700 font-serif mb-2 text-[19px]'>Name</label>
                            <input type='text' placeholder='Name' id='Name' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Phone" className='block text-gray-700 font-serif mb-2 text-[19px]'>Phone</label>
                            <input type='number' placeholder='Phone' id='Number' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Name" className='block text-gray-700 font-serif mb-2 text-[19px]'>Subject</label>
                            <input type='text' placeholder='Subject' id='Subject' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />

                        </div>

                        <div className='mb-2'>
                            <label htmlFor="Name" className='block text-gray-700 font-serif mb-2 text-[19px]'>Message</label>
                            <textarea placeholder='Message' id='Message' className='font-serif shadow appearance-none border rounded w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                        </div>
                        <button className='btn mt-1 bg-green-700 py-2.5 px-5 w-full rounded-lg font-serif text-[20px] text-white'>Submit</button>
                    </form>
                </div>

                <div className='bg-white md:px-10 px-3 rounded-lg md:w-[50%] w-full mb-4 md:mb-0 md:py-5'>
                    <h1 className='font-bold font-serif text-[43px] text-black py-5'>Contact To Mi</h1>
                    <div className=' h-full  '>
                        <p className='font-serif'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse labore nostrum totam, vel perspiciatis nihil! Dolores expedita repellat obcaecati inventore possimus recusandae sequi pariatur a fuga unde? Animi, error impedit?</p>
                        <div className='flex mt-5'>
                            <FaHome className='text-5xl mt-2 bg-slate-200  rounded-full py-1 px-2 flex' />
                            <div>
                                {/* flex flex-col */}
                                <span className='ml-2 font-bold font-serif text-blue-700 '>Address</span><br />
                                <p className='ml-2 font-serif'>Bhavinimgaon, Tal . Shevgaon, District . A.Nager</p>
                            </div>
                        </div>

                        <div className='flex mt-5'>
                            <FaPhoneAlt className='text-5xl mt-2 bg-slate-200  rounded-full py-1 px-2 flex' />
                            <div>
                                {/* flex flex-col */}
                                <span className='ml-2 font-bold font-serif text-blue-700 '>Phone</span><br />
                                <p className='ml-2 font-serif'>91+ 8459844605</p>
                            </div>
                        </div>

                        <div className='flex mt-5'>
                            <MdEmail className='text-5xl mt-2 bg-slate-200  rounded-full py-1 px-2 flex' />
                            <div>
                                {/* flex flex-col */}
                                <span className='ml-2 font-bold font-serif text-blue-700 '>Email</span><br />
                                <p className='ml-2 font-serif'>pradipjedhe69@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-8xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-black mb-4">Find Us on Google Maps</h2>
                <div className="overflow-hidden rounded-lg shadow-md">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.646970839946!2d-122.0842496846812!3d37.42199977982414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba0c7a8a8a8b%3A0x8a8a8a8a8a8a8a8b!2sGoogleplex!5e0!3m2!1sen!2sus!4v1632231234567"
                        width="100%"
                        height="400"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default Contact
