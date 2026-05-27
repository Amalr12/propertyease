"use client";
import { urbanist } from "@/app/fonts/fonts";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

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
                        if (result.text == "OK") {
                                                    Swal.fire({
                                    title: "Success!",
                                    text: "Email sent successfully!",
                                    icon: "success",
                                    confirmButtonText: "OK",
                                });
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
            <div className=" p-5 md:p-10 ps-10 mt-5">
                <h1 className={` ${urbanist.className} font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl`} style={{ fontWeight: "600", fontStyle: "semibold" }}>Lets Connect</h1>
                <p className={`${urbanist.className}  text-sm md:text-xl  mb-5`}>We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein. Whether you're a prospective client, partner, or simply curious about our services, we're here to answer your questions and provide the assistance you need.</p>

                <form ref={form}
                    onSubmit={sendEmail} className={`${urbanist.className} max-w-8xl  bg-white border border-gray-300 rounded-xl p-4 sm:p-6 md:p-8 lg:p-8 
              mt-10 mb-10`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-5 space-y-6">
                        <div className="space-y-5 mb-4">
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 text-sm font-medium" htmlFor="first_name">
                                    First Name
                                </label>
                                <input name="first_name" className="p-2 border border-gray-400 rounded" placeholder="Enter First Name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-medium" htmlFor="phone">
                                    Phone
                                </label>
                                <input name="phone" className="p-2 border border-gray-400 rounded" placeholder="Phone Number" />
                            </div>
                        </div>
                        <div className="space-y-3 mb-4">
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 text-sm font-medium" htmlFor="last_name">
                                    Last Name
                                </label>
                                <input name="last_name" className="p-2 border border-gray-400 rounded" type="text" placeholder="Enter Last Name" />
                            </div>
                            <div className="flex flex-col">
                                <label className="mb-2 text-sm font-medium" htmlFor="inquiry_type">
                                    Inquiry Type
                                </label>
                                <select name="inquiry_type" className="p-2 border border-gray-400 rounded" id="">
                                    <option value="">Select Inquiry Type</option>
                                    <option value="">General Inquiry</option>
                                    <option value="">Schedule a Visit</option>
                                    <option value="">Property Purchase</option>
                                    <option value="">Property Rent</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-3 ">
                            <div className="flex flex-col mb-4">
                                <label className="mb-2 text-sm font-medium" htmlFor="user_email">
                                    Email
                                </label>
                                <input type="email" name="user_email" className="p-2 border border-gray-400 rounded" placeholder="Enter your Email" />
                            </div>
                            <div className="flex flex-col ">
                                <label className="mb-2 text-sm font-medium" htmlFor="hear_about_us">
                                    How Did You Hear About Us?
                                </label>
                                <select className="p-2 border border-gray-400 rounded" name="select" id="">
                                    <option value="">Select</option>
                                    <option value="">Social Media</option>
                                    <option value="">Referral</option>
                                    <option value="">Online Search</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                        </div>



                    </div>
                    <div className="mb-6 mt-3">
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

                        <button type="submit" className="bg-linear-to-r from-[#EA8843] to-[#FFB60D] text-white px-4 py-2 rounded-md cursor-pointer w-full">
                            Send Your Message
                        </button>

                    </div>


                </form>
            </div>
        </>
    );
}