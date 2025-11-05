'use client'

import NewsCard from "@/components/home/news/NewsCard";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const newsData = [
    {
        image: "/2410128626_Screenshot20241012110323compressed.jpg",
        date: "12-10-2024",
        author: "Vpass",
        title: "Ẩm thực truyền cảm hứng phát triển du lịch trên thế giới",
        excerpt: "Ẩm thực truyền cảm hứng phát triển du lịch trên thế giới",
    },
    {
        image: "/2410100143_Picture1.jpg",
        date: "10-10-2024",
        author: "Vpass",
        title: "Phong cảnh đẹp ở Việt Nam và hành trình xuôi dòng thưởng ngoạn",
        excerpt: "Phong cảnh đẹp ở Việt Nam chưa bao giờ khiến tín đồ xê dịch thất vọng.",
    },
    {
        image: "/2410252263_SHOPPINGONLINE6.png",
        date: "04-10-2024",
        author: "Vpass",
        title: "Thời đại Công nghệ 4.0 - Giải pháp dành riêng cho chủ sở hữu kỳ...",
        excerpt: "Nền tảng trao đổi & cho thuê kỳ nghỉ, cánh cửa sáng đang mở ra cho những nhà đầu tư cùng các công ty bán kỳ nghỉ đang...",
    },
    {
        image: "/2409120200_dulichhuemuavanlinetine.jpeg",
        date: "04-10-2024",
        author: "Vpass",
        title: "Đến cố đô Huế cần lưu ý gì về thời tiết",
        excerpt: "Bộ phim hài lãng mạn vừa ra mắt A Tourist’s Guide to Love do Steven K. Tsuchida đạo diễn.",
    },
];

export default function NewsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1); // thêm biến direction

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % newsData.length);
    };

    // 🔁 Tự động chuyển ảnh mỗi 5 giây
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const visibleNews = [
        newsData[currentIndex],
        newsData[(currentIndex + 1) % newsData.length],
        newsData[(currentIndex + 2) % newsData.length],
    ];

    return (
        <section className="bg-[#faf8f6] min-h-screen px-8 md:px-48 py-20 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
                <div>
                    <p className="uppercase text-sm text-gray-500 tracking-wide mb-2">
                        Vpass News
                    </p>
                    <h1 className="text-5xl font-serif font-bold text-gray-900">
                        Tin Tức
                    </h1>
                </div>
                <button
                    onClick={nextSlide}
                    className="bg-[#9a7455] text-white p-3 rounded-md shadow-md hover:bg-[#7e5e45] transition"
                >
                    <ArrowRight />
                </button>
            </div>

            {/* News slider */}
            <div className="relative w-full overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={currentIndex}
                        className="grid md:grid-cols-3 gap-8"
                        initial={{ x: direction > 0 ? 100 : -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: direction > 0 ? -100 : 100, opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                        {visibleNews.map((item, i) => (
                            <NewsCard key={i} {...item} />
                        ))}
                    </motion.div>
                </AnimatePresence>



            </div>
        </section>
    );
}
