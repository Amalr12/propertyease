import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function FooterBottom() {
    return (
        <div className="bg-black grid md:grid-cols-2 text-white p-4 md:items-center">

            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
                <div><h1 className="text-sm md:text-base">@2026 The Better Agency. All Rights Reserved.</h1></div>
             <div>   <h1 className="text-sm md:text-base">  Terms & Conditions</h1></div>

            </div>
            <div className="flex justify-center items-center text-xl mt-4 md:mt-0">
                <div className="mr-4  p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                    <FaFacebookF />
                </div>
                <div className="mr-4  p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                    <FaLinkedinIn />
                </div>
                <div className="mr-4  p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                    <FaXTwitter />
                </div>
                <div className="mr-4  p-2 bg-gray-800" style={{ borderRadius: "50%" }}>
                   <FaYoutube />
                </div>
            </div>

          

        </div>
    );
}