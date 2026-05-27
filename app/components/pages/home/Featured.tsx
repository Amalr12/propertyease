"use client";
import { onest, urbanist } from "@/app/fonts/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

      const pathname = usePathname();
      const isHomePage = pathname === "/";
      const isContactPage = pathname === "/contact";
    return (

        <>
            <div className="">

              <div
    className={`
        grid
        grid-cols-1
        md:grid-cols-[4fr_1fr]
        items-start
        md:items-center
        gap-4
        md:gap-6
        mt-5
        w-full
        ${isHomePage ? "p-3" : "p-3 md:p-5"}
    `}
>

    {/* LEFT CONTENT */}
    <div className={`w-full ${isHomePage ? "p-1 sm:p-2" : ""}`}>

        <h1
            className={`
                mb-2
                text-[1.5rem]
                sm:text-[1.7rem]
                md:text-[1.9rem]
                leading-tight
                ${urbanist.className}
            `}
            style={{ fontWeight: 600 }}
        >
            Featured Properties
        </h1>

        <p
            className={`
                text-[#000000]
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                ${onest.className}
            `}
            style={{ fontWeight: 400 }}
        >
            Discover our handpicked selection of exceptional
            properties, each offering unique features and
            unparalleled value.
        </p>

    </div>

    {/* RIGHT BUTTON */}
    <div
        className="
            md:flex
            hidden
        w-full
        md:w-full
        lg:w-auto
        items-center
        justify-start
        md:justify-start
        lg:justify-end
        "
    >
        <Link href={"/property"} className="w-full lg:w-auto">

            <button
                className={`
                    bg-linear-to-r
                from-[#EA8843]
                to-[#FFB60D]
                text-white
                cursor-pointer
                rounded
                px-4
                py-3
                md:px-2
                lg:px-6
                text-xs
                md:text-sm
                w-full
                lg:w-auto
                transition-all
                duration-300
                hover:opacity-90
                    ${onest.className}
                `}
                style={{ fontWeight: 500 }}
            >
                View All Properties
            </button>

        </Link>
    </div>

</div>
                 <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 ${isHomePage?'px-5':'px-0'}  sm:px-2 lg:px-2  py-6 sm:py-8 md:py-10  `}>
                {currentItems.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-[#0c0c0c] p-4 sm:p-4 md:p-5 rounded-xl  sm:m-3  ${onest.className} flex flex-col h-full`}
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
                            <p className="text-[#999999] text-xs sm:text-sm md:text-base mb-2 sm:mb-3">
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
                        <div className="flex flex-row sm:flex-row md:flex-row justify-between md:justify-between lg:justify-between  items-center md:gap-1 mt-auto">
                            <span className="text-white font-semibold text-sm sm:text-base">{item.price}</span>
                           <Link href={`/property/${item.slug}`}>
                                <button
                                    className={`${onest.className} bg-linear-to-r from-[#EA8843] to-[#FFB60D] text-white cursor-pointer rounded px-4 py-2 sm:px-5 sm:py-2.5 md:px-2 md:py-3 text-xs sm:text-sm md:text-sm w-full sm:w-auto transition hover:opacity-90 mt-2 sm:mt-0`}
                                    style={{ fontWeight: 500 }}
                                >
                                    {item.buttonText}
                                </button>
                           </Link>
                        </div>
                    </div>
                ))}
            </div>
               <div
        className="
         flex
            md:hidden
        w-auto m-5
        md:w-full
        lg:w-auto
        items-center
     
        "
    >
        <Link href={"/property"} className="w-full lg:w-auto">

            <button
                className={`
                    bg-linear-to-r
                from-[#EA8843]
                to-[#FFB60D]
                text-white
                cursor-pointer
                rounded
                px-4
                py-3
                md:px-5
                lg:px-6
                text-sm
                md:text-base
                flex text-center md:hidden
                w-full
                lg:w-auto
                transition-all
                duration-300
                hover:opacity-90
                    ${onest.className}
                `}
                style={{ fontWeight: 500 }}
            >
                View All Properties
            </button>

        </Link>
    </div>
        
            <div className="md:flex hidden items-center justify-between  border-[#B4B4B4] border-t  pt-5 m-5">
                <div><span>{currentPage + 1} of {totalPages}</span></div>
                <div className=" space-x-1">
                    <button className="hover:bg-[#191919] border border-black text-black  p-3 cursor-pointer rounded-full hover:text-white"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                    >
                        <FaArrowLeft className="hover:text-white" />
                    </button>

                    <button className="hover:bg-[#191919] border border-black text-black  p-3 cursor-pointer rounded-full hover:text-white"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={currentPage === totalPages - 1}
                    >
                        <FaArrowRight className="hover:text-white" />
                    </button>

                </div>
            </div>
            </div>
           
        </>
    );
}