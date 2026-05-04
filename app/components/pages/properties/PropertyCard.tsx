import Link from "next/link";
import { FaBath, FaBed } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { IoSquareOutline } from "react-icons/io5";

export function PropertyCard({ property }: { property: any }) {
  return (
    <div className="bg-[#0c0c0c] text-white rounded-2xl overflow-hidden shadow-lg w-full max-w-sm">

      {/* HEADER */}
      <div className="flex justify-between items-center p-3">
        <div className="bg-gray-300 text-black text-xs px-3 py-1 rounded-full font-medium">
          {property.status || "New"}
        </div>
        <div className="bg-black/60 p-2 rounded-full cursor-pointer">
          <FiShare2 />
        </div>
      </div>

      {/* IMAGE */}
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-56 object-cover"
        />

        <div className="absolute bottom-3 left-3 bg-orange-500 px-3 py-1 rounded-full text-sm font-semibold">
          {property.price}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-3">

        <h2 className="text-lg font-semibold">{property.title}</h2>

        <p className="text-gray-400 text-sm">
          📍 {property.district}
        </p>

        <div className="border-t border-gray-700"></div>

        <div className="flex justify-between text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <FaBed /> {property.bhk}
          </div>
          <div className="flex items-center gap-2">
            <FaBath /> {property.bathrooms}
          </div>
          <div className="flex items-center gap-2">
            <IoSquareOutline /> {property.size}
          </div>
        </div>

        <div className="flex gap-3 pt-5">
          <button className="flex-1 bg-gray-800 py-2 rounded-lg hover:bg-gray-700 transition">
            Schedule Visit
          </button>

          <Link href={`/property/${property.slug}`}>
            <button className="flex-1 bg-linear-to-r from-orange-500 to-yellow-500 py-2 rounded-lg text-black font-semibold">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}