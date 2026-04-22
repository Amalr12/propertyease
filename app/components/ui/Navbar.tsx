"use client";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { onest, urbanist } from "@/app/fonts/fonts";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { IoIosTransgender } from "react-icons/io";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";
  const isTranparentnav = 
  pathname.startsWith("/") || pathname.startsWith("/contact")  ? "bg-transparent " : "bg-black/80 backdrop-blur-sm"; 
  return (
    <nav className="px-4 py-5 absolute top-5 left-0 w-full z-50">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    {/* Top Row */}
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

      {/* Menu Icon */}
      <IoMenu
        onClick={() => setOpen(!open)}
        className="h-7 w-7 md:hidden cursor-pointer text-white"
      />
    </div>

    {/* Desktop Menu */}
    <div
      className={`${onest.className} hidden md:flex items-center gap-4 text-white`}
    >
      <button>Contact Us</button>

      <button
        className={`px-4 py-2 rounded ${
          isTranparentnav
            ? "bg-transparent border text-white"
            : "bg-linear-to-r from-orange-500 to-yellow-500 text-white"
        }`}
      >
        Available Properties
      </button>
    </div>
  </div>

  {/* ✅ Mobile Menu */}
  {open && (
    <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
      
      <button onClick={() => setOpen(false)}>
        Contact Us
      </button>

      <button
        className="bg-gradient-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded"
        onClick={() => setOpen(false)}
      >
        Available Properties
      </button>
    </div>
  )}
</nav>
  );
}
