"use client";
import { PropertyDetails } from "@/app/data/each-properties-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";
import { FaBath, FaBed, FaPhoneVolume, FaRegStar, FaRulerCombined, FaStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdOutlineVerified } from "react-icons/md";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { ImCancelCircle } from "react-icons/im";
import { FaRegCalendar } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { IoVideocam } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { AnyARecord } from "dns";
import { onest } from "@/app/fonts/fonts";

interface Props extends PropertyDetails { onClose: () => void; }
export default function ScheduleVist({
    onClose,
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



    type VisitType = "Live Visit" | "VR Visit" | "consultation";

    const [visitType, setVisitType] = useState<VisitType | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
    });
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendToWhatsApp = () => {
        const phoneNumber = "919072337174";

        let message = `Hello, I want to schedule a visit.\n\n`;
        message += `Visit Type: ${visitType}\n`;
        message += `Name: ${formData.name}\n`;
        message += `Phone: ${formData.phone}\n`;

        if (visitType !== "consultation") {
            message += `Date: ${formData.date}\n`;
            message += `Time: ${formData.time}\n`;
        }

        const encodedMessage = encodeURIComponent(message);

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };
    return (
        <>


            <div id="dialog" aria-labelledby="dialog-title" className={`${onest.className} absolute  inset-0 max-h-none overflow-y-auto backdrop:bg-transparent z-50  bg-black/40 backdrop-blur-sm `}>
                <div className="fixed inset-0 bg-gray-900/50 transition-opacity "></div>
                <div className="flex  mt-10 items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                    <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all sm:w-full  sm:max-w-lg">

                        <div className="bg-black w-full max-w-md p-6 rounded-2xl text-white z-50">


                            <div className="flex justify-end">
                                <ImCancelCircle
                                    onClick=
                                       {onClose} 
                                       
                                    
                                    className="text-xl cursor-pointer"
                                />
                            </div>


                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-500/20 p-4 rounded-full">
                                    <FaRegCalendar className="text-2xl text-orange-500" />
                                </div>
                            </div>

                            {/* TITLE */}
                            <div className="text-center mb-6">
                                <h2 className="text-xl font-semibold">
                                    {!visitType && "Schedule Your Visit"}
                                    {visitType === "Live Visit" && "Schedule Live Visit"}
                                    {visitType === "VR Visit" && "Schedule VR Visit"}
                                    {visitType === "consultation" && "Book Consultation"}
                                </h2>

                                <p className="text-gray-400 text-sm mt-1">
                                    Experience Luxury {overview}
                                </p>
                            </div>


                            {!visitType && (
                                <div className="flex flex-col gap-4">


                                    <button
                                        onClick={() => setVisitType("Live Visit")}
                                        className="border border-neutral-700 p-4 rounded-xl bg-gray-900 hover:border-orange-500 transition flex items-center gap-4"
                                    >
                                        <div className="p-3 bg-gray-800 rounded-xl">
                                            <CiHome className="text-orange-500 text-lg" />
                                        </div>
                                        <div className="text-left">
                                            <h1 className="font-medium">Live Visit</h1>
                                            <p className="text-xs text-gray-400">
                                                Physical site walkthrough
                                            </p>
                                        </div>
                                    </button>


                                    <button
                                        onClick={() => setVisitType("VR Visit")}
                                        className="border border-neutral-700 p-4 rounded-xl bg-gray-900 hover:border-orange-500 transition flex items-center gap-4"
                                    >
                                        <div className="p-3 bg-gray-800 rounded-xl">
                                            <IoVideocam className="text-orange-500 text-lg" />
                                        </div>
                                        <div className="text-left">
                                            <h1 className="font-medium">VR Visit</h1>
                                            <p className="text-xs text-gray-400">
                                                Virtual Reality interactive tour
                                            </p>
                                        </div>
                                    </button>

                                    <button
                                        onClick={() => setVisitType("consultation")}
                                        className="border border-neutral-700 p-4 rounded-xl bg-gray-900 hover:border-orange-500 transition flex items-center gap-4"
                                    >
                                        <div className="p-3 bg-gray-800 rounded-xl">
                                            <FiPhoneCall className="text-orange-500 text-lg" />
                                        </div>
                                        <div className="text-left">
                                            <h1 className="font-medium">Consultation</h1>
                                            <p className="text-xs text-gray-400">
                                                Speak with an agent now
                                            </p>
                                        </div>
                                    </button>

                                </div>
                            )}

                            {visitType && (
                                <div>

                                    {/* BACK */}
                                    <p
                                        onClick={() => setVisitType(null)}
                                        className="text-orange-800 items-start flex text-sm mb-4 cursor-pointer"
                                    >
                                        ← Change Method ({visitType})
                                    </p>

                                    {(visitType === "Live Visit" || visitType === "VR Visit") && (
                                        <div className="flex justify-between w-full gap-2 mb-6">

                                            <div>
                                                <label className="text-xs text-gray-400 tracking-widest  items-start flex">
                                                    SELECT DATE
                                                </label>
                                                <input
                                                    type="date"
                                                    name="date"
                                                    onChange={handleChange}
                                                    className="w-full mt-2 bg-gray-800  px-8 p-3 rounded-xl focus:border-orange-500"
                                                />
                                            </div>


                                            <div>
                                                <label className="text-xs text-gray-400 tracking-widest flex items-start">
                                                    TIME SLOT
                                                </label>
                                                <input
                                                    type="time"
                                                    name="time"
                                                    onChange={handleChange}
                                                    className="w-full mt-2 bg-gray-800 px-8 p-3 rounded-xl focus:border-orange-500"
                                                />
                                            </div>

                                        </div>
                                    )}

                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-gray-800 p-3 rounded-lg mb-3"
                                    />

                                    <input
                                        type="text"
                                        name="phone"
                                        placeholder="+91 00000 00000"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-gray-800 p-3 rounded-lg mb-4"
                                    />


                                    <button onClick={sendToWhatsApp} className="w-full py-3 rounded-lg bg-linear-to-r from-orange-500 to-yellow-500 font-medium shadow-lg">
                                        {visitType === "consultation"
                                            ? "Call Now"
                                            : "Confirm Booking"}
                                    </button>

                                </div>
                            )}

                        </div>
                    </div>


                </div>
            </div >

        </>
    );
}