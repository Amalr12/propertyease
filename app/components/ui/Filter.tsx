"use client";
import { onest } from "@/app/fonts/fonts";
import { useState, useEffect } from "react";
import { CiFilter } from "react-icons/ci";

export default function FilterSidebar({ filters, setFilters }: any) {
    const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK"];

    // 🔥 LOCAL STATE (temporary selections)
    const [localFilters, setLocalFilters] = useState(filters);

    // keep in sync when reset from parent
    useEffect(() => {
        setLocalFilters(filters);
    }, [filters]);

    return (
        <div className={`bg-[#0c0c0c] text-white p-5 rounded-2xl space-y-4 ${onest.className}`}>

            <div className="flex justify-between items-center">
                <div className="text-xl flex items-center justify-around">
                    <CiFilter className="text-orange-500" />
                    <h1 >Smart Filters</h1>
                </div>


                <button
                    onClick={() => {
                        const reset = {
                            types: [],
                            bhk: "",
                            price: 200,
                            amenities: [],
                        };
                        setLocalFilters(reset);
                        setFilters(reset);
                    }}
                >
                    Reset
                </button>

            </div>
            {/* TYPE */}
            <div>
                <p>Property Type</p>
                {["Apartment", "Villa", "Plot"].map((type) => (
                    <label key={type} className="flex text-gray-500 items-center ms-2">
                        <input className="bg-gray-500 m-2"
                            type="checkbox"
                            checked={localFilters.types.includes(type)}
                            onChange={() =>
                                setLocalFilters((prev: any) => ({
                                    ...prev,
                                    types: prev.types.includes(type)
                                        ? prev.types.filter((t: string) => t !== type)
                                        : [...prev.types, type],
                                }))
                            }
                        />{" "}
                        {type}
                    </label>
                ))}
            </div>

            {/* PRICE */}
            <div>
                <p> Price Range (Lakhs)</p>
                <input className="w-full"
                    type="range"
                    min="25"
                    max="200"
                    value={localFilters.price}
                    onChange={(e) =>
                        setLocalFilters((prev: any) => ({
                            ...prev,
                            price: Number(e.target.value),
                        }))
                    }
                />
                <p>{localFilters.price} Lakh</p>
            </div>

            {/* BHK */}
            <div>
                <p>Bedrooms</p>
                <div className="flex gap-2 flex-wrap  text-gray-500 ">
                    {bhkOptions.map((b) => (
                        <button
                            key={b}
                            onClick={() =>
                                setLocalFilters((prev: any) => ({
                                    ...prev,
                                    bhk: b,
                                }))
                            }
                            className={`px-3 py-1 rounded ${localFilters.bhk === b ? "bg-white text-black" : "bg-gray-700"
                                }`}
                        >
                            {b}
                        </button>
                    ))}
                </div>
            </div>

            {/* AMENITIES */}
            <div>
                <p>Amenities</p>
                {["Parking", "Pool", "Gym", "Park"].map((item) => (
                    <label key={item} className="flex  text-gray-500 items-center ms-2">
                        <input
                        className="m-2"
                            type="checkbox"
                            checked={localFilters.amenities.includes(item)}
                            onChange={() =>
                                setLocalFilters((prev: any) => ({
                                    ...prev,
                                    amenities: prev.amenities.includes(item)
                                        ? prev.amenities.filter((a: string) => a !== item)
                                        : [...prev.amenities, item],
                                }))
                            }
                        />{" "}
                        {item}
                    </label>
                ))}
            </div>

            {/* ✅ APPLY BUTTON */}
            <button
                onClick={() => setFilters(localFilters)}
                className="w-full bg-linear-to-r from-orange-500 to-yellow-500 py-2 rounded-lg font-semibold"
            >
                Apply Filters
            </button>
        </div>
    );
}