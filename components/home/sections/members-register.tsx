"use client";
import Image from "next/image";

export function MembersRegister() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center  bg-black/60">

            <Image
                src="/05.jpg"
                alt="Resort background"
                fill
                className="object-cover -z-10 brightness-75"
                priority
            />

            {/* Overlay content */}
            <div className="bg-white/95 shadow-2xl rounded-lg px-12 py-10 max-w-5xl flex flex-col md:flex-row gap-10">
                <div className="md:w-1/2">
                    <h1 className="text-4xl  font-medium text-gray-900 mb-6 leading-snug">
                        Tối ưu kỳ nghỉ sở hữu <br /> cùng
                        <span className="text-indigo-800 font-bold">VPASS</span>
                    </h1>
                    <button className="mt-2 bg-indigo-900 hover:bg-indigo-700 text-white px-6 py-3 rounded shadow-md transition">
                        ĐĂNG KÝ HỘI VIÊN
                    </button>
                </div>

                <div className="md:w-1/2 flex flex-col gap-8 text-gray-800 ">
                    <div className="relative">
                        <span className="absolute md:-left-16 -top-6 text-[100px] font-bold text-gray-300/50" >01</span>
                        <h2 className="font-bold text-lg mb-1 relative z-10">Làm chủ giá trị tài sản</h2>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                            Không cần thông qua môi giới, hội viên tự do lựa chọn phương thức giao dịch
                            (trao đổi/cho thuê), quản lý chất lượng và giá trị tạo ra từ khu nghỉ theo mục tiêu riêng.
                        </p>
                    </div>
                    <div className="relative">
                        <span className="absolute md:-left-16 -top-6 text-[100px] font-bold text-gray-300/50" >02</span>
                        <h2 className="font-bold text-lg mb-1 relative z-10">  Bảo đảm an toàn, minh bạch</h2>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                            Cả người bán và người mua đều được nền tảng bảo vệ và đảm bảo về tính minh bạch trong mỗi giao dịch, tránh trường hợp đầu cơ, lừa đảo.

                        </p>
                    </div><div className="relative">
                        <span className="absolute md:-left-16 -top-6 text-[100px] font-bold text-gray-300/50" >03</span>
                        <h2 className="font-bold text-lg mb-1 relative z-10"> Quà tặng độc quyền</h2>
                        <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                            Cơ hội nhận những phần quà độc quyền, dành tặng riêng cho khách hàng đăng ký trở thành hội viên của VpassPlatform khi đăng ký qua nền tảng.

                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
