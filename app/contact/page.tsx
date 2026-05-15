import ContactHome from "../components/pages/contact/ContactHome";
import LetsConnect from "../components/pages/contact/LetsConnect";
import OfficeLocation from "../components/pages/contact/OfficeLocation";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div className="">
                <ContactHome />
                <LetsConnect />
                <OfficeLocation />
            </div>
            <div className="flex justify-between m-0">
                <div>
                    <Image className="hidden md:flex" src="/abstractdesign.png" alt="" width={200} height={200} />
                </div>
                <div>
                    <Image src="/abd.png" alt="" width={200} height={200} />
                </div>
            </div>
        </>
    );
}