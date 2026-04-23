import Image from "next/image";
import Hero from "./components/pages/home/hero";
import AboutUs from "./components/pages/home/AboutUs";
import Values from "./components/pages/home/Values";
import Services from "./components/pages/home/Services";
import WhyChooseUs from "./components/pages/home/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <Values/>
      <Services/>
      <WhyChooseUs/>
    </>
  );
}
