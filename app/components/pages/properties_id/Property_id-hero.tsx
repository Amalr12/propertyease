"use client";
import { PropertyDetails } from "@/app/data/each-properties-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";
import { FaBath, FaBed, FaRegStar, FaRulerCombined, FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdOutlineVerified } from "react-icons/md";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Featured from "../home/Featured";


interface Props extends PropertyDetails { }

export default function PropertyHeroSection({
    title,
    price,
    size,
    year,
    type,
    bhk,
    bathrooms,
    status,
    images,
    overview,
    highlights,
    amenities,
    considerations,
    floorPlan, nearby, reviews
}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [open, setOpen] = useState(false);
    const fullStars = Math.floor(reviews[0].rating);
    const emptyStars = 5 - fullStars;

    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };
    return (
        <>
            <div className="bg-gray-100  p-4 mt-20 md:mt-50">
                <Link href="/property"><div className="flex justify-start items-center text-xl"><MdKeyboardArrowLeft /> <h1 className="">Back to Listings</h1></div></Link>
                <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr]  lg:grid-cols-[4fr_2fr] gap-2 items-start p-5">
                    <div className="">
                        <div className="relative w-full rounded-xl overflow-hidden">

                            <Image
                                src={images[currentIndex]}
                                alt="property"
                                width={800}
                                height={500}
                                className="w-full h-auto object-cover rounded-xl"
                                priority
                            />

                            {/* LEFT BUTTON */}
                           <div className=" flex justify-between z-50">
                                <button
                                    onClick={prevImage}
                                    className="text-2xl left-2 sm:left-4 top-1/2 -translate-y-1/2 
                   bg-black/50 hover:bg-black/70 
                   p-2 sm:p-3 rounded-full text-black  sm:text-base"
                                >
                                    ◀
                                </button>
    
                                {/* RIGHT BUTTON */}
                                <button
                                    onClick={nextImage}
                                    className="text-black right-2 sm:right-4 top-1/2 -translate-y-1/2 
                   bg-black/50 hover:bg-black/70 
                   p-2 sm:p-3 rounded-full  text-2xl sm:text-base"
                                >
                                    ▶
                                </button>
                           </div>

                        </div>
                      <div className="mt-4 px-2 sm:px-4 p-5">
  <div className="flex flex-col sm:flex-row gap-3 sm:gap-2 scrollbar-hide sm:pb-2 sm:overflow-x-auto snap-x snap-mandatory">
    {images.map((img, index) => (
      <Image
        key={index}
        src={img}
        width={200}
        height={100}
        alt="thumbnail"
        // Remove fixed dimensions - fully responsive now
        onClick={() => setCurrentIndex(index)}
        className={`w-full sm:w-17.5 sm:h-40rem md:w-20 md:h-15 lg:w-22.5 lg:h-17.5
          h-32  aspect-3/2 object-cover block rounded-lg cursor-pointer 
          border-2 transition-all duration-200 hover:scale-105 sm:snap-center
          ${currentIndex === index
            ? "border-orange-500 scale-105 shadow-lg ring-2 ring-orange-200"
            : "border-transparent hover:border-gray-400 hover:shadow-md"
          }`}
      />
    ))}
  </div>
</div>
                        <div className="bg-black text-white rounded-xl mt-6 p-6 sm:p-6">
                            <div className="grid md:grid-cols-4 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 text-center divide-x divide-gray-700">
                                <div className="flex flex-col justify-center">
                                    <FaBed className="text-orange-500 text-2xl mx-auto mb-2" />
                                    <p className="text-orange-400 font-semibold text-lg sm:text-xl">{bhk}</p>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Configuration</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <FaBath className="text-orange-500 text-2xl mx-auto mb-2" />
                                    <p className="text-orange-400 font-semibold text-lg sm:text-xl">{bathrooms}</p>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Bathrooms</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <BiRectangle className="text-orange-500 text-2xl mx-auto mb-2" />
                                    <p className="text-orange-400 font-semibold text-lg sm:text-xl">{size}</p>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Total Area</p>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <AiOutlineThunderbolt className="text-orange-500 text-2xl mx-auto mb-2" />
                                    <p className="text-orange-500 font-semibold text-lg sm:text-xl">
                                        {status || "Available"}
                                    </p>
                                    <p className="text-xs sm:text-sm text-gray-400 mt-1">Status</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-5">
                            <h1 className="text-2xl font-bold mt-5">Property Overview </h1>
                            <p>{overview}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6 p-5">
                            <div>
                                <h1 className="text-xl font-bold mb-4">Key Highlights</h1>
                                {highlights?.map((item, index) => (
                                    <div key={index} className="  p-4  flex justify-start gap-3 items-center">
                                        <MdOutlineVerified className="text-xl text-orange-300 items-center" />
                                        <h2 className="font-semibold ">{item}</h2>

                                    </div>
                                ))}
                            </div>
                            <div>
                                <h1 className="text-xl font-bold mb-4">Why Consider This Property?</h1>
                                {considerations?.map((item, index) => (
                                    <div key={index} className="  p-4  flex justify-start gap-3 items-center">
                                        <MdOutlineVerified className="text-xl text-orange-300 items-center" />
                                        <h2 className="font-semibold ">{item}</h2>

                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="p-5">
                            <h1 className="text-xl font-bold mb-4">World-class Amenities</h1>
                            <div className="grid md:grid-cols-3 gap-4 p-5">
                                {amenities?.map((item, index) => (
                                    <div key={index} className=" bg-[#0c0c0c] text-white rounded p-4  flex justify-center gap-3 items-center">
                                        <MdOutlineVerified className="text-xl text-orange-300 items-center" />
                                        <h2 className="font-semibold ">{item}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-5 flex items-center justify-center relative">

                            <div className="p-5">
                                <TransformWrapper>
                                    <TransformComponent>
                                        <Image
                                            src={floorPlan}
                                            alt="floorplan"
                                            width={650}
                                            height={550}
                                            className="rounded-lg"
                                        />
                                    </TransformComponent>
                                </TransformWrapper>
                            </div>

                        </div>
                        <div className="p-5">
                            <h1 className="text-2xl font-bold mt-5">Location & Connectivity</h1>
                            <div className="grid md:grid-cols-2 gap-4 mt-4">
                                {nearby.map((item, index) => (
                                    <div key={index} className="bg-[#0c0c0c] text-white rounded-xl p-4 flex justify-between  items-center gap-3 ">
                                        <div className="flex items-center gap-2">
                                            <MdOutlineVerified className="text-xl text-orange-300 items-center" />
                                            <h2 className="font-semibold">{item.place}</h2>
                                        </div>
                                        <div>
                                            <h2> {item.distance}</h2>
                                        </div>
                                    </div>
                                ))
                                }

                            </div>

                        </div>
                       <div className="p-4 sm:p-5">
  <h1 className="text-xl sm:text-2xl font-bold mt-5 mb-6">User Reviews</h1>
  {reviews.map((item, index) => (
    <div key={index} className="bg-[#0c0c0c] text-white rounded-xl p-4 sm:p-5 mt-4 mb-4 shadow-lg hover:shadow-xl transition-all">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-2">
        {/* User Info - Stacks on mobile */}
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold text-sm sm:text-base shrink-0">
            {item.user.charAt(0).toUpperCase()}
          </div>
          <div>
            <h2 className="font-semibold text-base sm:text-lg leading-tight">{item.user}</h2>
          </div>
        </div>

        {/* Stars - Right-aligned on desktop, full-width on mobile */}
        <div className="flex justify-end sm:justify-start">
          <div className="flex text-yellow-500 text-sm sm:text-base">
            {[...Array(fullStars)].map((_, i) => (
              <FaStar key={i} className="w-5 h-5 sm:w-6 sm:h-6" />
            ))}
            {[...Array(emptyStars)].map((_, i) => (
              <FaRegStar key={i} className="w-5 h-5 sm:w-6 sm:h-6" />
            ))}
          </div>
        </div>
      </div>
      
      {/* Comment - Full width always */}
      <div className="text-sm sm:text-base leading-relaxed">
        <p className="whitespace-pre-wrap">{item.comment}</p>
      </div>
    </div>
  ))}
</div>

                    </div>
                    <div className="">

                        <div className="bg-black text-white rounded-xl p-6 shadow-lg">
                            <p className="text-gray-400 text-sm">PROPERTY PRICE</p>
                            <h1 className="text-3xl font-bold">{price}</h1>
                            <p className="text-sm text-orange-400 mt-1">
                                Estimated EMI: ₹25K/month
                            </p>

                            <button className="w-full mt-4 bg-linear-to-r from-orange-500 to-yellow-500 py-2 rounded-lg">
                                Send Enquiry
                            </button>

                            <button className="w-full mt-3 border border-gray-600 py-2 rounded-lg">
                                Schedule Visit
                            </button>

                            <p className="text-xs text-gray-400 mt-3">
                                ✔ {status || "Verified by Property Team"}
                            </p>
                        </div>

                        {/* AGENT CARD */}
                        <div className="bg-black text-white rounded-xl p-6 shadow-lg">
                            <h2 className="font-semibold mb-4">Listed by Agent</h2>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 border-2 border-orange-500 rounded-full"></div>
                                <div>
                                    <p className="font-medium">Rahul Menon</p>
                                    <p className="text-xs text-gray-400">
                                        Senior Property Consultant
                                    </p>
                                    <p className="text-yellow-400 text-sm">⭐ 4.8 Rating</p>
                                </div>
                            </div>

                            <button className="w-full mt-4 bg-gray-800 py-2 rounded-lg">
                                📞 +91 98765 43210
                            </button>

                            <button className="w-full mt-3 border border-gray-600 py-2 rounded-lg">
                                ✉ Email Agent
                            </button>
                        </div>
                    </div>

                </div>
                <Featured />
            </div>

        </>
    );
}