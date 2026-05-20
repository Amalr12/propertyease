import { onest, urbanist } from "@/app/fonts/fonts";
import Link from "next/link";
export default function AboutUs() {
    return (
        <>
            <div className={`${onest.className}  text-center mt-20 px-4 md:px-20 lg:px-40 z-10`} style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20 my-10 mt-2 ">
                <div className="bg-[#0c0c0c] rounded-xl p-5 space-y-2 text-center sm:text-left">
                    <h1 className={`${urbanist.className} text-white *:`} style={{ fontWeight: "600", fontSize: "1.5rem" }}>200+</h1>
                    <p className={`${onest.className} text-gray-300 `} style={{ fontWeight: 400, fontSize: "1rem" }}>Happy Customers</p>
                </div>
                <div className="bg-[#0c0c0c] rounded-xl p-5 space-y-2 text-center sm:text-left">
                    <h1 className={`${urbanist.className} text-white *:`} style={{ fontWeight: "600", fontSize: "1.5rem" }}>10k+</h1>
                    <p className={`${onest.className} text-gray-300 `} style={{ fontWeight: 400, fontSize: "1rem" }}>Properties for Clients</p>
                </div>
                <div className="bg-[#0c0c0c] rounded-xl p-5 space-y-2 text-center sm:text-left">
                    <h1 className={`${urbanist.className} text-white *:`} style={{ fontWeight: "600", fontSize: "1.5rem" }}>16+</h1>
                    <p className={`${onest.className} text-gray-300 `} style={{ fontWeight: 400, fontSize: "1rem" }}>Years of Experience</p>
                </div>
            </div>


            <div className="grid md:grid-cols-[1fr_4fr_1fr] m-5">
                <div></div>
                <div>
                    <div
                        className="relative mt-10 mx-auto w-full max-w-6xl 
  min-h-125 md:min-h-135  rounded-[3rem] overflow-hidden 
  flex items-start"
                        style={{
                            backgroundImage: "url('/pexels-mart-production-7415129 1.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/45"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-between h-full w-full p-8 md:p-14 ">

                            {/* Text */}
                            <div className="max-w-3xl">
                                <h1
                                    className={`${onest.className} text-white leading-tight 
        text-14px md:text-27px  lg:text-27px  sm:text-14px  font-medium`}
                                >
                                    We believe every good deal is founded on a great partnership.
                                    Our partnerships are built on trust, honesty and committed
                                    collaboration – many of them standing strong for decades.
                                </h1>
                            </div>

                            {/* Button */}
                            <div className="mt-50 pt-20 flex items-center justify-center w-full">
                                <Link href="/property">
                                    <button
                                        className={`${onest.className} 
          bg-linear-to-r from-[#EA8843] to-[#FFB60D]
          text-white px-6 py-3 rounded-xl
          text-sm md:text-base font-medium
          hover:scale-105 transition`}
                                    >
                                        Available Properties
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>
                <div></div>

            </div>

        </>
    );
}