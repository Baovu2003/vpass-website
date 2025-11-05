import Image from "next/image";
import { Calendar, User } from "lucide-react";

interface NewsCardProps {
    image: string;
    date: string;
    author: string;
    title: string;
    excerpt: string;
}

export default function NewsCard({
    image,
    date,
    author,
    title,
    excerpt,
}: NewsCardProps) {
    return (
        <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
            <Image
                src={image}
                alt={title}
                width={400}
                height={250}
                className="w-full h-52 object-cover"
            />
            <div className="p-5">
                <div className="flex items-center gap-4 text-gray-500 text-sm mb-2">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {date}
                    </span>
                    <span className="flex items-center gap-1">
                        <User className="w-4 h-4" /> By {author}
                    </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2 hover:text-indigo-700 line-clamp-2">
                    {title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>
            </div>
        </div>
    );
}
