"use client";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { onest, urbanist } from "@/app/fonts/fonts";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";



export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();


  const isHomePage = pathname === "/";
  const isContactPage = pathname === "/contact";
  const isTransparentnav = isHomePage || isContactPage;
  return (
    <nav className={`px-4 py-5 absolute top-5 left-0 w-full z-50  ${isHomePage || isContactPage? "bg-transparent" : "bg-black"} transition-colors duration-300`}>
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">

    {/* Top Row */}
    <div className="flex items-center justify-between">
      <Link href={"/"}>
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
      </Link>

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
     <Link href={"/contact"}> <button className="border border-white text-white bg-linear-to-r from-orange-500 to-yellow-500  hover:text-black px-4 py-2 rounded">Contact Us</button></Link>

      
    </div>
  </div>

  {/* ✅ Mobile Menu */}
  {open && (
    <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center gap-4 py-6 md:hidden shadow-lg">
      
     <Link href={"/contact"}>
        <button className="border border-white text-white bg-linear-to-r from-orange-500 to-yellow-500  hover:text-black px-4 py-2 rounded" onClick={() => setOpen(false)}>
          Contact Us
        </button>
     </Link>

      <button
        className="bg-linear-to-r from-orange-500 to-yellow-500 px-4 py-2 rounded"
        onClick={() => setOpen(false)}
      >
        Available Properties
      </button>
    </div>
  )}
</nav>
  );
}
