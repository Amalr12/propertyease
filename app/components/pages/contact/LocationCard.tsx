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
            <div>
                <div className={`${urbanist.className} bg-[#0c0c0c] text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between m-4`}>

                    <div>
                        <p className="text-gray-400 text-sm mb-2">{type}</p>

                        <h3 className="text-lg md:text-xl font-semibold mb-3">
                            {title}
                        </h3>

                        <p className="text-gray-400 text-sm mb-6">
                            {description}
                        </p>
                    </div>

                 
                    <div className="grid md:grid-cols-3 gap-3 mb-6 text-center">

                        <div className="flex items-center gap-2 bg-[#1a1a1a] px-2 py-2 rounded-full text-sm">
                            <MdEmail className="text-white" size={12} /> info@propertyease.com
                        </div>

                        <div className="flex items-center gap-2 bg-[#1a1a1a] px-2 py-2 rounded-full text-sm">
                            <FaPhone  size={12} /> +1(123)456-7890
                        </div>

                        <div className="flex items-center gap-2 bg-[#1a1a1a] px-2 py-2 rounded-full text-sm">
                            <FaLocationDot size={12} /> Metropolis
                        </div>

                    </div>

                  
                    <button className="w-full bg-linear-to-r from-orange-500 to-yellow-500 py-2 rounded-md text-sm font-medium hover:opacity-90">
                        Get Direction
                    </button>
                </div>
            </div>
        </>
    );
}