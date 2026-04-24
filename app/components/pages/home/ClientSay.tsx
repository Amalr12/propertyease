"use client";
import { onest, urbanist } from "@/app/fonts/fonts";
import Image from "next/image";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const faqs = [
    {
        id: 1,
        question: "How do I search for properties on Propertyease?",
        answer: "Learn how to use our user-friendly search tools to find properties that match your criteria."
    },
    {
        id: 2,
        question: "What documents do I need to sell my property?",
        answer: "Find out about the necessary documentation required for listing your property with us."
    },
    {
        id: 3,
        question: "How can I contact an agent?",
        answer: "Discover the different ways you can get in touch with our experienced agents."
    },
    {
        id: 4,
        question: "Is there any brokerage fee?",
        answer: "We offer zero brokerage on selected properties to make your buying process smoother."
    },
    {
        id: 5,
        question: "Can I schedule a site visit?",
        answer: "Yes, you can easily schedule a free site visit through our platform."
    },
    {
        id: 6,
        question: "Do you provide home loan assistance?",
        answer: "We help you connect with top banks for easy and fast home loan approvals."
    },
    {
        id: 7,
        question: "Are properties verified?",
        answer: "All listings go through a strict verification process to ensure authenticity."
    },
    {
        id: 8,
        question: "Can I list my property?",
        answer: "Yes, you can list your property easily by signing up and submitting details."
    },
    {
        id: 9,
        question: "How do I track my property status?",
        answer: "Use your dashboard to track listing status and customer interactions."
    },
    {
        id: 10,
        question: "Do you offer customer support?",
        answer: "Yes, our support team is available 24/7 to assist you with any queries."
    }
];

const testimonials = [
    {
        id: 1,
        title: "Exceptional Service!",
        description:
            "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
        name: "Wade Warren",
        location: "USA, California",
        image: "/user1.png",
        rating: 5
    },
    {
        id: 2,
        title: "Efficient and Reliable",
        description:
            "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn’t be happier with the results.",
        name: "Emelie Thomson",
        location: "USA, Florida",
        image: "/user2.png",
        rating: 5
    },
    {
        id: 3,
        title: "Trusted Advisors",
        description:
            "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive.",
        name: "John Mars",
        location: "USA, Nevada",
        image: "/user3.png",
        rating: 5
    },
    {
        id: 4,
        title: "Smooth Experience",
        description:
            "From start to finish, everything was seamless. The team handled every detail with care and ensured we were always informed.",
        name: "Sophia Miller",
        location: "USA, Texas",
        image: "/user4.png",
        rating: 5
    },
    {
        id: 5,
        title: "Highly Professional",
        description:
            "Their professionalism and deep market knowledge helped us make the right investment decision.",
        name: "Liam Anderson",
        location: "USA, New York",
        image: "/user5.png",
        rating: 4
    },
    {
        id: 6,
        title: "Amazing Support",
        description:
            "The support team was always available to answer our questions. It made the whole process stress-free.",
        name: "Olivia Brown",
        location: "USA, Chicago",
        image: "/user6.png",
        rating: 5
    },
    {
        id: 7,
        title: "Great Value Deals",
        description:
            "We found the perfect property at a great price thanks to their expert guidance.",
        name: "Noah Wilson",
        location: "USA, Seattle",
        image: "/user7.png",
        rating: 4
    },
    {
        id: 8,
        title: "User-Friendly Process",
        description:
            "The entire experience was smooth and easy to follow. Everything was well organized.",
        name: "Ava Taylor",
        location: "USA, Boston",
        image: "/user8.png",
        rating: 5
    },
    {
        id: 9,
        title: "Excellent Communication",
        description:
            "They kept us updated at every step and made sure we understood all details clearly.",
        name: "James Thomas",
        location: "USA, Denver",
        image: "/user9.png",
        rating: 5
    },
    {
        id: 10,
        title: "Top-Notch Service",
        description:
            "I would highly recommend Estatein to anyone looking for reliable and professional real estate services.",
        name: "Isabella Martinez",
        location: "USA, Miami",
        image: "/user10.png",
        rating: 5
    }
];
export default function ClientSay() {

    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3;

    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const currentItems = testimonials.slice(startIndex, startIndex + itemsPerPage);
    const currentItems2 = faqs.slice(startIndex, startIndex + itemsPerPage);
    return (
        <>
            <div>
                <div className="space-y-4 m-5  ps-10 pe-20" >
                    <h1 className={` mb-2 ${onest.className}`} style={{ fontWeight: "500", fontSize: "1.8rem" }}>What Our Clients Say</h1>
                    <p className={`text-gray-400  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 p-5">


                    {currentItems.map((item) => (
                        <div key={item.id} className={`bg-[#0c0c0c] p-6 rounded-xl text-white mb-2 ${onest.className}`}>


                            <div className="flex gap-2 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-500" />
                                ))}
                            </div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>


                            <p className="text-gray-400 text-sm mb-4">
                                {item.description}
                            </p>


                            <div className="flex items-center gap-3">
                                <img src={item.image} className="w-10 h-10 rounded-full" />
                                <div>
                                    <p className="text-sm font-medium">{item.name}</p>
                                    <p className="text-xs text-gray-500">{item.location}</p>
                                </div>
                            </div>

                        </div>
                    ))}


                </div>
            </div>
            <div className="bg-gray-300 h-1 w-full m-4"></div>
            <div className="flex items-center justify-between  m-4">
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

            <div className="space-y-4 m-5  ps-10 pe-20" >
                <h1 className={` mb-2 ${onest.className}`} style={{ fontWeight: "500", fontSize: "1.8rem" }}>Frequently Asked Questions</h1>
                <p className={`text-gray-400  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 p-5">
                {currentItems2.map((item) => (
                    <div
                        key={item.id}
                        className={`bg-[#0c0c0c] ${onest.className} text-white rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition`}
                    >
                        <div>
                            <h2 className="text-lg font-semibold mb-3">
                                {item.question}
                            </h2>

                            <p className="text-gray-400 text-sm mb-6">
                                {item.answer}
                            </p>
                        </div>

                        <button className={`bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded mt-5 ${onest.className}`}>
                            Read More
                        </button>
                    </div>
                ))}
            </div>
            <div className="bg-gray-300 h-1 w-full m-4"></div>
            <div className="flex items-center justify-between  m-4">
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

            <div>
                <div className="grid md:grid-cols-[8fr_1fr]">
                    <div className="m-5"><h1 className={` mb-2 ${onest.className}`} style={{ fontWeight: "500", fontSize: "1.8rem" }}>
                        Start Your Real Estate Journey Today
                    </h1>
                        <p className={`text-gray-400  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                    </div>
                    <div className="m-2">

                        <button className={`bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded mt-5 ${onest.className}`}>
                            Explore Properties
                        </button>

                    </div>
                </div>
                <div className="flex justify-between m-0">
                    <div>
                        <Image className="" src="/abstractdesign.png" alt="" width={200} height={200} />
                    </div>
                    <div>
                          <Image src="/img-removebg-preview.png" alt="" width={200} height={200} />
                    </div>
                </div>
            </div>



        </>
    );
}