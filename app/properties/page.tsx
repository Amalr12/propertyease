import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { properties as allProperties } from "../../data/properties";
import FilterBar from "../../components/FilterBar";

const parseNumber = (val: string) => parseInt(val.replace(/\D/g, ""), 10) || 0;

const priceToRange = (price: string) => {
  if (price === "20-40L") return [2000000, 4000000];
  if (price === "50L-1Cr") return [5000000, 10000000];
  if (price === "1Cr+") return [10000000, Infinity];
  return [0, Infinity];
};

export default function PropertiesPage() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState({
    district: searchParams.get("district") || "",
    bhk: searchParams.get("bhk") || "",
    price: searchParams.get("price") || "",
    area: searchParams.get("area") || "",
    year: searchParams.get("year") || ""
  });
  const [filtered, setFiltered] = useState(allProperties);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("");

  useEffect(() => {
    setLoading(true);
    let result = allProperties.filter((p) => {
      const matchDistrict = !filters.district || p.district === filters.district;
      const matchBHK = !filters.bhk || p.bhk === filters.bhk;
      const matchPrice = !filters.price || (() => {
        const [min, max] = priceToRange(filters.price);
        const [pmin, pmax] = priceToRange(p.price);
        return pmin >= min && pmax <= max;
      })();
      const matchArea = !filters.area || p.area === parseNumber(filters.area);
      const matchYear = !filters.year || p.year === parseNumber(filters.year);
      return matchDistrict && matchBHK && matchPrice && matchArea && matchYear;
    });
    if (sort === "price-asc") {
      result = [...result].sort((a, b) => priceToRange(a.price)[0] - priceToRange(b.price)[0]);
    }
    setFiltered(result);
    setLoading(false);
  }, [filters, sort, searchParams]);

  const handleChange = (name: string, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <FilterBar filters={filters} onChange={handleChange} />
      <div className="flex items-center gap-4 my-4">
        <button
          className={`px-4 py-2 rounded ${sort === "price-asc" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setSort(sort === "price-asc" ? "" : "price-asc")}
        >
          Sort by Price (Low to High)
        </button>
      </div>
      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-8">No properties found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white rounded shadow p-4 flex flex-col gap-2">
              <div className="font-bold text-lg">{p.title}</div>
              <div>District: {p.district}</div>
              <div>BHK: {p.bhk}</div>
              <div>Price: {p.price}</div>
              <div>Area: {p.area} sq ft</div>
              <div>Year: {p.year}</div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
