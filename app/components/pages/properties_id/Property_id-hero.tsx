"use client";
import { PropertyDetails } from "@/app/data/each-properties-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BiRectangle } from "react-icons/bi";
import { FaBath, FaBed, FaPhoneVolume, FaRegStar, FaRulerCombined, FaStar, FaUser } from "react-icons/fa";
import { MdEmail, MdKeyboardArrowLeft, MdOutlineVerified } from "react-icons/md";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Featured from "../home/Featured";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCalendar } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { IoVideocam } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { AnyARecord } from "dns";
import { onest, urbanist } from "@/app/fonts/fonts";


interface Props extends PropertyDetails { onClose?: () => void; }

export default function PropertyHeroSection({
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
    floorPlan, nearby, reviews,
}: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const [modalStatus, setModalStatus] = useState(false)
    const [enquiryModal, setEnquiryModal] = useState(false)

    type VisitType = "Live Visit" | "VR Visit" | "consultation";

    const [visitType, setVisitType] = useState<VisitType | null>(null);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        date: "",
        time: "",
        message: "",
        email: ""
    });
    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const sendToWhatsApp = () => {
        const phoneNumber = "919072337174";

        let message = `Hello, I want to schedule a visit .\n\n`;
        message += `Visit Type: ${visitType}\n`;
        message += `Name: ${formData.name}\n`;
        message += `Phone: ${formData.phone}\n`;
        message += `Message: ${formData.message}\n`;

        if (visitType !== "consultation") {
            message += `Date: ${formData.date}\n`;
            message += `Time: ${formData.time}\n`;
        }

        const encodedMessage = encodeURIComponent(message);

        const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

        window.open(url, "_blank");
    };

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
            <div className="bg-gray-100 relative p-4 mt-20 md:mt-50 ">
                <Link href="/property"><div className="flex justify-start items-center text-xl"><MdKeyboardArrowLeft /> <h1 className="">Back to Listings</h1></div></Link>
                <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr]  lg:grid-cols-[4fr_2fr] gap-2 items-start p-5 ">
                    <div className="space-y-10">
                        <div className="relative w-full rounded-xl overflow-hidden">

    <Image
        src={images[currentIndex]}
        alt="property"
        width={800}
        height={500}
        className="w-full h-auto object-cover rounded-xl"
        priority
    />

    {/* BUTTONS OVER IMAGE */}
    <div className="absolute inset-0 flex items-center justify-between px-3 sm:px-5 z-20">

        <button
            onClick={prevImage}
            className="
                bg-black/50 hover:bg-black/70
                text-white
                p-2 sm:p-3
                rounded-full
                transition
                duration-200
            "
        >
            ◀
        </button>

        <button
            onClick={nextImage}
            className="
                bg-black/50 hover:bg-black/70
                text-white
                p-2 sm:p-3
                rounded-full
                transition
                duration-200
            "
        >
            ▶
        </button>

    </div>
</div>
                        <div className="mt-4 px-2 sm:px-4 p-5">
                            <div className="flex flex-col sm:flex-row gap-3  sm:gap-2 scrollbar-hide sm:pb-2 sm:overflow-x-auto snap-x snap-mandatory">
                                {images.map((img, index) => (
                                    <Image
                                        key={index}
                                        src={img}
                                        width={200}
                                        height={100}
                                        alt="thumbnail"

                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-full sm:w-[17.5rem] sm:h-[40rem] md:w-20 md:h-15 lg:w-[22.5rem] lg:h-[17.5rem]
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
                        <div className="mt-4 px-3 sm:px-4 lg:px-5">

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`
                    relative overflow-hidden rounded-xl cursor-pointer
                    transition-all duration-300 group
                    ${currentIndex === index
                                                ? "ring-2 ring-orange-500 shadow-xl scale-[1.02]"
                                                : "hover:shadow-lg hover:scale-[1.01]"
                                            }
                `}
                                    >
                                        <Image
                                            src={img}
                                            width={500}
                                            height={300}
                                            alt="thumbnail"
                                            className={`
                        w-full
                        h-48 sm:h-52 md:h-56 lg:h-60
                        object-cover
                        transition-transform duration-300
                        group-hover:scale-105
                    `}
                                        />

                                        {/* ACTIVE OVERLAY */}
                                        {currentIndex === index && (
                                            <div className="absolute inset-0 bg-black/10"></div>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className={`bg-black text-white rounded-xl mt-6 p-6 sm:p-6 ${urbanist.className}`}>
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

                        <div className={`mt-4 ${urbanist.className} space-y-2`}>
                            <h1 className={`text-2xl font-bold mt-5 ${urbanist.className}`}>Property Overview </h1>
                            <p>{overview}</p>
                        </div>
                        <div className={`grid md:grid-cols-2 gap-6 mt-3 mb-4 ${urbanist.className}`}>
                            <div>
                                <h1 className={`text-xl font-bold mb-4 ${urbanist.className}`}>Key Highlights</h1>
                                {highlights?.map((item, index) => (
                                    <div key={index} className=" mt-2 flex justify-start gap-3 items-center">
                                        <MdOutlineVerified className="text-xl text-orange-300 items-center" />
                                        <h2 className="font-semibold ">{item}</h2>

                                    </div>
                                ))}
                            </div>
                            <div>
                                <h1 className={`text-xl font-bold mb-4 ${urbanist.className} `}>Why Consider This Property?</h1>
                                {considerations?.map((item, index) => (
                                    <div key={index} className="  mt-2 flex justify-start gap-3 items-center">
                                        <MdOutlineVerified className="text-xl text-orange-300 items-center" />
                                        <h2 className="font-semibold ">{item}</h2>

                                    </div>
                                ))}
                            </div>

                        </div>
                        <div className="mt-5">
                            <h1 className={`text-xl font-bold mb-4 ${urbanist.className}`}>World-class Amenities</h1>
                            <div className="grid md:grid-cols-3 gap-4 mt-3">
                                {amenities?.map((item, index) => (
                                    <div key={index} className=" bg-[#0c0c0c] text-white rounded p-4  flex justify-center gap-3 items-center">
                                        <MdOutlineVerified className="text-xl text-orange-300 items-center" />
                                        <h2 className="font-semibold ">{item}</h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="p-3 sm:p-5 flex items-center justify-center relative w-full overflow-hidden">

                            <TransformWrapper
                                initialScale={1}
                                minScale={1}
                                maxScale={4}
                                centerOnInit
                            >
                                <TransformComponent
                                    wrapperClass="w-full flex justify-center"
                                    contentClass="w-full flex justify-center"
                                >
                                    <Image
                                        src={floorPlan}
                                        alt="floorplan"
                                        width={650}
                                        height={550}
                                        className="
                    w-full
                    max-w-[75]
                    sm:max-w-[125]
                    md:max-w-[162.5]
                    lg:max-w-[187.5]
                    h-auto
                    object-contain
                    rounded-xl
                    cursor-pointer
                    border border-gray-300
                    shadow-lg
                    transition-transform duration-300 hover:scale-[1.02]
                "
                                        priority
                                    />
                                </TransformComponent>
                            </TransformWrapper>

                        </div>
                        <div className="mt-5">
                            <h1 className={`text-xl font-bold mb-4 ${urbanist.className}`}>Location & Connectivity</h1>
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
                        <div className=" sm:p-5 mt-5">
                            <h1 className={`text-xl font-bold mb-4 ${urbanist.className}`}>User Reviews</h1>
                            {reviews.map((item, index) => (
                                <div key={index} className="bg-[#0c0c0c] text-white rounded-xl p-4 sm:p-5 mt-4 mb-4 shadow-lg hover:shadow-xl transition-all">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 mb-4 sm:mb-2">

                                        <div className="flex items-center gap-3 flex-1">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-yellow-500 text-black font-bold text-sm sm:text-base shrink-0">
                                                {item.user.charAt(0).toUpperCase()}
                                            </div>
                                            <div>
                                                <h2 className="font-semibold text-base sm:text-lg leading-tight">{item.user}</h2>
                                            </div>
                                        </div>


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


                                    <div className="text-sm sm:text-base leading-relaxed">
                                        <p className="whitespace-pre-wrap">{item.comment}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                    <div className={`${onest.className} space-y-3 `}>

                        <div className="bg-black text-white rounded-xl p-6 shadow-lg ">
                            <p className="text-gray-400 text-sm">PROPERTY PRICE</p>
                            <h1 className="text-3xl font-bold">{price}</h1>
                            <p className="text-sm text-orange-400 mt-1">
                                Estimated EMI: ₹25K/month
                            </p>

                            <button onClick={() => setEnquiryModal(true)} className="w-full mt-4 bg-linear-to-r from-orange-500 to-yellow-500 py-2 rounded-lg">
                                Send Enquiry
                            </button>

                            <button type="button" onClick={() => setModalStatus(true)} className="cursor-pointer w-full mt-3  bg-gray-800 py-2 rounded-lg">
                                Schedule Visit
                            </button>

                            <p className="text-xs text-gray-400 mt-3">
                                ✔ {status || "Verified by Property Team"}
                            </p>
                        </div>


                        <div className="bg-black text-white rounded-xl p-6 shadow-lg mt-5">
                            <h2 className="font-semibold mb-4">Listed by Agent</h2>

                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 border border-yellow-600 rounded-full mb-3">
                                    <FaUser className="text-yellow-500 text-lg" />
                                </div>
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

                            <Link href={"mailto:amaldaspr1998@gmail.com?subject=Property%20Inquiry&body=Hi,%20I%20am%20interested%20in%20this%20property."}>
                                <button className="w-full mt-3 bg-gray-800 py-2 rounded-lg">
                                    ✉ Email Agent
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
                <Featured />

            </div>
            {modalStatus &&
                <div id="dialog" aria-labelledby="dialog-title" className={`${onest.className} absolute  inset-0 max-h-none overflow-y-auto backdrop:bg-transparent z-50  bg-black/40 backdrop-blur-sm `}>
                    <div className="fixed inset-0 bg-gray-900/50 transition-opacity "></div>
                    <div className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                        <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all ">

                            <div className="bg-black w-full max-w-md p-6 rounded-2xl text-white">


                                <div className="flex justify-end">
                                    <ImCancelCircle
                                        onClick={() => {
                                            setModalStatus(false);
                                            setVisitType(null);
                                        }}
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
                </div>}
            {enquiryModal && (
                <div className="absolute inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">

                    <div className="bg-black text-white w-54 max-w-md p-6 rounded-2xl relative">
                        <button
                            onClick={() => setEnquiryModal(false)}
                            className="absolute top-4 flex justify-end text-xl"
                        >
                            ✕
                        </button>
                        <div className="flex justify-center mb-4">
                            <div className="bg-orange-500/20 p-4 rounded-full">
                                <FaRegCalendar className="text-2xl text-orange-500" />
                            </div>
                        </div>
                        <div className="text-center mb-6">
                            <h2 className="text-xl font-semibold">Enquire Now</h2>
                            <p className="text-gray-400 text-sm mt-1">
                                Send your questions about this property
                            </p>
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-3 rounded-lg mb-3"
                        />

                        <div className="flex gap-2 mb-3">
                            <input
                                type="text"
                                name="phone"
                                placeholder="+91 00000 00000"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-1/2 bg-gray-800 p-3 rounded-lg"
                            />
                            <input
                                type="email"
                                placeholder="name@email.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-1/2 bg-gray-800 p-3 rounded-lg"
                            />
                        </div>

                        <textarea
                            placeholder="Message (optional)"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full bg-gray-800 p-3 rounded-lg mb-4"
                        />

                        <button onClick={sendToWhatsApp} className="w-full py-3 rounded-lg bg-linear-to-r from-orange-500 to-yellow-500 font-medium">
                            Submit Inquiry
                        </button>

                        <p className="text-xs text-gray-400 mt-3 text-center">
                            By clicking submit, you agree to our Terms & Privacy Policy
                        </p>
                    </div>
                </div>
            )}


        </>
    );
}