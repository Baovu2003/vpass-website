"use client";
import { Star } from "lucide-react";
import React from "react";

const SidebarFilter = () => {
    const types = ["Kỳ nghỉ trao đổi", "Kỳ nghỉ cho thuê", "Kỳ nghỉ thường"];

    const otherFilters = [
        {
            title: "Hạng sao",
            options: [5, 4, 3],
            renderLabel: (star: number) => (
                <span className="text-yellow-700 flex items-center gap-1">
                    {Array.from({ length: star }).map((_, i) => (
                        <Star key={i} size={18} stroke="#A16207" fill="#78350F" />
                    ))}
                </span>
            ),
        },
        {
            title: "Khoảng điểm",
            options: [
                "0 - 200 VPass Point",
                "2000 - 5000 VPass Point",
                "Trên 5000 VPass Point",
            ],
        },
        {
            title: "Loại hình nơi ở",
            options: ["Khách sạn", "Residence", "Khu nghỉ dưỡng"],
        },
        {
            title: "Loại phòng",
            options: ["Deluxe Room", "Superior Room", "Biệt thự 03 phòng ngủ"],
        },
    ];

    return (
        <div className="flex flex-col gap-6">
            {/* --- Card 1: Loại kỳ nghỉ --- */}
            <div className="bg-white rounded-2xl shadow-md p-8 w-[320px]">
                <h4 className="text-xl font-semibold mb-6 border-l-4 border-gray-400 pl-3">
                    Loại kỳ nghỉ
                </h4>
                <ul className="space-y-4">
                    {types.map((type, i) => (
                        <li
                            key={i}
                            className={`cursor-pointer py-4 px-6 rounded-xl font-medium text-base border transition-all duration-300
                ${i === 1
                                    ? "bg-[#1B2459] text-white border-transparent shadow-lg"
                                    : "bg-gray-50 text-gray-800 border-gray-200 hover:bg-[#1B2459] hover:text-white hover:shadow-md"
                                }`}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
            </div>

            {/* --- Card 2: Các bộ lọc khác --- */}
            <div className="bg-white rounded-2xl shadow-md p-8 w-[320px] space-y-8">
                {otherFilters.map((group, index) => (
                    <div key={index}>
                        <h4 className="text-xl font-semibold mb-4 border-l-2 border-yellow-700 pl-3">
                            {group.title}
                        </h4>
                        <div className="space-y-3">
                            {group.options.map((option, i) => (
                                <label
                                    key={i}
                                    className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-all"
                                >
                                    <input
                                        type="checkbox"
                                        className="w-5 h-5 accent-yellow-900 cursor-pointer"
                                    />
                                    {group.renderLabel ? (
                                        group.renderLabel(option as number)
                                    ) : (
                                        <span className="text-gray-700 font-semibold text-base">{option}</span>
                                    )}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SidebarFilter;
