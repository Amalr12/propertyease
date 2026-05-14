"use client";
import { onest, urbanist } from "@/app/fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const data = [
    {
        img: "/whychoose1.png",
        title: "Free Site Visit",
        desc: "Free pickup & drop for unlimited site visits across the city."
    },
    {
        img: "/whychoose2.png",
        title: "No Brokerage Charges",
        desc: "Get personalized RM managing everything from site visit to booking."
    },
    {
        img: "/whychoose3.png",
        title: "Bottom Rate Guarantee",
        desc: "Housiey guarantees the bottom rate or refunds double the difference."
    },
    {
        img: "/whychoose3.png",
        title: "Bottom Rate Guarantee",
        desc: "Housiey guarantees the bottom rate or refunds double the difference."
    },
    {
        img: "/whychoose1.png",
        title: "Free Site Visit",
        desc: "Free pickup & drop for unlimited site visits across the city."
    },
    {
        img: "/whychoose2.png",
        title: "No Brokerage Charges",
        desc: "Get personalized RM managing everything from site visit to booking."
    }

];

export default function WhyChooseUs() {

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3;

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
    return (
        <>
            <div className="space-y-4 p-5 ps-8 md:ps-5 md:pe-20" >
                <h1 className={` mb-2 ${urbanist.className}`} style={{ fontWeight: "500", fontSize: "1.8rem" }}>Why Choose Us?</h1>
                <p className={`text-gray-400  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Discover the key advantages of investing with us.</p>
            </div>





            <div className="md:mx-10">
                <div className="grid md:grid-cols-3 gap-6 p-5 md:mx-10 ">

                    {currentItems.map((item, index) => (
                        <div key={index} className="bg-[#0c0c0c] rounded flex flex-col items-center justify-center p-2">

                            <div className="flex items-center justify-center mb-3">
                                <Image src={item.img} alt="" width={200} height={200} />
                            </div>

                            <div className="text-center p-2">
                                <h1 className={`text-white  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>
                                    {item.title}
                                </h1>

                                <p className={`text-gray-300  ${onest.className}`} style={{ fontWeight: "400", fontSize: "0.8rem" }}>

                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
              
            </div>


            <div className="flex items-center justify-between  border-[#B4B4B4] border-t m-10 md:mx-10 p-5">
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