"use client";

import { Camera, Edit3, Mail, MapPin, MapPinHouse, MessageSquare, Phone, User } from "lucide-react";
import Image from "next/image";
import React from "react";

const contactItems = [
    {
        icon: MapPin,
        title: "Địa chỉ",
        info: "Grandeur Place, 138B Giảng Võ, Ba Đình, Hà Nội",
    },
    {
        icon: Phone,
        title: "Số điện thoại",
        info: "1800 2828 98",
    },
    {
        icon: Mail,
        title: "Email",
        info: "cskh@vpass.asia",
    },
];
const ContactUs = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <section className="relative w-full h-[50vh] overflow-hidden rounded-b-2xl shadow-lg">
                <Image
                    src="/2012079455_DchvcaVPASS.jpg"
                    alt="Beautiful beach vacation"
                    fill
                    priority
                    className="object-cover animate-zoomInOut"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 right-1/4 z-20 bg-white px-8 py-4 ">
                    <span className="text-gray-700 font-medium">
                        <span className="text-black font-semibold">Home</span> |<span className='text-yellow-900 font-bold text-md'> Liên hệ</span>
                    </span>
                </div>
            </section>
            <div className="max-w-5xl mx-auto mt-16 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {contactItems.map(({ icon: Icon, title, info }, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl shadow-md border border-gray-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2">
                                <div className="p-4 bg-amber-100 rounded-full mb-4 group-hover:bg-amber-200 transition">
                                    <Icon className="text-amber-700 w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                                    <p className="text-gray-600 text-sm leading-relaxed">{info}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="max-w-5xl w-full mx-auto bg-white shadow-md mt-12 mb-16 rounded-xl p-10">

                <section className="w-full h-[400px] relative">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.729646601765!2d105.80336127479444!3d21.003092980637264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab75c4b0e1f9%3A0x123456789abcdef!2zQ-G7rWEgTOG7mWMgTmjDom4!5e0!3m2!1svi!2s!4v1730691836017!5m2!1svi!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        className="rounded-b-2xl shadow-md"
                    ></iframe>
                </section>
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8 uppercase mt-5">
                    Contact Us
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
                        <User className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
                        <Mail className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
                        <Phone className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Phone"
                            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    <div className="flex items-center bg-gray-100 rounded-lg px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 transition">
                        <Edit3 className="text-gray-500 mr-3 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="bg-transparent w-full outline-none text-gray-700 placeholder-gray-400"
                        />
                    </div>

                    <div className="md:col-span-2 bg-gray-100 rounded-lg px-4 py-3 flex items-start focus-within:ring-2 focus-within:ring-blue-500 transition">
                        <MessageSquare className="text-gray-500 mr-3 mt-1 w-5 h-5" />
                        <textarea
                            rows={5}
                            placeholder="Message"
                            className="bg-transparent w-full outline-none resize-none text-gray-700 placeholder-gray-400"
                        ></textarea>
                    </div>

                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg"
                        >
                            CONTACT US
                        </button>
                    </div>
                </form>

            </section>
        </div>
    );
};

export default ContactUs;
