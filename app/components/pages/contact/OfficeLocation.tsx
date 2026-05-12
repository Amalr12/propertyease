import { onest, urbanist } from "@/app/fonts/fonts";
import LocationCard from "./LocationCard";

import Link from "next/link";

export default function OfficeLocation() {
    return (
        <>
            <div className="p-5 m-5">
                <div className="max-w-6xl mx-auto mb-10">
                    <h2 className={` ${urbanist.className} font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl`} style={{ fontWeight: "600", fontStyle: "semibold" }}>
                        Discover Our Office Locations
                    </h2>
                    <p className="text-gray-600 max-w-3xl text-sm md:text-base">
                        Propertyease is here to serve you across multiple locations. Whether you're looking
                        to meet our team, discuss real estate opportunities, or simply drop by for a chat,
                        we have offices conveniently located to serve your needs.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">


                    <LocationCard type="Main Headquarters" title="123 Propertyease Plaza, City Center, Metropolis" description="Our main headquarters serve as the heart of operations..."
                    />


                    <LocationCard type="Regional Offices" title="456 Urban Avenue, Downtown District, Metropolis" description="Presence extends to multiple regions with expert teams..."
                    />

                </div>
            </div>
            <div className="bg-gray-300 h-1 w-full m-4"></div>

            <div className="">
                <div className="grid md:grid-cols-[4fr_1fr] items-center m-5">
                    <div className="m-5 p-10"><h1 className={` mb-2 ${urbanist.className}`} style={{ fontWeight: "600", fontSize: "1.8rem" }}>
                        Start Your Real Estate Journey Today
                    </h1>
                        <p className={`text-gray-400  ${urbanist.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                    </div>
                    <div className="m-2 text-center">

                        <Link href={"/property"}>
                            <button className={`bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded mt-5 ${onest.className}`}>
                                Explore Properties
                            </button>
                        </Link>

                    </div>
                </div>
               
            </div>
        </>
    );
}