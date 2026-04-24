"use client";
import Image from "next/image";
import { IoIosSend } from "react-icons/io";
import { LuMailPlus } from "react-icons/lu";
import { onest } from "@/app/fonts/fonts";
// import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import { useState } from "react"

export default function FooterTop() {
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
        <div className="bg-black p-10 grid md:grid-cols-2 ">
            <div className="flex flex-col gap-5">
                <div className="flex items-center ">
                    <Image src="/icon.png" alt="Logo" width={25} height={25} />
                    <h1
                        className={onest.className}
                        style={{
                            fontWeight: 700,
                            color: "white",
                            fontSize: "1.2rem",
                            marginLeft: "0.5rem",
                        }}
                    >
                        Propertyease
                    </h1>
                </div>
<form
  ref={form}
  onSubmit={sendEmail}
  className="flex justify-center items-center bg-black rounded-md w-70 border p-2">
  <LuMailPlus className="text-2xl text-gray-400" />

  <input
    type="email"
    name="user_email"   // ✅ REQUIRED
    placeholder="Enter Your Email"
    required
    className={`${onest.className} text-gray-400 text-center bg-black border-none focus:outline-none`}
  />

  <button type="submit">
    <IoIosSend className="text-2xl text-white" />
  </button>
</form>
            </div>
            <div className={`grid md:grid-cols-3 text-white ${onest.className}`}>
                <div className="">
                    <h1 className="text-gray-400 py-3">About Us</h1>
                    <h1 className="py-3">Properties</h1>
                    <h1>Contact Us</h1>
                </div>
                <div>
                    <h1 className="text-gray-400 py-3">Legal</h1>
                    <h1 className="py-3">Privacy & Cookies Policies</h1>
                    <h1>Terms & Conditions</h1>
                </div>
                <div>
                    <h1 className="text-gray-400">Get In Touch</h1>
                </div>
            </div>
        </div>
    );
}