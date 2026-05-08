"use client";
import { onest, urbanist } from "@/app/fonts/fonts";
import { useMemo, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { IoCubeSharp, IoSearch } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { RiBuilding2Line, RiMap2Line } from "react-icons/ri";
import { useRouter, useSearchParams } from "next/navigation";
import { properties } from "@/app/data/each-properties-data";
import FilterSidebar from "../../ui/Filter";
import { PropertyCard } from "./PropertyCard";
import { BiGridAlt } from "react-icons/bi";
import PropertyMap from "./Propertymap";
import ScheduleVist from "../../ui/ScheduleVisit";


const districts = [
    "Ernakulam",
    "Trivandrum",
    "Kozhikode",
    "Thrissur",
    "Kannur",
    "Kollam",
];

const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];
const priceOptions = ["Below 50 Lakh", "50 Lakh - 1 Crore", "1 Crore - 2 Crore", "Above 2 Crore"];
const sizeOptions = ["Below 500 sqft", "500 - 1000 sqft", "1000 - 2000 sqft", "Above 2000 sqft"];
const yearOptions = ["Before 2000", "2000 - 2010", "2010 - 2020", "After 2020"];


export default function PropertyHero() {
    const [sortOrder, setSortOrder] = useState<"low" | "high">("low");
    const [selectedProperty, setSelectedProperty] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const router = useRouter();
    const [searchText, setSearchText] = useState("");


    const [distsSelected, distsSetSelected] = useState("");
    const [bhkSelected, bhkSetSelected] = useState("");
    const [priceSelected, priceSetSelected] = useState("");
    const [sizeSelected, sizeSetSelected] = useState("");
    const [yearSelected, yearSetSelected] = useState("");
    type FilterType = {
        district: string;
        bhk: string;
        price: string;
        size: string;
        year: string;
    };

    const searchParams = useSearchParams();

    const districtParam = searchParams.get("district") || "";
    const bhk = searchParams.get("bhk") || "";
    const price = searchParams.get("price") || "";
    const size = searchParams.get("size") || "";
    const year = searchParams.get("year") || "";


    const activeDistrict =
        searchText || distsSelected || districtParam;

    const filtered = properties.filter((item) => {
        return (
            (!activeDistrict ||
                item.district.toLowerCase().includes(activeDistrict.toLowerCase())) &&
            (!bhk || item.bhk === bhk) &&
            (!price || item.price === price) &&
            (!size || item.size === size) &&
            (!year || item.year === year)
        );
    });
    const [view, setView] = useState<"card" | "map">("card");


    const handleOpenModal = (property: any) => {
        setSelectedProperty(property);
        setIsModalOpen(true);
    };
    const [filters, setFilters] = useState({
        types: [] as string[],
        bhk: "",
        price: 200,
        amenities: [] as string[],
    });

    // 🔥 FILTER LOGIC
    const finalProperties = useMemo(() => {
        let data = properties.filter((p) => {

            // 🔍 DISTRICT SEARCH
            if (
                activeDistrict &&
                !p.district.toLowerCase().includes(activeDistrict.toLowerCase())
            ) {
                return false;
            }

            // 🏠 TYPE FILTER
            if (filters.types.length && !filters.types.includes(p.type)) {
                return false;
            }

            // 🛏️ BHK
            if (filters.bhk && p.bhk !== filters.bhk) {
                return false;
            }

            // 💰 PRICE (sidebar range)
            const priceValue = parseInt(p.price.replace(/[^0-9]/g, ""));
            if (filters.price && priceValue > filters.price * 100000) {
                return false;
            }

            // 🎯 DROPDOWN FILTERS (top bar)
            if (bhk && p.bhk !== bhk) return false;
            if (price && p.price !== price) return false;
            if (size && p.size !== size) return false;
            if (year && p.year !== year) return false;

            // 🧩 AMENITIES
            if (
                filters.amenities.length &&
                !filters.amenities.every((a) => p.amenities.includes(a))
            ) {
                return false;
            }

            return true;
        });

        // 🔽 SORTING
        const getNumericPrice = (price: string) => {
            const value = parseFloat(price.replace(/[^0-9.]/g, ""));

            if (price.includes("Cr")) {
                return value * 100; // 1 Cr = 100 Lakh
            }

            return value; // already in Lakh
        };

        data.sort((a, b) => {
            const priceA = getNumericPrice(a.price);
            const priceB = getNumericPrice(b.price);

            return sortOrder === "low"
                ? priceA - priceB
                : priceB - priceA;
        });

        return data;
    }, [properties, activeDistrict, filters, bhk, price, size, year, sortOrder]);

    return (
        <>
            <div className={`w-100 relative pt-10 ${onest.className}`} >
                <div className="flex flex-col  min-h-[40vh] md:min-h-screen pt-30   " style={{
                    backgroundImage: "url('/propertybg.png')",

                    backgroundRepeat: "no-repeat",


                }}>
                    <div className="absolute top-0 left-0 w-full   min-h-[30vh] md:min-h-screen bg-black/30 "></div>
                    <div className={`${urbanist.className} space-y-4 text-4xl md:text-6xl font-medium z-10 p-10  flex flex-col gap-6 items-start justify-center`}>
                        <h1 className="">
                            Find Your Dream Property
                        </h1>

                        <p className="text-sm md:text-lg max-w-xl">
                            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey
                        </p>
                    </div>

                    <div className="  grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] gap-4 mt-10 pt-20 justify-center">
                        <div></div>
                        <div className="bg-black/90 rounded-t-xl rounded-b-none p-2 sm:p-3 grid grid-cols-1 sm:grid-cols-[8fr_2fr] gap-2 sm:gap-3 shadow-lg">
                            <input value={searchText}
                                onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search For a Location" className="bg-black rounded-xl text-white outline-none px-2 sm:px-4 py-2 text-sm sm:text-base"
                            />

                            <button onClick={() => {
                                const queryObj: Record<string, string> = {};

                                if (searchText) {
                                    queryObj.district = searchText;
                                } else if (distsSelected) {
                                    queryObj.district = distsSelected;
                                }

                                if (bhkSelected) queryObj.bhk = bhkSelected;
                                if (priceSelected) queryObj.price = priceSelected;
                                if (sizeSelected) queryObj.size = sizeSelected;
                                if (yearSelected) queryObj.year = yearSelected;

                                const query = new URLSearchParams(queryObj).toString();

                                router.push(`/property?${query}`);
                            }} className="bg-linear-to-r from-orange-500 to-yellow-500 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center sm:justify-start gap-1 sm:gap-2 text-sm sm:text-base">
                                <IoSearch className="text-white text-lg sm:text-xl" /> <span className=" sm:inline">Find Property</span>
                            </button>
                        </div>
                        <div></div>
                    </div>

                    <div className="grid md:grid-cols-[1fr_8fr_1fr]   justify-center">
                        <div></div>
                        <div className=" bg-black/90 rounded-xl p-3 flex flex-wrap md:flex-nowrap gap-3 shadow-xl">


                            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg border border-gray-700 flex-1">
                                <span ><FaLocationDot className="text-xl text-gray-300" /></span>
                                <div className="relative w-full max-w-xs">


                                    <div
                                        onClick={() => setOpen(!open)}
                                        className="flex items-center justify-between bg-black text-white px-4 py-2 "
                                    >
                                        <span className="text-gray-300 text-sm">
                                            {distsSelected || "Select District"}
                                        </span>
                                        <FiChevronDown
                                            className={`transition-transform ${open ? "rotate-180" : ""}`}
                                        />
                                    </div>

                                    {/* Dropdown List */}
                                    {open && (
                                        <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border  border-gray-700 z-50">
                                            {districts.map((district, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        distsSetSelected(district);
                                                        setOpen(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                                                >
                                                    {district}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-black px-4 py-1 rounded-lg border border-gray-700 flex-1">
                                <span><RiBuilding2Line className="text-xl text-gray-300" /></span>
                                <div className="relative w-full max-w-xs">

                                    {/* Button */}
                                    <div
                                        onClick={() => setOpen2(!open2)}
                                        className="flex items-center justify-between bg-black text-white px-4 py-2 cursor-pointer "
                                    >
                                        <span className="text-gray-300 text-sm">
                                            {bhkSelected || "Select BHK"}
                                        </span>
                                        <FiChevronDown
                                            className={`transition-transform ${open2 ? "rotate-180" : ""}`}
                                        />
                                    </div>

                                    {/* Dropdown List */}
                                    {open2 && (
                                        <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-50">
                                            {bhkOptions.map((bhkoptions, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        bhkSetSelected(bhkoptions);
                                                        setOpen2(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                                                >
                                                    {bhkoptions}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-black px-4 py-1 rounded-lg border border-gray-700 flex-1">
                                <span><RiBuilding2Line className="text-xl text-gray-300" /></span>
                                <div className="relative w-full max-w-xs">


                                    <div
                                        onClick={() => setOpen3(!open3)}
                                        className="flex items-center justify-between bg-black text-white px-4 py-2 "
                                    >
                                        <span className="text-gray-300 text-sm">
                                            {priceSelected || "Select Price"}
                                        </span>
                                        <FiChevronDown
                                            className={`transition-transform ${open3 ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    {open3 && (
                                        <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-50">
                                            {priceOptions.map((priceoption, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        priceSetSelected(priceoption);
                                                        setOpen3(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                                                >
                                                    {priceoption}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>



                            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg border border-gray-700 flex-1">
                                <span><IoCubeSharp className="text-xl text-gray-300" /></span>
                                <div className="relative w-full max-w-xs">
                                    <div
                                        onClick={() => setOpen4(!open4)}
                                        className="flex items-center justify-between bg-black text-white px-4 py-2 "
                                    >
                                        <span className="text-gray-300 text-sm">
                                            {sizeSelected || "Select Size"}
                                        </span>
                                        <FiChevronDown
                                            className={`transition-transform ${open4 ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    {open4 && (
                                        <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-50">
                                            {sizeOptions.map((sizeoption, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        sizeSetSelected(sizeoption);
                                                        setOpen4(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                                                >
                                                    {sizeoption}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2 bg-black px-4 py-2 rounded-lg border border-gray-700 flex-1">
                                <span><MdDateRange className="text-xl text-gray-300" /></span>
                                <div className="relative w-full max-w-xs">
                                    <div
                                        onClick={() => setOpen5(!open5)}
                                        className="flex items-center justify-between bg-black text-white px-4 py-2 "
                                    >
                                        <span className="text-gray-300 text-sm">
                                            {yearSelected || "Select Year"}
                                        </span>
                                        <FiChevronDown
                                            className={`transition-transform ${open5 ? "rotate-180" : ""}`}
                                        />
                                    </div>
                                    {open5 && (
                                        <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-50">
                                            {yearOptions.map((yearoption, index) => (
                                                <div
                                                    key={index}
                                                    onClick={() => {
                                                        yearSetSelected(yearoption);
                                                        setOpen5(false);
                                                    }}
                                                    className="px-4 py-2 hover:bg-gray-800 cursor-pointer text-sm"
                                                >
                                                    {yearoption}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                        </div>
                        <div></div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto p-5 md:flex block justify-between items-center ">
<div>
    
                        <h1 className="md:text-4xl text-xl font-bold mb-5" style={{fontSize:"1.8rem",fontWeight:"600"}}>
                            Properties in {activeDistrict || "All Locations"}
                        </h1>
                         <h2>{finalProperties.length} Properties Found</h2>
</div>
                   
                    <div className="md:flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 mt-5 text-center">

                        {/* 🔹 Sort Dropdown */}
                        <div className="w-full mb-2  sm:w-auto bg-black/90 rounded-lg text-white px-3 py-5 sm:px-5 overflow-hidden text-center">
                           
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value as "low" | "high")}
                                className="md:w-full bg-transparent text-white outline-none text-sm sm:text-base truncate pr-8"
                            >
                                <option value="low" className="text-black text:sm">
                                    Price: Low to High
                                </option>

                                <option value="high" className="text-black text:sm">
                                    Price: High to Low
                                </option>
                            </select>
                        </div>

                        {/* 🔹 View Toggle */}
                        <div className="flex  gap-2 bg-black/90 py-3 rounded-lg justify-center">

                            <button
                                onClick={() => setView("card")}
                                className={`px-4 py-3 rounded ${view === "card" ? "bg-orange-500 text-white" : "text-gray-300"}`}
                            >
                                <BiGridAlt className="text-2xl sm:text-xl " />
                            </button>

                            <button
                                onClick={() => setView("map")}
                                className={`px-4 py-3 rounded ${view === "map" ? "bg-orange-500 text-white" : "text-gray-300"}`}
                            >
                                <RiMap2Line className="text-2xl sm:text-xl" />
                            </button>

                        </div>
                    </div>



                </div>

            </div>
            <div className="grid md:grid-cols-[2fr_4fr] gap-4 p-5 max-w-6xl mx-auto relative">

                {/* LEFT FILTER */}
                <FilterSidebar filters={filters} setFilters={setFilters} />

                {view === "card" ? (
                    <div className="grid sm:grid-cols-3 lg:grid-cols-2 md:cols-2 grid-cols-1 gap-6">
                        {filtered.length > 0 ? (
                            finalProperties.map((item) => (
                                <PropertyCard
                                    key={item.id}
                                    property={item}
                                    onScheduleClick={handleOpenModal}
                                />
                            ))
                        ) : (
                            <p>No properties found</p>
                        )}
                    </div>
                ) : (
                    <div className="w-full h-150">
                        <PropertyMap properties={finalProperties} />
                    </div>
                )}


                {isModalOpen && selectedProperty && (
                    <ScheduleVist
                        {...selectedProperty}
                        onClose={() => setIsModalOpen(false)}
                    />
                )}
            </div>
        </>
    );
}