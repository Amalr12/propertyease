import { onest, urbanist } from "@/app/fonts/fonts";
import { AiFillFire } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
export default function ContactHome() {
    return (
        <>
            <div
                className="relative flex flex-col justify-center h-full md:min-h-screen rounded-b-[3rem] "
                style={{
                    backgroundImage: "url('/contactbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/80  to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 w-full mt-50 max-w-6xl mx-auto px-4 md:px-10 pt-24 sm:pt-28 md:pt-32">

                    <h1
                        className={`${urbanist.className} 
      text-white 
      text-2xl sm:text-3xl md:text-6xl lg:text-5xl 
      font-semibold 
      leading-tight 
      mb-4`}
                    >
                        Get in Touch with Propertyease
                    </h1>

                    <p
                        className={`${urbanist.className} 
      text-gray-300 
      text-sm sm:text-base md:text-4xl lg:text-xl 
      leading-relaxed 
      max-w-3xl`}
                    >
                        Welcome to Propertyease Contact Us page. We're here to assist you with any inquiries,
                        requests, or feedback you may have. Whether you're looking to buy or sell a property,
                        explore investment opportunities, or simply want to connect, we're just a message away.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="relative z-10 w-full  mt-10 md:mt-16 pb-10">
                    <div className=" p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-0 bg-black">

                        {/* Card */}
                        <div className="bg-[#0c0c0c] rounded-xl flex flex-col items-center justify-center p-5 hover:scale-105 transition">
                            <div className="flex items-center justify-center w-10 h-10 border border-yellow-600 rounded-full mb-3">
                                <MdEmail className="text-yellow-500 text-lg" />
                            </div>
                            <p className="text-gray-300 text-sm text-center">info@propertyease.com</p>
                        </div>

                        <div className="bg-[#0c0c0c] rounded-xl flex flex-col items-center justify-center p-5 hover:scale-105 transition">
                            <div className="flex items-center justify-center w-10 h-10 border border-yellow-600 rounded-full mb-3">
                                <FaPhone className="text-yellow-500 text-lg" />
                            </div>
                            <p className="text-gray-300 text-sm text-center">+1 (123) 456-7890</p>
                        </div>

                        <div className="bg-[#0c0c0c] rounded-xl flex flex-col items-center justify-center p-5 hover:scale-105 transition">
                            <div className="flex items-center justify-center w-10 h-10 border border-yellow-600 rounded-full mb-3">
                                <FaLocationDot className="text-yellow-500 text-lg" />
                            </div>
                            <p className="text-gray-300 text-sm text-center">Main Headquarters</p>
                        </div>

                        <div className="bg-[#0c0c0c] rounded-xl flex flex-col items-center justify-center p-5 hover:scale-105 transition">
                            <div className="flex items-center justify-center w-10 h-10 border border-yellow-600 rounded-full mb-3">
                                <AiFillFire className="text-yellow-500 text-lg" />
                            </div>

                            <div className="flex gap-3 flex-wrap justify-center text-gray-300 text-sm">
                                <span className="hover:text-yellow-500 cursor-pointer">Instagram</span>
                                <span className="hover:text-yellow-500 cursor-pointer">LinkedIn</span>
                                <span className="hover:text-yellow-500 cursor-pointer">Facebook</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );

}