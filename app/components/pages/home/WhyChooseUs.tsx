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
            <div className="space-y-4 p-5 md:ps-5  md:pe-20" >
                <h1 className={` mb-2 ${urbanist.className}`} style={{ fontWeight: "500", fontSize: "1.8rem" }}>Why Choose Us?</h1>
                <p className={`text-[#121010]  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Discover the key advantages of investing with us.</p>
            </div>





            <div className="">
                <div className="grid md:grid-cols-3 gap-6 p-5 ">

                    {currentItems.map((item, index) => (
                        <div key={index} className="bg-[#0c0c0c] rounded flex flex-col items-center justify-center p-2">

                            <div className="flex items-center justify-center mb-3">
                                <Image src={item.img} alt="" width={200} height={200} />
                            </div>

                            <div className="text-center p-2">
                                <h1 className={`text-white  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>
                                    {item.title}
                                </h1>

                                <p className={`text-[#999999]  ${onest.className}`} style={{ fontWeight: "400", fontSize: "0.8rem" }}>

                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
              
            </div>


            <div className="md:flex hidden items-center justify-end  border-[#B4B4B4] border-t  pt-5 m-5">
               
                <div className="p-2  m-3 space-x-1 ">
                    <button className="hover:bg-[#191919] border border-black text-black  p-3 cursor-pointer rounded-full hover:text-white"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
                        disabled={currentPage === 0}
                    >
                        <FaArrowLeft className="hover:text-white"/>
                    </button>

                    <button className="hover:bg-[#191919] border border-black text-black  p-3 cursor-pointer rounded-full hover:text-white"
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
                        disabled={currentPage === totalPages - 1}
                    >
                        <FaArrowRight className="hover:text-white"/>
                    </button>

                </div>
            </div>

        </>
    );
}