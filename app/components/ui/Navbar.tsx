"use client";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { onest, urbanist } from "@/app/fonts/fonts";
import { useState } from "react";



export default function Navbar() {
      const [open, setOpen] = useState(false);
  return (
 <nav className="bg-black px-4 py-5 mt-5">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">


    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Image src="/icon.png" alt="Logo" width={35} height={35} />
        <h1
          className={onest.className}
          style={{
            fontWeight: 700,
            color: "white",
            fontSize: "1.5rem",
            marginLeft: "0.5rem",
          }}
        >
          Propertyease
        </h1>
      </div>
       <IoMenu
                    onClick={() => setOpen(!open)}
                    className="h-7 w-7 md:hidden cursor-pointer not-odd: z-10 text-white"
                />
    </div>

  
    <div
      className={`${onest.className}  flex-col sm:flex-row items-center gap-3 sm:gap-4 md:justify-end hidden md:flex`}
      style={{ color: "white", fontWeight: 400 }}
    >
      <button className="w-full sm:w-auto">Contact Us</button>

      <button
        className="w-full sm:w-auto"
        style={{
          background: "linear-gradient(to right, orange, yellow)",
          padding: "10px 20px",
          border: "none",
          borderRadius: "6px",
          fontWeight: 500,
          cursor: "pointer",
        }}
      >
        Available Properties
      </button>
    </div>
    
                {
                  open&& <div className={`bg-black rounded-md p-4 flex flex-col gap-3 text-white ${urbanist.className} md:hidden absolute top-16 right-4 w-48 z-10`}>
                    <button className="w-full sm:w-auto text-white">Contact Us</button>
                    <button
                      className="w-full sm:w-auto"
                      style={{
                        background: "linear-gradient(to right, orange, yellow)",
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "6px",
                        fontWeight: 500,
                        cursor: "pointer",
                      }}
                    >
                      Available Properties
                    </button>

                  </div>
                }
  </div>
</nav>
  );
}
