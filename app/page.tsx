"use client";
import Image from "next/image";
import Hero from "./components/pages/home/hero";
import AboutUs from "./components/pages/home/AboutUs";
import Values from "./components/pages/home/Values";
import Services from "./components/pages/home/Services";
import WhyChooseUs from "./components/pages/home/WhyChooseUs";
import Featured from "./components/pages/home/Featured";
import ClientSay from "./components/pages/home/ClientSay";
import { Suspense, useEffect, useState } from "react";


export default function Home() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);
    if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <Image
          src="/building.gif"
          alt="Loading..."
          width={120}
          height={120}
          unoptimized
        />
      </div>
    );
  }
  return (
    <>
     <div>
        <Suspense fallback={<div>Loading...</div>}><Hero/></Suspense>
        <AboutUs/>
        <Values/>
        <Services/>
        <WhyChooseUs/>
        <Featured/>
        <ClientSay/>
     </div>
    </>
  );
}
