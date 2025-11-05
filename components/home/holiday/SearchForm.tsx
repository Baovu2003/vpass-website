"use client";

import React from "react";

interface SearchFormProps {
    onSubmit?: (data: any) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSubmit }) => {
    return (
        <form
            className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
            onSubmit={(e) => {
                e.preventDefault();
                const data = Object.fromEntries(new FormData(e.currentTarget));
                onSubmit?.(data);
            }}
        >
            {/* Điểm đến */}
            <div>
                <label className="block font-semibold text-gray-700 mb-1">
                    Điểm đến
                </label>
                <input
                    name="destination"
                    placeholder="Chọn điểm đến"
                    className="w-full border-b border-yellow-800 py-2 focus:outline-none focus:border-blue-600"
                />
            </div>

            {/* Từ khóa */}
            <div>
                <label className="block font-semibold text-gray-700 mb-1">
                    Từ khóa
                </label>
                <input
                    name="keyword"
                    placeholder="Từ khóa tìm kiếm"
                    className="w-full border-b border-yellow-900 py-2 focus:outline-none focus:border-blue-600"
                />
            </div>

            {/* Ngày nhận phòng */}
            <div>
                <label className="block font-semibold text-gray-700 mb-1">
                    Ngày nhận phòng
                </label>
                <input
                    name="checkin"
                    type="date"
                    className="w-full border-b border-yellow-900 py-2 focus:outline-none focus:border-blue-600"
                />
            </div>

            {/* Ngày trả phòng */}
            <div>
                <label className="block font-semibold text-gray-700 mb-1">
                    Ngày trả phòng
                </label>
                <input
                    name="checkout"
                    type="date"
                    className="w-full border-b border-yellow-900 py-2 focus:outline-none focus:border-blue-600"
                />
            </div>

            {/* Nút */}
            <button
                type="submit"
                className="bg-blue-900 text-white font-semibold py-3 rounded-lg hover:bg-blue-800 transition"
            >
                TÌM KIẾM
            </button>
        </form>
    );
};

export default SearchForm;
