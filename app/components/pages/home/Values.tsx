import { onest, urbanist } from "@/app/fonts/fonts";
import { FaGraduationCap, FaHtml5, FaRegStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";

export default function Values() {
    return (
        <>
            <div className="relative pb-10 pt-0 *: bg-white overflow-hidden">
                <h1 className={`${onest.className} absolute top-0 
               pointer-events-none overflow-auto select-none max-w-screen font-medium
  text-[5rem]
  sm:text-[8rem]
  md:text-[12rem]
  lg:text-[20rem]
  text-transparent
  md:p-0 p-5
  [-webkit-text-stroke:2px_rgba(0,0,0,0.2)] `}>
                    Values
                </h1>
                <div className="relative z-10 grid md:grid-cols-[2fr_4fr] mt-2 md:mt-50 p-5">
                    <div className="">
                        <h1 className={`${urbanist.className}`} style={{ fontWeight: 500, fontSize: "1.8rem" }} >Our Values</h1>
                        <h1 className={`${onest.className}`} style={{ fontWeight: 500, fontSize: "1rem" }}>Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.</h1>
                    </div>
                    <div className="bg-[#0c0c0c] text-white rounded-2xl p-10 max-w-6xl mx-auto">

                        <div className="grid md:grid-cols-2 p-2">


                            <div className="md:p-8  p-2">
                                <div className="flex items-center  gap-2 mb-4">
                                    <div className="mr-4  p-2  border border-yellow-600 text-xl" style={{ borderRadius: "50%" }}>  <FaRegStar className="text-yellow-500"/></div>
                                    <h3 className={` mb-2 ${onest.className}  text-[1.18rem] md:text-[1.25rem]`} style={{ fontWeight: "500", fontSize: "1.25rem" }}>Trust</h3></div>
                                <p className={`text-[#999999]  ${onest.className}`} style={{ fontWeight: "400" ,fontSize: "0.9rem"}}>
                                    Trust is the cornerstone of every successful real estate transaction.
                                </p>
                            </div>


                            <div className="md:p-8 p-2 ">
                                <div className="flex items-center  gap-2 mb-4">
                                    <div className="mr-4  p-2  border border-yellow-600 text-xl" style={{ borderRadius: "50%" }}>  <FaGraduationCap className="text-yellow-500" /></div>
                                    <h3 className={` mb-2 ${onest.className}  text-[1.18rem] md:text-[1.25rem]`} style={{ fontWeight: "500", fontSize: "1.25rem" }}>Excellence</h3></div>
                                <p className={`text-[#999999]  ${onest.className}`} style={{ fontWeight: "400" ,fontSize: "0.9rem"}}>
                                    We set the bar high for ourselves. From the properties we list to the services we provide.
                                </p>
                            </div>


                            <div className="md:p-8 p-2 ">
                                <div className="flex items-center  gap-2 mb-4">
                                    <div className="mr-4  p-2  border border-yellow-600 text-xl" style={{ borderRadius: "50%" }}>  <MdGroups className="text-yellow-500" /></div>
                                    <h3 className={`  mb-2 ${onest.className}  text-[1.18rem] md:text-[1.25rem]`} style={{ fontWeight: "500", fontSize: "1.25rem" }}>Client-Centric</h3></div>
                                <p className={`text-[#999999]  ${onest.className}`} style={{ fontWeight: "400" ,fontSize: "0.9rem"}}>
                                    Your dreams and needs are at the center of our universe. We listen, understand.
                                </p>
                            </div>

                            <div className="md:p-8 p-2 ">
                                <div className="flex items-center  gap-2 mb-4">
                                    <div className="mr-4  p-2  border border-yellow-600 text-xl" style={{ borderRadius: "50%" }}>  <FaRegStar className="text-yellow-500" /></div>
                                    <h3 className={`mb-2 ${onest.className}  text-[1.18rem] md:text-[1.25rem]`} style={{ fontWeight: "500", fontSize: "1.25rem" }}>Our Commitment</h3></div>
                                <p className={`text-[#999999]  ${onest.className}`} style={{ fontWeight: "400" ,fontSize: "0.9rem"}}>
                                    We are dedicated to providing you with the highest level of service, professionalism, and support.
                                </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

