"use client";

import Image from "next/image";
import { Search, ChevronRight } from "lucide-react";

interface VacationCard {
    title: string;
    subtitle: string;
}

const vacationCards: VacationCard[] = [
    {
        title: "Trao đổi kỳ nghỉ",
        subtitle: "Đến muốn nơi và THAY ĐỔI TRẢI NGHIỆM của bạn!",
    },
    {
        title: "Bán kỳ nghỉ",
        subtitle: "Tối ưu giá trị kỳ nghỉ với mức LỢI NHUẬN TỐT NHẤT!",
    },
    {
        title: "Mua kỳ nghỉ",
        subtitle: "Đa dạng điểm đến cùng Vpass với mức giá SIÊU HỜI!",
    },
];

export function HeroSection() {
    return (
        <div className="relative w-full h-[60vh] overflow-hidden rounded-b-2xl shadow-lg -mt-9">
            {/* Background Image with zoom animation */}
            <Image
                src="/2408222797_BannerChomng.png"
                alt="Beautiful beach vacation"
                fill
                priority
                className="object-cover animate-zoomInOut"
            />
            {/* Content */}
            <div className="absolute inset-0 max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
                <div className="flex flex-col lg:flex-row w-full items-start justify-between gap-10">
                    {/* Left Section */}
                    <div className="lg:w-2/3 text-white space-y-4">
                        <div className="space-y-2">
                            <p className="text-xs md:text-sm font-semibold tracking-wider text-blue-100 uppercase">
                                TỰ HÀO LÀ NỀN TẢNG TRAO ĐỔI KỲ NGHỈ ĐẦU TIÊN TẠI VIỆT NAM
                            </p>
                            <h1 className="text-3xl md:text-4xl font-bold leading-snug drop-shadow-lg">
                                Cùng VPASS ASIA tối ưu giá trị
                                <br />
                                kỳ nghỉ của bạn ngay hôm nay!
                            </h1>
                        </div>

                        {/* Search Bar */}
                        <div className="flex w-full max-w-lg mt-4 rounded-lg overflow-hidden shadow-md bg-white">
                            <input
                                type="text"
                                placeholder="Tìm kiếm Khu nghỉ dưỡng, Địa điểm, Từ khóa..."
                                className="flex-1 px-4 py-2 text-gray-800 focus:outline-none text-xs"
                            />
                            <button className="bg-[#1f2c63] hover:bg-[#16204a] text-white px-4 py-2 transition-colors flex items-center justify-center">
                                <Search size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-1/3 space-y-3">
                        <div className="bg-white/15 backdrop-blur-md rounded-xl p-4 shadow-lg space-y-3">
                            {vacationCards.map((card, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1f2c63]/90 hover:bg-white text-white transition-all rounded-lg p-3 cursor-pointer flex justify-between items-center group"
                                >
                                    <div className="space-y-0.5">
                                        <h3 className="font-semibold text-base mb-0.5 group-hover:text-[#1f2c63] transition-colors">
                                            {card.title}
                                        </h3>
                                        <p className="text-xs text-gray-200 group-hover:text-[#1f2c63] transition-colors">
                                            {card.subtitle}
                                        </p>
                                    </div>
                                    <ChevronRight
                                        size={18}
                                        className="text-gray-300 group-hover:text-[#1f2c63] transition-transform group-hover:translate-x-1"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Zoom animation keyframes */}
            <style jsx global>{`
        @keyframes zoomInOut {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.08);
          }
        }
        .animate-zoomInOut {
          animation: zoomInOut 10s ease-in-out infinite;
        }
      `}</style>
        </div>
    );
}
