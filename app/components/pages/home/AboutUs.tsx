import { onest, urbanist } from "@/app/fonts/fonts";
import Link from "next/link";
export default function AboutUs() {
    return (
        <>
            <div className={`${onest.className}  text-center mt-20 px-4 md:px-20 lg:px-40 z-10`} style={{ fontWeight: 500, fontSize: "1.2rem" }}>
                Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary. Over the years, we've expanded our reach, forged valuable partnerships, and gained the trust of countless clients.
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-20 my-10 mt-2 m-10">
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


            <div className="grid md:grid-cols-[1fr_4fr_1fr]">
                <div></div>
                <div>
                    <div className="flex min-h-[30vh] md:h-[80vh]  mt-10  pt-5 justify-center rounded-[4rem] relative overflow-hidden" style={{
                        backgroundImage: "url('/pexels-mart-production-7415129 1.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}>
                        <div className="absolute inset-0 bg-linear-to-b from-black/80 to-transparent"></div>

                        <div className="relative z-10 p-5 flex flex-col items-center justify-center">
                            <h1 className={`${onest.className}   mt-2  z-10`} style={{ fontWeight: 500, fontSize: "1.3rem", color: "white" }}>
                                We believe every good deal is founded on a great partnership. Our partnerships are built on trust, honesty and committed collaboration – many of them standing strong for decades.
                            </h1>
                           <Link href={"/property"}> <button className={`bg-linear-to-r from-[#EA8843] to-[#FFB60D] text-white px-4 py-2 rounded mt-5 ${onest.className}`} style={{ fontWeight: 500, fontSize: "1rem" }}>   Available Properties</button></Link>
                             
                         

                        </div>
                    </div>
                </div>
                <div></div>

            </div>

        </>
    );
}