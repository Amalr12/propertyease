import Image from "next/image";
import Hero from "./components/pages/home/hero";
import AboutUs from "./components/pages/home/AboutUs";
import Values from "./components/pages/home/Values";
import Services from "./components/pages/home/Services";
import WhyChooseUs from "./components/pages/home/WhyChooseUs";
import Featured from "./components/pages/home/Featured";
import ClientSay from "./components/pages/home/ClientSay";
import { Suspense } from "react";


export default function Home() {
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
