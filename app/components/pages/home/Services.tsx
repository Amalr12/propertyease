import { onest, urbanist } from "@/app/fonts/fonts";
import Image from "next/image";


export default function Services() {
    return (
        <>
            <div className="space-y-4 p-5" >
                <h1 className={` mb-2 ${urbanist.className}`} style={{ fontWeight: "500", fontSize: "1.8rem" }}>Elevate Your Real Estate Experience</h1>
                <p className={`text-[#121010]  ${onest.className}`} style={{ fontWeight: "400", fontSize: "1rem" }}>Welcome to Estatein, where your real estate aspirations meet expert guidance. Explore our comprehensive range of services, each designed to cater to your unique needs and dreams.</p>
            </div>
            <div className=" m-0 bg-black">
                <div className="grid md:grid-cols-4  gap-4 p-5 ">
                    <div className="bg-[#0c0c0c] rounded flex flex-col items-center justify-center p-6">

                   
                           <Image src={"/Icon Container.png"} alt="home" width={50} height={50} className="mb-2"  />
                    

                        <h1 className={`text-gray-300 text-center ${onest.className}`} style={{ fontWeight: "500", fontSize: "0.9rem" }}>
                            Find Your Dream Home
                        </h1>

                    </div>
                    <div className="bg-[#0c0c0c] rounded flex flex-col items-center justify-center p-6">

                         <Image src={"/Icon Container (1).png"} alt="home" width={50} height={50} className="mb-2" />
                    

                        <h1 className={`text-gray-300 text-center ${onest.className}`} style={{ fontWeight: "500", fontSize: "0.9rem" }}>
                         Unlock Property Value
                        </h1>

                    </div>
                    <div className="bg-[#0c0c0c] rounded flex flex-col items-center justify-center p-6">

                          <Image src={"/Icon Container (2).png"} alt="home" width={50} height={50} className="mb-2" />
                    

                        <h1 className={`text-gray-300 text-center ${onest.className}`} style={{ fontWeight: "500", fontSize: "0.9rem" }}>
                        Effortless Property Management
                        </h1>

                    </div>
                    <div className="bg-[#0c0c0c] rounded flex flex-col items-center justify-center p-6">
  <Image src={"/Icon Container (3).png"} alt="home" width={50} height={50} className="mb-2" />
                    

                        <h1 className={`text-gray-300 text-center ${onest.className}`} style={{ fontWeight: "500", fontSize: "0.9rem" }}>
                         Smart Investments, Informed Decisions
                        </h1>

                    </div>
                    
                   
                </div>
            </div>
        </>
    );
}

