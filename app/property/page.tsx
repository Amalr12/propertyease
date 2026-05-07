import { Suspense } from "react";
import PropertyHero from "../components/pages/properties/PropertyHero";

export default function Property() {
    return (
        <div className="">
          <Suspense fallback={<div>Loading...</div>}>
            <PropertyHero />
          </Suspense>
        </div>
    );
}