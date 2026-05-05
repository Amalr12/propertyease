"use client";
import { ImCancelCircle } from "react-icons/im";
import { FaRegCalendar } from "react-icons/fa6";
import { CiHome } from "react-icons/ci";
import { IoVideocam } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
export default function Modal(){

      const [modalStatus, setModalStatus] = useState(false)
     const openModal = (title:any) => {
    setModalStatus(true)
    
  }
  const title=["Live Visit","VR Visit","Consultation"]
    return(
        <>
             <div id="dialog" aria-labelledby="dialog-title" className="absolute  inset-0 max-h-none overflow-y-auto backdrop:bg-transparent z-50  bg-black/40 backdrop-blur-sm ">
                                <div className="fixed inset-0 bg-gray-900/50 transition-opacity "></div>
                                <div className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0">
                                    <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all sm:w-full  sm:max-w-lg">
            
                                        <div className="bg-black p-6 rounded-2xl text-white ">
                                            <div className=" w-full flex justify-end">
                                                <ImCancelCircle
                                                    onClick={() => setModalStatus(false)}
                                                    className="text-xl mt-2 cursor-pointer"
                                                />
                                            </div>
                                            <div className="grid md:grid-cols-3 justify-center">
                                                <div></div>
                                                <div className=" flex justify-center"><FaRegCalendar className="text-4xl  flex justify-center" /></div>
                                                <div>     </div>
                                            </div>
            
                                            <div className="text-center flex mb-6 ps-2">
            
            
                                                <div>
                                                    <h2 className="text-xl font-semibold">Schedule Your Visit</h2>
                                                    <p className="text-gray-400 text-sm">Experience Luxury 3BHK Apartment</p>
                                                </div>
                                            </div>
            
            
            
                                            <div className="flex flex-col gap-3">
                                                <button className="border border-neutral-700 p-4 rounded-xl bg-gray-400 text-left hover:border-orange-500 transition grid md:grid-cols-[2fr_4fr] gap-2  items-start">
                                                    <div className="mr-4  p-4 flex justify-center items-center bg-gray-800 text-xl rounded-xl">
                                                        <CiHome className="text-orange-500" />
                                                    </div>
                                                    <div className="">
                                                        <h1 className="font-medium flex items-start">Live Visit</h1>
                                                        <p className="text-xs text-gray-400 flex items-start">Physical site walkthrough</p>
                                                    </div>
                                                </button>
                                                <button className="border border-neutral-700 p-4 rounded-xl bg-gray-400 text-left hover:border-orange-500 transition grid md:grid-cols-[2fr_4fr] gap-2  items-start">
                                                    <div className="mr-4  p-4 flex justify-center items-center bg-gray-800 text-xl rounded-xl" >
                                                        <IoVideocam className="text-orange-500" />
                                                    </div>
                                                    <div className="t">
                                                        <h1 className="font-medium flex items-start">VR Visit</h1>
                                                        <p className="text-xs text-gray-400 flex items-start">Virtual Reality interactive tour</p>
                                                    </div>
                                                </button>
                                                <button className="border border-neutral-700 p-4 rounded-xl bg-gray-400 text-left hover:border-orange-500 transition grid md:grid-cols-[2fr_4fr] gap-2  items-start">
                                                    <div className="mr-4 p-4 flex justify-center items-center bg-gray-800 text-xl rounded-xl">
                                                        <FiPhoneCall className="text-orange-500" />
                                                    </div>
                                                    <div className="t">
                                                        <h1 className="font-medium flex items-start">Consultation</h1>
                                                        <p className="text-xs text-gray-400 flex items-start">Speak with an agent now</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
            
            
                                    </div>
                                </div>
                            </div >
        </>
    );
}