import { urbanist } from "@/app/fonts/fonts";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";


type LocationCardProps = {
    type: string;
    title: string;
    description: string;
};
export default function LocationCard({ type, title, description }: LocationCardProps) {
    return (
        <>
           <div className="w-full">
  <div
    className={`${urbanist.className} 
    bg-[#0c0c0c] 
    text-white 
    rounded-2xl 
    p-5 sm:p-6 md:p-8 
    flex flex-col gap-6`}
  >

    {/* TOP CONTENT */}
    <div>
      <p className="text-sm text-[#B3B3B3] mb-2">
        {type}
      </p>

      <h3 className="text-lg md:text-xl font-semibold mb-3  leading-snug ">
        {title}
      </h3>

      <p className="text-[#999999] text-sm mb-6 leading-relaxed max-w-4xl">
        {description}
      </p>
    </div>

    {/* CONTACT INFO */}
    <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4">

      {/* EMAIL */}
      <div className="flex items-center justify-center sm:justify-start gap-2 bg-[#141414] border border-[#262626] px-5 py-3 rounded-full w-full sm:w-fit">
        <MdEmail size={18} className="text-white shrink-0" />
        <span className="text-sm md:text-base text-white">
          info@propertyease.com
        </span>
      </div>

      {/* PHONE */}
      <div className="flex items-center justify-center sm:justify-start gap-2 bg-[#141414] border border-[#262626] px-5 py-3 rounded-full w-full sm:w-fit">
        <FaPhone size={16} className="text-white shrink-0" />
        <span className="text-sm md:text-base text-white">
          +1 (123) 456-7890
        </span>
      </div>

      {/* LOCATION */}
      <div className="flex items-center justify-center sm:justify-start gap-2 bg-[#141414] border border-[#262626] px-5 py-3 rounded-full w-full sm:w-fit">
        <FaLocationDot size={16} className="text-white shrink-0" />
        <span className="text-sm md:text-base text-white">
          Metropolis
        </span>
      </div>

    </div>

    {/* BUTTON */}
    <button
      className="w-full bg-linear-to-r from-[#EA8843] to-[#FFB60D] 
      py-4 rounded-xl text-sm md:text-base font-medium 
      hover:opacity-90 transition duration-300 cursor-pointer"
    >
      Get Direction
    </button>

  </div>
</div>
        </>
    );
}