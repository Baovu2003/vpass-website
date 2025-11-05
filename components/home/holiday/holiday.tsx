import Image from 'next/image'
import React from 'react'
import HotelCard from './HotelCard'
import SearchForm from './SearchForm'
import SidebarFilter from './SidebarFilter'

const Holiday = () => {
    return (
        <div className='min-h-screen bg-gray flex flex-col '>
            <section className="relative w-full h-[400px]">
                <Image
                    src="/2012070126_VVPASS.jpg"
                    alt="Beautiful beach vacation"
                    fill
                    priority
                    className="object-cover animate-zoomInOut"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[90%] md:w-4/5">
                    <SearchForm />
                </div>
            </section>

            {/* Kết quả */}
            <section className="max-w-7xl mx-auto px-6 mt-24 mb-16 grid grid-cols-1 md:grid-cols-4 gap-20 md:gap-[30%]">
                <div className="md:col-span-1">
                    <SidebarFilter />
                </div>
                <div className="md:col-span-3 space-y-6">
                    <p className="text-gray-600">
                        Có <span className="font-semibold">38</span> kết quả tìm kiếm
                    </p>

                    <HotelCard
                        name="The Sea Holiday Sunset Town Phú Quốc"
                        address="Khu thị trấn địa Trung Hải - An Thoi, Kiến Giang, Vietnam"
                        price="1.627.500đ"
                        image="/2403279670_khutheseahillsidepq20220419032949.jpg"
                    />
                    <HotelCard
                        name="Best Western Premier Sonasea Phu Quoc Resort"
                        address="Ấp Đường Bào, xã Dương Tơ, Huyện Phú Quốc, tỉnh Kiên Giang, Việt Nam"
                        price="2.050.000đ"
                        image="/2411058770_61d31bc2c61e58d8474953ecd11453b3.jpg"
                    />
                </div>
            </section>
        </div>
    )
}

export default Holiday