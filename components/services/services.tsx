'use client'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

const services = [
    {
        title: "TRAO ĐỔI KỲ NGHỈ",
        subtitle: "Dịch vụ",
        description:
            "VPass cung cấp nền tảng trao đổi kỳ nghỉ giúp các chủ sở hữu có thể dễ dàng ký gửi và trao đổi kỳ nghỉ của mình với các kỳ nghỉ trong bộ sưu tập kỳ nghỉ của VPass cũng như của các chủ sở hữu khác ở Việt Nam và quốc tế.",
        image: "/2410073671_anhngangfb.jpg",
    },
    {
        title: "QUẢN LÝ TÀI SẢN NGHỈ DƯỠNG",
        subtitle: "Dịch vụ",
        description:
            "VPass hỗ trợ các chủ sở hữu trong việc quản lý, khai thác và tối ưu giá trị của tài sản nghỉ dưỡng, đảm bảo hiệu quả đầu tư và trải nghiệm khách hàng tốt nhất.",
        image: "/2410073671_anhngangfb.jpg",
    },
    {
        title: "CHƯƠNG TRÌNH THÀNH VIÊN VIP",
        subtitle: "Dịch vụ",
        description:
            "Trở thành thành viên VPASS VIP để nhận quyền lợi đặc biệt, tích điểm, giảm giá và ưu đãi tại hàng trăm khu nghỉ dưỡng và dịch vụ cao cấp.",
        image: "/2410073671_anhngangfb.jpg",
    },
];

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
};

const Services = () => {
    return (
        <div>
            <section className="relative w-full h-[50vh] overflow-hidden rounded-b-2xl shadow-lg">
                <Image
                    src="/2012079455_DchvcaVPASS.jpg"
                    alt="Beautiful beach vacation"
                    fill
                    priority
                    className="object-cover scale-105 animate-zoomInOut"
                />
                <div className="absolute inset-0 bg-black/60" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">DỊCH VỤ CỦA VPASS</h1>
                    <p className="text-lg text-gray-200 max-w-2xl">
                        Khám phá những dịch vụ đẳng cấp giúp tối ưu trải nghiệm nghỉ dưỡng và giá trị đầu tư của bạn.
                    </p>
                </motion.div>

                <div className="absolute bottom-0 right-1/4 z-20 bg-white px-8 py-4 rounded-t-xl shadow-lg">
                    <span className="text-gray-700 font-medium">
                        <span className="text-black font-semibold">Home</span> |
                        <span className="text-yellow-900 font-bold text-md"> Dịch Vụ</span>
                    </span>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative py-24 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 space-y-24">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            className={`flex flex-col md:flex-row items-center gap-10 
                                ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                        >

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="relative w-full md:w-1/2 rounded-2xl overflow-hidden shadow-xl"
                            >
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={600}
                                    height={400}
                                    className="object-cover w-full h-full rounded-2xl"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />
                            </motion.div>
                            {/* Nội dung */}
                            <motion.div
                                variants={fadeInUp} // 👈 Animation riêng cho phần text
                                className="md:w-1/2"
                            >
                                <p className="text-yellow-700 font-semibold uppercase tracking-wider mb-2">
                                    {service.subtitle}
                                </p>
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                    {service.title}
                                </h2>
                                <p className="text-gray-600 leading-relaxed text-lg mb-6">
                                    {service.description}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-6 py-2 bg-[#1f2c63] text-white font-medium rounded-full shadow-md hover:bg-yellow-900 transition"
                                >
                                    Tìm hiểu thêm
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Services
