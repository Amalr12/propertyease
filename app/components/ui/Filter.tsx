"use client";
import { useState } from "react";

export default function FilterSidebar({ filters, setFilters }: { filters: any; setFilters: React.Dispatch<React.SetStateAction<any>> }) {
    const [selectedBHK, setSelectedBHK] = useState("");

    const bhkOptions = ["1BHK", "2BHK", "3BHK", "4BHK", "5BHK"];

    return (
        <div className="bg-[#0c0c0c] text-white p-5 rounded-2xl  w-10rem space-y-6 shadow-lg">

            {/* Title */}
            <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">Smart Filters</h2>
                <button
                    onClick={() => setFilters({})}
                    className="text-sm text-gray-400"
                >
                    Reset
                </button>
            </div>

            {/* Property Type */}
            <div>
                <p className="text-sm mb-2 text-gray-400">Property Type</p>
                <div className="space-y-2">
                    {["Apartment", "Villa", "Plot"].map((type) => (
                        <label key={type} className="flex items-center gap-2 text-sm">
                            <input type="checkbox" className="accent-orange-500" />
                            {type}
                        </label>
                    ))}
                </div>
            </div>

            {/* Price */}
            <div>
                <p className="text-sm mb-2 text-gray-400">Price Range</p>
                <input
                    type="range"
                    min="25"
                    max="200"
                    className="w-full accent-orange-500"
                    onChange={(e) =>
                        setFilters((prev: any) => ({ ...prev, price: e.target.value }))
                    }
                />
                <div className="flex justify-between text-xs text-gray-400">
                    <span>₹25L</span>
                    <span>₹200L+</span>
                </div>
            </div>

            {/* Bedrooms */}
            <div>
                <p className="text-sm mb-2 text-gray-400">Bedrooms</p>
                <div className="flex flex-wrap gap-2">
                    {bhkOptions.map((bhk) => (
                        <button
                            key={bhk}
                            onClick={() => {
                                setSelectedBHK(bhk);
                                setFilters((prev: any) => ({ ...prev, bhk }));
                            }}
                            className={`px-3 py-1 rounded-lg text-sm ${selectedBHK === bhk
                                    ? "bg-white text-black"
                                    : "bg-gray-800"
                                }`}
                        >
                            {bhk}
                        </button>
                    ))}
                </div>
            </div>

            {/* Amenities */}
            <div>
                <p className="text-sm mb-2 text-gray-400">Amenities</p>
                {["Parking", "Pool", "Gym", "Park"].map((item) => (
                    <label key={item} className="flex items-center gap-2 text-sm">
                        <input type="checkbox" className="accent-orange-500" />
                        {item}
                    </label>
                ))}
            </div>

            {/* Apply Button */}
            <button className="w-full bg-linear-to-r from-orange-500 to-yellow-500 py-2 rounded-lg font-semibold">
                Apply Filters
            </button>
        </div>
    );
}