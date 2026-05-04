"use client";
import { useState } from "react";

interface FilterBarProps {
  filters: {
    district?: string;
    bhk?: string;
    price?: string;
    area?: string;
    year?: string;
  };
  onChange: (name: string, value: string) => void;
}

export default function FilterBar({ filters, onChange }: FilterBarProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    district: false,
    type: false,
    price: false,
    bhk: false,
    area: false,
    year: false,
  });

  const toggleExpanded = (section: string) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const districts = ["Thrissur", "Ernakulam", "Kottayam", "Idukki", "Kannur"];
  const types = ["Apartment", "Villa", "Plot"];
  const bhkOptions = ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"];
  const priceRanges = ["Below 50 Lakh", "50 Lakh - 1 Crore", "1 Crore - 2 Crore"];
  const areaRanges = ["500", "1000", "2000"];
  const yearRanges = ["2000 - 2010", "2010 - 2020", "After 2020"];

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-6">
      <h2 className="text-xl font-bold mb-6">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
        {/* District */}
        <div>
          <button
            onClick={() => toggleExpanded("district")}
            className="w-full text-left font-semibold py-2 flex justify-between items-center hover:text-blue-600"
          >
            District {expanded.district ? "▼" : "▶"}
          </button>
          {expanded.district && (
            <div className="space-y-2 mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={!filters.district}
                  onChange={() => onChange("district", "")}
                  className="mr-2"
                />
                All
              </label>
              {districts.map((d) => (
                <label key={d} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.district === d}
                    onChange={() => onChange("district", d)}
                    className="mr-2"
                  />
                  {d}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* BHK */}
        <div>
          <button
            onClick={() => toggleExpanded("bhk")}
            className="w-full text-left font-semibold py-2 flex justify-between items-center hover:text-blue-600"
          >
            Bedrooms {expanded.bhk ? "▼" : "▶"}
          </button>
          {expanded.bhk && (
            <div className="space-y-2 mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={!filters.bhk}
                  onChange={() => onChange("bhk", "")}
                  className="mr-2"
                />
                All
              </label>
              {bhkOptions.map((b) => (
                <label key={b} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.bhk === b}
                    onChange={() => onChange("bhk", b)}
                    className="mr-2"
                  />
                  {b}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Price */}
        <div>
          <button
            onClick={() => toggleExpanded("price")}
            className="w-full text-left font-semibold py-2 flex justify-between items-center hover:text-blue-600"
          >
            Price {expanded.price ? "▼" : "▶"}
          </button>
          {expanded.price && (
            <div className="space-y-2 mt-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={!filters.price}
                  onChange={() => onChange("price", "")}
                  className="mr-2"
                />
                All
              </label>
              {priceRanges.map((p) => (
                <label key={p} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.price === p}
                    onChange={() => onChange("price", p)}
                    className="mr-2"
                  />
                  {p}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Property Type */}
        <div>
          <button
            onClick={() => toggleExpanded("type")}
            className="w-full text-left font-semibold py-2 flex justify-between items-center hover:text-blue-600"
          >
            Type {expanded.type ? "▼" : "▶"}
          </button>
          {expanded.type && (
            <div className="space-y-2 mt-2">
              {types.map((t) => (
                <label key={t} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                  />
                  {t}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Area */}
        <div>
          <button
            onClick={() => toggleExpanded("area")}
            className="w-full text-left font-semibold py-2 flex justify-between items-center hover:text-blue-600"
          >
            Area {expanded.area ? "▼" : "▶"}
          </button>
          {expanded.area && (
            <div className="space-y-2 mt-2">
              {areaRanges.map((a) => (
                <label key={a} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                  />
                  {a}+ sqft
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Year */}
        <div>
          <button
            onClick={() => toggleExpanded("year")}
            className="w-full text-left font-semibold py-2 flex justify-between items-center hover:text-blue-600"
          >
            Year {expanded.year ? "▼" : "▶"}
          </button>
          {expanded.year && (
            <div className="space-y-2 mt-2">
              {yearRanges.map((y) => (
                <label key={y} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.year === y}
                    onChange={() => onChange("year", y)}
                    className="mr-2"
                  />
                  {y}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => {
          onChange("district", "");
          onChange("bhk", "");
          onChange("price", "");
          onChange("area", "");
          onChange("year", "");
        }}
        className="mt-6 px-6 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
      >
        Reset Filters
      </button>
    </div>
  );
}
