import { Facebook, Linkedin, Mail, Phone, Send, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="bg-[#1f2c63] text-white relative overflow-hidden">
            {/* Pattern nền */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "url('/pattern-bg.png')",
                    backgroundRepeat: "repeat",
                }}
            />

            <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Cột 1 */}
                {/* Cột 1 */}
                <div className="space-y-4 flex flex-col items-center text-center md:items-start md:text-left">

                    <div className="flex items-center justify-center gap-2">
                        <Image
                            src="/VPASSlogowhite.png"
                            alt="VPass Asia"
                            width={90}
                            height={90}
                        />
                    </div>

                    <p className="text-sm leading-relaxed">
                        Công Ty Cổ Phần Dịch Vụ Nghỉ Dưỡng Cao Cấp VPASS ASIA
                    </p>

                    <p className="text-xs text-gray-300">
                        Số ĐKKD: 0107998711 <br />
                        Do Sở Kế hoạch và Đầu tư thành phố Hà Nội cấp lần đầu ngày 21 tháng
                        09 năm 2017
                    </p>

                    <div className="flex justify-center">
                        <Image
                            src="/2106179639_logoSaleNoti.png"
                            alt="Đã thông báo Bộ Công Thương"
                            width={120}
                            height={40}
                        />
                    </div>

                    <div className="flex gap-3 mt-3 items-center justify-center">
                        {[
                            { icon: Facebook, href: "#" },
                            { icon: Twitter, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: Youtube, href: "#" },
                        ].map(({ icon: Icon, href }, index) => (
                            <a
                                key={index}
                                href={href}
                                className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-amber-600 transition"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>


                {/* Cột 2 */}
                <div className="md:mx-auto space-y-5">
                    <h3 className="font-semibold text-lg mb-2">Cẩm nang.</h3>
                    <ul className="space-y-5 text-sm">
                        <li>+ Về VPass Asia</li>
                        <li>+ Dịch vụ</li>
                        <li>+ Tin tức</li>

                    </ul>
                    <div className="font-bold">Liên hệ</div>
                    <div className="space-y-1 text-sm">
                        <p className="flex items-center gap-2">
                            <Phone size={16} className="text-yellow-800" /> Hotline: 1800 2828
                            98
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail size={16} className="text-yellow-800" /> Email:
                            cskh@vpass.asia
                        </p>
                    </div>
                </div>

                {/* Cột 3 */}
                <div className="space-y-5">
                    <h3 className="font-semibold text-lg mb-2">Điều khoản sử dụng.</h3>
                    <ul className="space-y-5 text-sm">
                        <li>+ Quy định chung</li>
                        <li>+ Chính sách bảo mật</li>
                        <li>+ Chính sách mua hàng & thanh toán</li>
                        <li>+ Chính sách đổi trả</li>
                    </ul>

                    <h3 className="font-semibold text-lg">Đăng Ký Nhận Thông Tin.</h3>

                    <div className="flex items-center rounded-full overflow-hidden bg-white/10">
                        <input
                            type="email"
                            placeholder="Nhập email..."
                            className="flex-1 px-4 py-2 text-sm text-white placeholder-gray-300 bg-transparent outline-none"
                        />
                        <button className="bg-yellow-800 hover:bg-yellow-900 px-3 py-2 transition">
                            <Send size={16} />
                        </button>
                    </div>

                    <p className="text-xs text-gray-300">
                        Hãy để lại email VPass sẽ liên hệ với bạn!
                    </p>


                </div>
            </div>

            {/* Copyright */}
            <div className="bg-[#0e153a] text-center text-xs py-3">
                Copyright By <span className="text-yellow-900">@VPASS ASIA</span> - 2020
            </div>
        </footer>
    );
}
