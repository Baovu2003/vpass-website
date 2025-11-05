import { Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const AboutUs = () => {
    return (
        <div>
            <section className="relative w-full h-[50vh] overflow-hidden rounded-b-2xl shadow-lg">
                <Image
                    src="/2001168171_IZZIBusiness.192048px.jpg"
                    alt="Beautiful beach vacation"
                    fill
                    priority
                    className="object-cover animate-zoomInOut"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute bottom-0 right-1/4 z-20 bg-white px-8 py-4 ">
                    <span className="text-gray-700 font-medium">
                        <span className="text-black font-semibold">Home</span> |<span className='text-yellow-900 font-bold text-md'> Về chúng tôi</span>
                    </span>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        About VPASS
                    </h1>
                    <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
                        Discover our story and mission to make every journey memorable with
                        VPASS.
                    </p>
                </div>
            </section>

            {/* Main content */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center">
                <h2 className="text-xl font-bold mb-4">Tiên phong đưa công nghệ vào mô hình </h2>
                <div className='text-6xl'>Sở hữu Kỳ nghỉ Du lịch</div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 text-left mt-10'>
                    <div className="p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 bg-white/60 backdrop-blur-sm">
                        <h3 className="text-2xl font-bold  mb-4 text-center">Sứ Mệnh</h3>
                        <div className='text-muted-foreground mb-6 leading-relaxed '>Chúng tôi mang đến một giải pháp toàn diện nhằm thúc đẩy sự tăng trưởng của thị trường Bất động sản nghỉ dưỡng và các mô hình du lịch - nghỉ dưỡng tiên tiến, hiện đại. Đồng thời, chúng tôi là cầu nối tin cậy giữa các chủ sở hữu bất động sản và là trợ lý đắc lực của các Chủ đầu tư trong hoạt động phát triển, chăm sóc khách hàng.</div>
                    </div>

                    <div className="p-8 rounded-2xl border border-gray-100  shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-300 bg-white/60 backdrop-blur-sm">
                        <div className="text-2xl font-bold text-center mb-4">Tầm Nhìn
                        </div>
                        <div className="text-muted-foreground mb-6 leading-relaxed ">Dựa vào thế mạnh và kinh nghiệm trong hơn 10 năm tiên phong phát triển dịch vụ khách hàng cao cấp tại Việt Nam của các nhà sáng lập, chúng tôi mong muốn đưa VPASS trở thành một tổ chức uy tín mang tầm vóc Quốc tế khi sở hữu hệ thống mạng lưới nhà cung cấp cũng như đối tác mạnh mẽ phủ sóng toàn cầu</div>
                    </div>
                </div>


            </section >
            <section className='bg-[#2e365c] py-20 text-white'>
                <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6'>
                    <div>
                        <p className="text-yellow-700 font-bold uppercase tracking-wide mb-2">Về chúng tôi</p>
                        <h2 className="text-4xl font-serif font-semibold mb-6">Giới thiệu chung</h2>
                        <p className="text-gray-200 leading-relaxed mb-6">
                            Để mỗi kỳ nghỉ của bạn và gia đình là từng giây phút tràn ngập hạnh phúc và mỗi khoảnh khắc
                            đều là hình ảnh trân quý sẽ lưu giữ trong tâm trí mỗi thành viên của cuộc đời. Vượt qua muôn
                            vàn khó khăn của thời đại và thị trường, một sản phẩm công nghệ mang theo tất cả tâm huyết
                            cũng như lời hứa đồng hành trên đường tìm về nơi hạnh phúc của chúng tôi đều đã được đặt
                            trọn vào VPASS – Một sản phẩm công nghệ dành riêng cho cộng đồng Chủ sở hữu & Nhà đầu tư khu
                            nghỉ dưỡng cao cấp.
                        </p>
                        <p className="text-gray-200 leading-relaxed">
                            Là nền tảng trao đổi và cho thuê kỳ nghỉ đầu tiên và duy nhất tại Việt Nam, trở thành hội
                            viên VPASS bạn sẽ được trao sức thay đổi trải nghiệm cho cả gia đình vào kỳ nghỉ có định
                            hình sẵn thông qua sự bảo đảm tệp điểm đến và dịch vụ được đầu tư chỉn chu, mang đến ngày
                            kỳ nghỉ hạnh phúc viên mãn trọn vẹn.
                        </p>
                    </div>
                    <div className="relative rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/2410073671_anhngangfb.jpg"
                            alt="Giới thiệu chung VPASS"
                            width={800}
                            height={500}
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[url('/pattern.png')] bg-cover bg-center opacity-30"></div>
            </section>

            <section className="relative bg-white py-24 overflow-hidden">
                {/* Background image dưới */}
                <div className="absolute bottom-0 left-0 w-full h-[300px] bg-[url('/pool-bg.jpg')] bg-cover bg-center opacity-70 mask-gradient-to-t from-white to-transparent" />

                <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* LEFT: Image + cards */}
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bg-white shadow-md rounded-lg p-8 flex flex-col items-center text-center">
                            <Users width={40} height={40} />
                            <h3 className="mt-4 font-semibold text-gray-800 text-lg">Nghỉ dưỡng</h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Trải nghiệm nghỉ dưỡng chuyên biệt và cao cấp nhất dành cho khách hàng.
                            </p>
                        </div>

                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src="/2410073671_anhngangfb.jpg"
                                alt="Resort"
                                width={300}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="overflow-hidden rounded-lg">
                            <Image
                                src="/2410073671_anhngangfb.jpg"
                                alt="Resort view"
                                width={300}
                                height={200}
                                className="object-cover w-full h-full"
                            />
                        </div>

                        <div className="bg-[#2e365c] text-white rounded-lg p-8 flex flex-col items-center text-center">
                            <Users width={40} height={40} />
                            <h3 className="mt-4 font-semibold text-lg">Công nghệ</h3>
                            <p className="text-sm text-gray-300 mt-2">
                                Nền tảng công nghệ tân tiến chuyên biệt cho trải nghiệm dịch vụ sang trọng.
                            </p>
                        </div>
                    </div>


                    <div>
                        <h2 className="text-5xl font-serif font-semibold mb-6 leading-tight text-gray-900">
                            Trải nghiệm <br /> cùng VPASS
                        </h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            VPASS đem tới cho Quý khách những trải nghiệm nghỉ dưỡng và dịch vụ cao cấp chuyên biệt cùng
                            nhiều ưu đãi từ các đối tác nhãn hàng lớn trong nước và quốc tế. Nhờ vào nền tảng công nghệ
                            hiện đại và hệ thống chương trình thành viên tối ưu giúp khách hàng có được những trải
                            nghiệm dịch vụ & nghỉ dưỡng cao cấp trên toàn thế giới.
                        </p>
                    </div>
                </div>
            </section>


        </div >
    )
}

export default AboutUs