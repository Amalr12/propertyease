import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { onest } from "@/app/fonts/fonts";
import Link from "next/link";

export default function FooterBottom() {
    return (
        <div className="bg-[#191919] grid md:grid-cols-2 text-white p-4 items-center">

            <div className={`md:flex  items-center gap-2 md:gap-6 text-center md:text-left ${onest.className}`}>
                <div><h1 className="text-sm md:text-base">@2026 Propertyease. All Rights Reserved.</h1></div>
                <div>   <h1 className="text-sm md:text-base">  Terms & Conditions</h1></div>

            </div>
            <div className="flex justify-center items-center text-xl pt-4 md:pt-0">
               <Link href="https://www.facebook.com/propertyease">
                    <div className="mr-4 cursor-pointer p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                        <FaFacebookF />
                    </div>
               </Link>
                <Link href="https://www.linkedin.com/company/propertyease/">
                    <div className="mr-4 cursor-pointer p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                        <FaLinkedinIn />
                    </div>
                </Link>
                <Link href="https://twitter.com/Propertyease">
                    <div className="mr-4 cursor-pointer p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                        <FaXTwitter />
                    </div>
                </Link>
               <Link href="https://www.youtube.com/@propertyease">
                    <div className="mr-4 cursor-pointer p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                        <FaYoutube />
                    </div>
               </Link>
            </div>



        </div>
    );
}