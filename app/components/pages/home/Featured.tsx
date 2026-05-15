"use client";
import { onest, urbanist } from "@/app/fonts/fonts";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const featuredProperties = [
    {
        id: 1,
        title: "Seaside Serenity Villa",
        description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
        image: "/feat1.png",
        slug: "villa-thrissur",
        features: [
            { icon: "bed", label: "4-Bedroom" },
            { icon: "bath", label: "3-Bathroom" },
            { icon: "home", label: "Villa" }
        ],
        price: "$550,000",
        buttonText: "View Property Details"
    },
    {
        id: 2,
        title: "Metropolitan Haven",
        description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
        image: "/feat2.png",
         slug: "apartment-thrissur",
        features: [
            { icon: "bed", label: "2-Bedroom" },
            { icon: "bath", label: "2-Bathroom" },
            {
                icon: "home", label: "Villa"
            }
        ],
        price: "$550,000",
        buttonText: "View Property Details"
    },
    {
        id: 3,
        title: "Rustic Retreat Cottage",
        description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
        image: "/feat3.png",
          slug: "villa-ernakulam",
        features: [
            { icon: "bed", label: "3-Bedroom" },
            { icon: "bath", label: "3-Bathroom" },
            { icon: "home", label: "Villa" }
        ],
        price: "$550,000",
        buttonText: "View Property Details"
    },
    {
        id: 4,
        title: "Seaside Serenity Villa",
        description: "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood.",
        image: "/feat1.png",
        slug: "plot-ernakulam",
        features: [
            { icon: "bed", label: "4-Bedroom" },
            { icon: "bath", label: "3-Bathroom" },
            { icon: "home", label: "Villa" }
        ],
        price: "$550,000",
        buttonText: "View Property Details"
    },
    {
        id: 5,
        title: "Metropolitan Haven",
        description: "A chic and fully-furnished 2-bedroom apartment with panoramic city views.",
        image: "/feat2.png",
        slug: "apartment-ernakulam",
        features: [
            { icon: "bed", label: "2-Bedroom" },
            { icon: "bath", label: "2-Bathroom" },
            {
                icon: "home", label: "Villa"
            }
        ],
        price: "$550,000",
        buttonText: "View Property Details"
    },
    {
        id: 6,
        title: "Rustic Retreat Cottage",
        description: "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community.",
        image: "/feat3.png",
        slug: "plot-thrissur",
        features: [
            { icon: "bed", label: "3-Bedroom" },
            { icon: "bath", label: "3-Bathroom" },
            { icon: "home", label: "Villa" }
        ],
        price: "$550,000",
        buttonText: "View Property Details"
    }
];

export default function Featured() {
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3;

    const totalPages = Math.ceil(featuredProperties.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const currentItems = featuredProperties.slice(startIndex, startIndex + itemsPerPage);
    return (

        <>
            <div className=" sm:pe-20 ">

                <div className="grid md:grid-cols-[4fr_1fr] justify-between items-start sm:items-center gap-6 sm:gap-0 m-5">
                    <div>
                        <h1
                           className={` mb-2 ${urbanist.className}`} style={{ fontWeight: "500", fontSize: "1.8rem" }}
                        >
                            Featured Properties
                        </h1>
                        <p
                           className={`text-gray-400  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}
                        >
                            Discover our handpicked selection of exceptional properties, each offering unique features and unparalleled value.
                        </p>
                    </div>
                    <div>
                        <button
                            className={`bg-linear-to-r from-[#EA8843] to-[#FFB60D] text-white  rounded px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-xs sm:text-sm md:text-base w-full sm:w-auto transition hover:opacity-90 mt-2 sm:mt-0 ${onest.className}`}
                            style={{ fontWeight: 500 }}
                        >
                            View All Properties
                        </button>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3 sm:px-6 lg:px-4 
                py-6 sm:py-8 md:py-10 ">
                {currentItems.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-[#0c0c0c] p-2 sm:p-4 md:p-5 rounded-xl  sm:m-3  ${onest.className} flex flex-col h-full`}
                    >
                        <div>
                            <img
                                src={item.image}
                                className="rounded-lg mb-3 sm:mb-4 w-full h-40 sm:h-48 md:h-56 object-cover"
                                alt={item.title}
                            />
                        </div>
                        <div className="flex-1 flex flex-col">
                            <h2 className="text-white text-base sm:text-lg md:text-xl font-semibold mb-1">
                                {item.title}
                            </h2>
                            <p className="text-gray-400 text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
                                {item.description}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
                            {item.features.map((f, i) => (
                                <span
                                    key={i}
                                    className="bg-gray-800 text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full text-white"
                                >
                                    {f.label}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row md:flex-row md:justify-between lg:justify-between  items-center gap-2 mt-auto">
                            <span className="text-white font-semibold text-sm sm:text-base">{item.price}</span>
                           <Link href={`/property/${item.slug}`}>
                                <button
                                    className={`${onest.className} bg-linear-to-r from-[#EA8843] to-[#FFB60D] text-white rounded px-4 py-2 sm:px-5 sm:py-2.5 md:px-2 md:py-3 text-xs sm:text-sm md:text-[14.65px] w-full sm:w-auto transition hover:opacity-90 mt-2 sm:mt-0`}
                                    style={{ fontWeight: 500 }}
                                >
                                    {item.buttonText}
                                </button>
                           </Link>
                        </div>
                    </div>
                ))}
            </div>
        
            <div className="md:flex hidden items-center justify-between  border-[#B4B4B4] border-t  p-5 m-5">
                <div><span>{currentPage + 1} of {totalPages}</span></div>
                <div className="p-2  m-3 space-x-1">
                    <button className="hover:bg-black border border-gray-300 text-gray-400 p-3 rounded-full"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                    >
                        <FaArrowLeft />
                    </button>

                    <button className="hover:bg-black border border-gray-300 text-gray-400 p-3 rounded-full"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={currentPage === totalPages - 1}
                    >
                        <FaArrowRight />
                    </button>

                </div>
            </div>
        </>
    );
}