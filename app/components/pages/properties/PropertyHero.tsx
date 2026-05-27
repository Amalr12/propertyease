"use client";
import { onest, urbanist } from "@/app/fonts/fonts";
import { useMemo, useEffect, useRef, useState } from "react";
import { FaIndianRupeeSign, FaLocationDot } from "react-icons/fa6";
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
      const [open, setOpen] = useState(false);
      const [open2, setOpen2] = useState(false);
      const [open3, setOpen3] = useState(false);
      const [open4, setOpen4] = useState(false);
      const [open5, setOpen5] = useState(false);

      const districtDropdownRef = useRef<HTMLDivElement>(null);
      const bhkDropdownRef = useRef<HTMLDivElement>(null);
      const priceDropdownRef = useRef<HTMLDivElement>(null);
      const sizeDropdownRef = useRef<HTMLDivElement>(null);
      const yearDropdownRef = useRef<HTMLDivElement>(null);
    
      // Close dropdowns on outside click
      useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
          if (open && districtDropdownRef.current && !districtDropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
          }
          if (open2 && bhkDropdownRef.current && !bhkDropdownRef.current.contains(event.target as Node)) {
            setOpen2(false);
          }
          if (open3 && priceDropdownRef.current && !priceDropdownRef.current.contains(event.target as Node)) {
            setOpen3(false);
          }
          if (open4 && sizeDropdownRef.current && !sizeDropdownRef.current.contains(event.target as Node)) {
            setOpen4(false);
          }
          if (open5 && yearDropdownRef.current && !yearDropdownRef.current.contains(event.target as Node)) {
            setOpen5(false);
          }
        }
        if (open || open2 || open3 || open4 || open5) {
          document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [open, open2, open3, open4, open5]);
    const [sortOrder, setSortOrder] = useState<"low" | "high">("low");
    const [selectedProperty, setSelectedProperty] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
   
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
            <div className={`w-full  relative pt-10 ${onest.className}`} >
                <div className="flex flex-col relative sm:min-h-[60vh] lg:min-h-screen min-h-[40vh]  pt-30   " style={{
                    backgroundImage: "url('/propertybg.png')",

                    backgroundRepeat: "no-repeat",


                }}>
                    <div className="absolute top-0 left-0 w-full   min-h-screen md:min-h-screen  "></div>
                    <div className={`${urbanist.className} space-y-4 text-4xl md:text-6xl font-medium z-10 p-10  flex flex-col gap-6 items-start justify-center`}>
                        <h1 className="">
                            Find Your Dream Property
                        </h1>

                        <p className="text-sm md:text-lg max-w-xl">
                            Welcome to Estatein, where your dream property awaits in every corner of our beautiful world. Explore our curated selection of properties, each offering a unique story and a chance to redefine your life. With categories to suit every dreamer, your journey
                        </p>
                    </div>

                   <div className="relative z-20 px-3 md:px-5 mt-5 md:mt-28 lg:mt-29">
                        <div className="  grid grid-cols-1 md:grid-cols-[1fr_4fr_1fr] gap-4   justify-center">
                                      <div></div>
                                      <div
                          className={`
                            ${urbanist.className}
                            bg-black/90
                            rounded-2xl
                            md:rounded-t-xl md:rounded-b-none
                            p-2
                            sm:p-3
                            w-full
                            grid
                            grid-cols-1
                            sm:grid-cols-[7fr_3fr]
                            lg:grid-cols-[8fr_2fr]
                            gap-2
                            sm:gap-3
                            shadow-lg
                          `}
                        >
                        
                          {/* SEARCH INPUT */}
                          <input
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            placeholder="Search For a Location"
                            className="
                              w-full
                              bg-black
                              border border-gray-800
                              rounded-xl
                              text-white
                              placeholder:text-gray-500
                              outline-none
                              px-3
                              sm:px-4
                              py-3
                              text-sm
                              sm:text-base
                              md:text-lg
                            "
                          />
                        
                          {/* BUTTON */}
                          <button
                            onClick={() => {
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
                            }}
                            className="
                              w-full
                              bg-linear-to-r
                              from-[#EA8843]
                              to-[#FFB60D]
                              text-white
                              py-3
                              px-4
                              rounded-xl
                              flex
                              items-center
                              justify-center
                              gap-2
                              cursor-pointer
                              transition-all
                              duration-300
                              hover:opacity-90
                              text-sm
                              sm:text-base
                              md:text-lg
                              font-medium
                            "
                          >
                            <IoSearch className="text-lg sm:text-xl md:text-2xl shrink-0" />
                        
                            <span className="whitespace-nowrap">
                              Find Property
                            </span>
                          </button>
                        
                        </div>
                                      <div></div>
                                    </div>
                        
                                    <div className="grid
                        grid-cols-1
                        md:grid-cols-[0.5fr_9fr_0.5fr]
                        lg:grid-cols-[1fr_8fr_1fr]
                        justify-center
                        
                        px-2 sm:px-4 md:px-3 lg:px-0
                        mb-10
                        w-full">
                                      <div></div>
                        
                                      <div className={`${urbanist.className} bg-black/90
                        rounded-2xl
                        p-2 sm:p-3 md:p-3 lg:p-4
                        flex flex-col
                        sm:flex-col
                        md:flex-row
                        flex-wrap md:flex-nowrap
                        gap-2 md:gap-3
                        shadow-xl
                        w-full
                        overflow-visible z-10`}>
                        
                        
                                        <div
                                          className="flex items-center gap-2 bg-black px-2 sm:px-3 md:px-2 lg:px-4 py-2 rounded-xl border border-gray-700 w-full md:flex-1 min-w-0"
                                          ref={districtDropdownRef}
                                        >
                                          <span ><FaLocationDot className="text-xl text-gray-300" /></span>
                                          <div className="relative w-full min-w-0">
                        
                        
                                            <div
                                              onClick={() => setOpen(!open)}
                                              className="flex items-center justify-between
                        
                        bg-black text-white
                        
                        px-1 sm:px-2 md:px-1 lg:px-3
                        py-1
                        
                        w-full
                        cursor-pointer"
                                            >
                                              <span className="text-gray-300
                        
                        text-[11px]
                        sm:text-xs
                        md:text-[10px]
                        lg:text-sm
                        
                        truncate
                        leading-tight">
                                                {distsSelected || "Location"}
                                              </span>
                                              <FiChevronDown
                                                className={`transition-transform ${open ? "rotate-180" : ""}`}
                                              />
                                            </div>
                        
                                            {/* Dropdown List */}
                                            {open && (
                                              <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-999 max-h-60 overflow-y-auto">
                                                {districts.map((district, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => {
                                                      distsSetSelected(district);
                                                      setOpen(false);
                                                    }}
                                                    className="px-3 py-2
                        
                        hover:bg-gray-800
                        cursor-pointer
                        
                        text-[11px]
                        sm:text-xs
                        md:text-[10px]
                        lg:text-sm"
                                                  >
                                                    {district}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                        
                                        <div
                                          className="flex items-center gap-2 bg-black px-2 sm:px-3 md:px-2 lg:px-4 py-2 rounded-xl border border-gray-700 w-full md:flex-1 min-w-0"
                                          ref={bhkDropdownRef}
                                        >
                                          <span><RiBuilding2Line className="text-xl text-gray-300" /></span>
                                          <div className="relative w-full min-w-0">
                        
                                            {/* Button */}
                                            <div
                                              onClick={() => setOpen2(!open2)}
                                              className="flex items-center justify-between
                        
                        bg-black text-white
                        
                        px-1 sm:px-2 md:px-1 lg:px-3
                        py-1
                        
                        w-full
                        cursor-pointer "
                                            >
                                              <span className="text-gray-300
                        
                        text-[11px]
                        sm:text-xs
                        md:text-[10px]
                        lg:text-sm
                        
                        truncate
                        leading-tight">
                                                {bhkSelected || "Property Type"}
                                              </span>
                                              <FiChevronDown
                                                className={`transition-transform ${open2 ? "rotate-180" : ""}`}
                                              />
                                            </div>
                        
                                            {/* Dropdown List */}
                                            {open2 && (
                                              <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-999 max-h-60 overflow-y-auto">
                                                {bhkOptions.map((bhkoptions, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => {
                                                      bhkSetSelected(bhkoptions);
                                                      setOpen2(false);
                                                    }}
                                                    className="px-3 py-2 hover:bg-gray-800 cursor-pointer text-[11px] sm:text-xs md:text-[10px] lg:text-sm"
                                                  >
                                                    {bhkoptions}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                        
                                        <div
                                          className="flex items-center gap-2 bg-black px-2 sm:px-3 md:px-2 lg:px-4 py-2 rounded-xl border border-gray-700 w-full md:flex-1 min-w-0"
                                          ref={priceDropdownRef}
                                        >
                                          <span><FaIndianRupeeSign className="text-xl text-gray-300" /></span>
                                          <div className="relative w-full min-w-0">
                        
                        
                                            <div
                                              onClick={() => setOpen3(!open3)}
                                              className="flex items-center justify-between
                        
                        bg-black text-white
                        
                        px-1 sm:px-2 md:px-1 lg:px-3
                        py-1
                        
                        w-full
                        cursor-pointer "
                                            >
                                              <span className="text-gray-300
                        
                        text-[11px]
                        sm:text-xs
                        md:text-[10px]
                        lg:text-sm
                        
                        truncate
                        leading-tight">
                                                {priceSelected || "Price Range"}
                                              </span>
                                              <FiChevronDown
                                                className={`transition-transform ${open3 ? "rotate-180" : ""}`}
                                              />
                                            </div>
                                            {open3 && (
                                              <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-999 max-h-60 overflow-y-auto">
                                                {priceOptions.map((priceoption, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => {
                                                      priceSetSelected(priceoption);
                                                      setOpen3(false);
                                                    }}
                                                    className="px-3 py-2 hover:bg-gray-800 cursor-pointer text-[11px] sm:text-xs md:text-[10px] lg:text-sm"
                                                  >
                                                    {priceoption}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                        
                        
                        
                                        <div
                                          className="flex items-center gap-2 bg-black px-2 sm:px-3 md:px-2 lg:px-4 py-2 rounded-xl border border-gray-700 w-full md:flex-1 min-w-0"
                                          ref={sizeDropdownRef}
                                        >
                                          <span><IoCubeSharp className="text-xl text-gray-300" /></span>
                                          <div className="relative w-full min-w-0">
                                            <div
                                              onClick={() => setOpen4(!open4)}
                                              className="flex items-center justify-between
                        
                        bg-black text-white
                        
                        px-1 sm:px-2 md:px-1 lg:px-3
                        py-1
                        
                        w-full
                        cursor-pointer "
                                            >
                                              <span className="text-gray-300
                        
                        text-[11px]
                        sm:text-xs
                        md:text-[10px]
                        lg:text-sm
                        
                        truncate
                        leading-tight text-center flex">
                                                {sizeSelected || "Property Size"}
                                              </span>
                                              <FiChevronDown
                                                className={`transition-transform ${open4 ? "rotate-180" : ""}`}
                                              />
                                            </div>
                                            {open4 && (
                                              <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-999 max-h-60 overflow-y-auto">
                                                {sizeOptions.map((sizeoption, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => {
                                                      sizeSetSelected(sizeoption);
                                                      setOpen4(false);
                                                    }}
                                                    className="px-3 py-2 hover:bg-gray-800 cursor-pointer text-[11px] sm:text-xs md:text-[10px] lg:text-sm "
                                                  >
                                                    {sizeoption}
                                                  </div>
                                                ))}
                                              </div>
                                            )}
                                          </div>
                                        </div>
                        
                                        <div
                                          className="flex items-center gap-2 bg-black px-2 sm:px-3 md:px-2 lg:px-4 py-2 rounded-xl border border-gray-700 w-full md:flex-1 min-w-0"
                                          ref={yearDropdownRef}
                                        >
                                          <span><MdDateRange className="text-xl text-gray-300" /></span>
                                          <div className="relative w-full min-w-0">
                                            <div
                                              onClick={() => setOpen5(!open5)}
                                              className="flex items-center justify-between
                        
                        bg-black text-white
                        
                        px-1 sm:px-2 md:px-1 lg:px-3
                        py-1
                        
                        w-full
                        cursor-pointer 
                        "
                        
                                            >
                                              <span className="text-gray-300
                        
                        text-[11px]
                        sm:text-xs
                        md:text-[10px]
                        lg:text-sm
                        
                        truncate
                        leading-tight">
                                                {yearSelected || "Build Year"}
                                              </span>
                                              <FiChevronDown
                                                className={`transition-transform ${open5 ? "rotate-180" : ""}`}
                                              />
                                            </div>
                                            {open5 && (
                                              <div className="absolute left-0 w-full mt-2 bg-black text-white rounded-lg shadow-lg border border-gray-700 z-999 max-h-60 overflow-y-auto">
                                                {yearOptions.map((yearoption, index) => (
                                                  <div
                                                    key={index}
                                                    onClick={() => {
                                                      yearSetSelected(yearoption);
                                                      setOpen5(false);
                                                    }}
                                                    className="px-3 py-2 hover:bg-gray-800 cursor-pointer text-[11px] sm:text-xs md:text-[10px] lg:text-sm"
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
                </div>

                <div className="max-w-6xl mx-auto p-5 md:flex block justify-between items-center ">
                    <div>

                        <h1 className="md:text-4xl text-xl font-bold mb-5" style={{ fontSize: "1.8rem", fontWeight: "600" }}>
                            Properties in {activeDistrict || "All Locations"}
                        </h1>
                        <h2>{finalProperties.length} Properties Found</h2>
                    </div>

                    <div className="flex  items-center justify-between gap-3 sm:gap-4 mt-5 text-center">

                        {/* 🔹 Sort Dropdown */}
                        <div className="w-full   sm:w-auto bg-black/90 rounded-lg text-white px-3 py-5 sm:px-5 overflow-hidden text-center">

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
                        <div className="flex  gap-2 bg-black/90 py-2 rounded-lg justify-center">

                            <button
                                onClick={() => setView("card")}
                                className={`px-4 py-3 rounded cursor-pointer ${view === "card" ? " text-orange-500" : "text-gray-300"}`}
                            >
                                <BiGridAlt className="text-2xl sm:text-xl " />
                            </button>

                            <button
                                onClick={() => setView("map")}
                                className={`px-4 py-3 rounded cursor-pointer ${view === "map" ? " text-orange-500" : "text-gray-300"}`}
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
                  
                    <div className="grid sm:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6">
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