"use client";
import { urbanist } from "@/app/fonts/fonts";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

export default function LetsConnect() {
     const form = useRef<HTMLFormElement | null>(null);
    
        const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
    
            if (form.current) {
                emailjs
                    .sendForm(
                        "service_15x2ykg",
                        "template_lue537e",
                        form.current,
                        "iPVPorUqcP7DOHyWO"
                    )
                    .then(
                        (result) => {
                            console.log("SUCCESS!", result.text);
                            if(result.text == "OK") {
                                alert("Email sent successfully!");
                                form.current?.reset();
                            }
                        },
                        (error) => {
                            console.log("FAILED...", error.text);
                        }
                    );
            }
        };
    return (
        <>
            <div className="p-5 m-5">
                <h1 className={`${urbanist.className}  text-2xl md:text-3xl font-bold `} style={{ fontWeight: "600" }}>Lets Connect</h1>
                <p className={`${urbanist.className}  text-sm md:text-xl  mb-5`}>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>

                <form ref={form}
  onSubmit={sendEmail} className={`${urbanist.className} max-w-6xl mx-auto bg-white border border-gray-300 rounded-xl p-6 md:p-10 mt-10 pt-5`}>
                    <div   className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 space-y-6">
                        <div className="space-y-3 ">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="">First Name</label>
                                <input name="first_name" className="p-2 border border-gray-400 rounded" placeholder="Enter First Name" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="">Phone</label>
                                <input name="phone" className="p-2 border border-gray-400 rounded" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex flex-col mb-4">
                                <label  htmlFor="">Last Name</label>
                                <input name="last_name" className="p-2 border border-gray-400 rounded" type="text" placeholder="Enter Last Name" />
                            </div>
                            <div className="flex flex-col">
                                <label  htmlFor="Inquiry Type">Inquiry Type</label>
                                <select name="inquiry_type" className="p-2 border border-gray-400 rounded" id="">
                                    <option value="">Select Inquiry Type</option>
                                    <option value="">1</option>
                                    <option value="">1</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-3 ">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="">Email</label>
                                <input type="email" name="user_email"  className="p-2 border border-gray-400 rounded"  placeholder="Enter your Email" />
                            </div>
                            <div className="flex flex-col ">
                                  <label htmlFor="Inquiry Type">How Did You Hear About Us?</label>
                                <select className="p-2 border border-gray-400 rounded" name="select" id="">
                                    <option value="">Select</option>
                                    <option value="">1</option>
                                    <option value="">1</option>
                                </select>
                            </div>
                        </div>



                    </div>
                    <div className="mb-6">
                        <label className="block text-sm mb-2">Message</label>
                        <textarea
                             name="message"
  placeholder="Enter your Message here..."
                            className="w-full border border-gray-300 rounded-lg p-3 h-32 outline-none  focus:ring-orange-400"
                        />
                    </div>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">

                        <label className="flex items-center gap-2 text-sm text-gray-600">
                            <input type="checkbox" name="agreement" value="accepted" />
                            I agree with Terms of Use and Privacy Policy
                        </label>

                        <button type="submit" className="bg-linear-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-md ">
                            Send Your Message
                        </button>

                    </div>


                </form>
            </div>
        </>
    );
}