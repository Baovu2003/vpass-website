"use client"

import { motion } from "framer-motion"
import { Coffee, Gift, Plane, Hotel, ShoppingBag } from "lucide-react"

const features = [
    { icon: Coffee, title: "Ẩm thực", desc: "Thưởng thức đặc quyền tại các nhà hàng hàng đầu." },
    { icon: Gift, title: "Ưu đãi", desc: "Tích điểm và đổi quà hấp dẫn trong hệ sinh thái VPASS." },
    { icon: Plane, title: "Du lịch", desc: "Trải nghiệm kỳ nghỉ sang trọng và tiện nghi khắp nơi." },
    { icon: Hotel, title: "Nghỉ dưỡng", desc: "Truy cập hàng ngàn khách sạn, resort đẳng cấp quốc tế." },
    { icon: ShoppingBag, title: "Mua sắm", desc: "Tận hưởng đặc quyền tại các thương hiệu cao cấp." },
]

export default function ExperienceSection() {
    return (
        <section className="bg-white py-20 px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                // transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                // transition={{ type: "spring", stiffness: 200, damping: 10 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-5xl mx-auto text-center"
            >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Thay đổi trải nghiệm – Tận hưởng cuộc sống
                </h2>
                <p className="text-gray-600 mb-12 text-lg">
                    VPass Asia mang đến cho bạn những đặc quyền và ưu đãi hấp dẫn ở mọi lĩnh vực.
                </p>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 justify-center">
                    {features.map(({ icon: Icon, title, desc }, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: index * 0.15,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, y: -4 }}
                            className="bg-white rounded-xl shadow-md hover:shadow-xl p-6 transition-all duration-300 border border-gray-100"
                        >
                            <div className="w-12 h-12 flex items-center justify-center bg-[#FFF4E5] rounded-full mx-auto mb-4 text-amber-700">
                                <Icon size={26} />
                            </div>
                            <h3 className="text-lg font-semibold text-[#1f2c63] mb-2">{title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}
