"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User, Clock, MapPin, Phone, Flag } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const navItems = [
    { href: "/", label: "Trang Chủ" },
    { href: "/about", label: "Giới Thiệu" },
    { href: "/services", label: "Dịch Vụ" },
    { href: "/holiday", label: "Kỳ Nghỉ" },
    { href: "/news", label: "Tin Tức" },
    { href: "/contact-us", label: "Liên Hệ" },
]

export function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()
    return (
        < >
            <div className="bg-[#1f2c63] text-white text-sm py-4 h-28 md:py-2 md:h-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start px-4 gap-2 md:gap-0">
                    <div className="flex items-center gap-2">
                        <Phone size={16} />
                        <span className="text-base font-medium">1800 28 28 98</span>
                    </div>

                    <div className="hidden md:flex justify-center">
                        <Image src="/VPASSlogowhite.png" alt="Logo" width={56} height={56} className="rounded-sm -mt-1" />
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                        <Clock size={15} />
                        <span>8h00 → 18h00</span>
                        <MapPin size={15} />
                        <span>Vietnam</span>
                    </div>
                </div>
            </div>


            <div className="sticky top-0 z-50 bg-white shadow-md max-w-7xl mx-4 md:mx-auto -mt-8 rounded-xl transition-all duration-300">
                <div className="px-4 flex justify-between items-center h-16">
                    <Image src="/VPASSlogodark.png" alt="VPASS" width={40} height={40} className="object-contain md:hidden " />

                    <nav className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={`text-sm font-bold transition-all px-3 py-2 rounded-2xl
                                            ${isActive
                                            ? "bg-[#e6ecff] text-[#1f2c63] border-b-2 border-[#1f2c63]"
                                            : "text-gray-700 hover:text-[#1f2c63] hover:bg-gray-100"
                                        }
                                        `}
                                >
                                    {item.label}
                                </Link>

                            )
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button className="border border-amber-900 rounded-md p-2 hover:bg-gray-50">
                            <User size={18} className="text-gray-600" />
                        </button>
                        <button className="border border-amber-900 rounded-md p-2 hover:bg-gray-50">
                            <Flag size={20} className="text-red-600" />
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden border border-amber-900 rounded-md p-2 hover:bg-gray-50"
                        >
                            {isOpen ? <X size={20} className="text-gray-600" /> : <Menu size={20} className="text-gray-600" />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <nav className="md:hidden flex flex-col items-start gap-3 px-6 py-3 bg-white border-t rounded-b-xl">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-gray-700 hover:text-[#1f2c63]"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                )}
            </div>
        </>
    )
}
