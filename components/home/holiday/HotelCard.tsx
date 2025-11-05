import { Star } from "lucide-react";
import React from "react";

interface HotelCardProps {
    name: string;
    address: string;
    price: string;
    image: string;
    rating?: number;
}

const HotelCard: React.FC<HotelCardProps> = ({
    name,
    address,
    price,
    image,
    rating = 5,
}) => {
    return (
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
            <img
                src={image}
                alt={name}
                className="w-full md:w-1/3 h-56 object-cover"
            />
            <div className="flex flex-col justify-between p-5 flex-1">
                <div>
                    <div className="flex items-center gap-1 mb-1">
                        {[...Array(rating)].map((_, i) => (
                            <span key={i}>
                                <Star key={i} color="#CA8A04" fill="#CA8A04" size={20} />
                            </span>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                    <p className="text-sm text-gray-500">{address}</p>
                </div>
                <div className="flex items-center justify-between mt-3">
                    <p className="text-gray-700 font-semibold">
                        từ <span className="text-yellow-900">{price}</span> /đêm
                        <div className="text-xs font-semibold text-gray-500">Có <span>
                            <strong>2</strong></span> kỳ nghỉ cho thuê</div>
                    </p>
                    <button className="text-yellow-900 font-bold hover:underline border-t-2 border-gray-300 pt-5">
                        Đặt ngay
                    </button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default HotelCard;
