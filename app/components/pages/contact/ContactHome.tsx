import { onest, urbanist } from "@/app/fonts/fonts";
import Image from "next/image";
import Link from "next/link";
import { AiFillFire } from "react-icons/ai";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineArrowOutward } from "react-icons/md";
export default function ContactHome() {
    return (
        <>
            <div
                className="relative flex flex-col justify-center h-full md:min-h-screen rounded-b-[4rem] rounded-t-none "
                style={{
                    backgroundImage: "url('/contactbg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-b from-black/80  to-transparent"></div>

                {/* Content */}
                <div className="relative z-10 w-full mt-10 md:mt-30 lg:mt-30 sm:mt-10 max-w-6xl mx-auto px-4 md:px-10 pt-24 sm:pt-28 md:pt-32">

                    <h1
                        style={{ fontWeight: "600" }} className={`${urbanist.className} 
      text-white 
      text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
      font-semibold 
      leading-tight 
      mb-4`}
                    >
                        Get in Touch with Propertyease
                    </h1>

                    <p
                        className={`${urbanist.className} 
      text-gray-300 
      text-sm sm:text-base md:text-xl lg:text-xl 
      leading-relaxed 
      max-w-3xl`}
                    >
                        Welcome to Propertyease Contact Us page. We're here to assist you with any inquiries,
                        requests, or feedback you may have. Whether you're looking to buy or sell a property,
                        explore investment opportunities, or simply want to connect, we're just a message away.
                    </p>
                </div>

                {/* Cards Section */}
                <div className="relative z-10 w-full  mt-10 md:mt-16 pb-10 mb-10">
                    <div className={ `${urbanist.className} p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 m-0 bg-black mb-10`}>

                        {/* Card */}
                        <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                           <Link href="mailto:info@propertyease.com">
                                <div className="flex justify-end text-2xl cursor-pointer">
                                    <MdOutlineArrowOutward className="text-gray-600" />
                                </div>
                           </Link>
                            <div className="flex flex-col items-center justify-center p-3">
                                <Image src={"/Icon Contact1.png"} alt="home" width={50} height={50} className="mb-2" />

                                <p className="text-gray-300 text-sm text-center">info@propertyease.com</p>
                            </div>
                        </div>
                         <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                            <Link href="tel:+11234567890">
                                <div className="flex justify-end text-2xl cursor-pointer">
                                    <MdOutlineArrowOutward className="text-gray-600" />
                                </div>
                            </Link>
                            <div className="flex flex-col items-center justify-center p-3">
                                <Image src={"/Icon Contact2.png"} alt="home" width={50} height={50} className="mb-2" />

                                <p className="text-gray-300 text-sm text-center">+1 (123) 456-7890</p>
                            </div>
                        </div>
                         <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                            <Link href="https://www.google.com/maps/place/Propertyease+Headquarters">
                                <div className="flex justify-end text-2xl cursor-pointer">
                                    <MdOutlineArrowOutward className="text-gray-600" />
                                </div>
                            </Link>
                            <div className="flex flex-col items-center justify-center p-3">
                                <Image src={"/Icon Contact3.png"} alt="home" width={50} height={50} className="mb-2" />

                                <p className="text-gray-300 text-sm text-center">Main Headquarters</p>
                            </div>
                        </div>
                         <div className="bg-[#0c0c0c] rounded-xl  p-3 hover:scale-105 transition">
                            <Link href="https://www.twitter.com/propertyease/">
                                <div className="flex justify-end text-2xl cursor-pointer">
                                    <MdOutlineArrowOutward className="text-gray-600" />
                                </div>
                            </Link>
                            <div className="flex flex-col items-center justify-center p-3">
                                <Image src={"/Icon Contact4.png"} alt="home" width={50} height={50} className="mb-2" />

                                 <div className="flex gap-3 flex-wrap justify-center text-gray-300 text-sm">
                              <Link href="https://www.instagram.com/propertyease/">  <span className="hover:text-yellow-500 cursor-pointer">Instagram</span></Link>
                                <Link href="https://www.linkedin.com/company/propertyease/">  <span className="hover:text-yellow-500 cursor-pointer">LinkedIn</span></Link>
                                <Link href="https://www.facebook.com/propertyease/">  <span className="hover:text-yellow-500 cursor-pointer">Facebook</span></Link>
                            </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </>
    );

}