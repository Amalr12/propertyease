import { onest, urbanist } from "@/app/fonts/fonts";
import LocationCard from "./LocationCard";

import Link from "next/link";
import Image from "next/image";

export default function OfficeLocation() {
    return (
        <>
            <div className=" m-5">
                <div className="lg:max-w-6xl md:max-w-8xl p-4 mb-10">
                    <h2 className={` ${urbanist.className} font-medium text-[#131212] text-xl sm:text-2xl md:text-3xl lg:text-4xl`} style={{ fontWeight: "600", fontStyle: "semibold" }}>
                        Discover Our Office Locations
                    </h2>
                    <p className={`text-[#0F0E0E] max-w-3xl text-sm md:text-base ${urbanist.className}`}>
                       Propertyease is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Propertyease office nearest to you
                    </p>
                </div>
                <div className="lg:max-w-8xl md:max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-4 md:p-5">


                    <LocationCard type="Main Headquarters" title="123 Propertyease Plaza, City Center, Metropolis" description="Our main headquarters serve as the heart of operations..."
                    />


                    <LocationCard type="Regional Offices" title="456 Urban Avenue, Downtown District, Metropolis" description="Presence extends to multiple regions with expert teams..."
                    />

                </div>
            </div>
            <div className="md:flex hidden items-center justify-between  border-[#B4B4B4] border-t  p-5"></div>

            <div className="">
                <div className="grid md:grid-cols-[4fr_1fr] items-center m-5">
                    <div className="m-5  text-[#000000]"><h1 className={` mb-2 ${urbanist.className}`} style={{ fontWeight: "600", fontSize: "1.8rem" }}>
                        Start Your Real Estate Journey Today
                    </h1>
                        <p className={`text-gray-400  ${urbanist.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                    </div>
                    <div className="m-2 text-center">

                        <Link href={"/property"}>
                            <button className={`bg-linear-to-r from-[#EA8843] to-[#FFB60D] text-white cursor-pointer px-4 py-2 md:px-2 md:py-2 text-xs lg:text-base sm:text-xs md:text-xs rounded mt-5 ${onest.className}`}>
                                Explore Properties
                            </button>
                        </Link>

                    </div>
                </div>
                 
               
            </div>
        </>
    );
}