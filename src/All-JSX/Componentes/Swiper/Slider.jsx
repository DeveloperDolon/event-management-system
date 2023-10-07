
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./Slider.css";




const Slider = () => {


    return (
        <>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={
                    {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 2.50,
                    }
                }
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}

                className="w-full overflow-hidden"
            >
                <SwiperSlide
                className="w-fit relative shadow-2xl">
                    {({ isActive }) => {

                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg bg-gray-100 p-5" src="https://i.ibb.co/SyWRdVY/wan-san-yip-ID1y-Wa1-Wpx0-unsplash.jpg" alt="" />
                        </>
                    }}
                </SwiperSlide>
                <SwiperSlide className="w-fit relative shadow-2xl">

                    {({ isActive }) => {
                        return (<>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg bg-gray-100 p-5" src="https://i.ibb.co/Cnx9hZb/group-diverse-people-having-business-meeting.jpg" alt="" />
                        </>
                        )
                    }}


                </SwiperSlide>
                <SwiperSlide className="w-fit relative shadow-2xl">

                    {({ isActive }) => {
                       
                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg bg-gray-100 p-5" src="https://i.ibb.co/7p8rdt1/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg" alt="" />
                        </>
                    }}


                </SwiperSlide>
                <SwiperSlide className="w-fit relative shadow-2xl">

                    {({ isActive }) => {

                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg bg-gray-100 p-5" src="https://i.ibb.co/N7dtCVD/austin-distel-rxp-Th-Owu-Vg-E-unsplash.jpg" alt="" />
                        </>
                    }}

                </SwiperSlide>
                <SwiperSlide className="w-fit relative shadow-2xl">

                    {({ isActive }) => {

                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                            </span>
                            
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg bg-gray-100 p-5" src="https://i.ibb.co/0mmS1fr/tim-meyer-As-T9-Dt11-Fk-A-unsplash.jpg" alt="" />
                        </>
                    }}

                </SwiperSlide>
                <SwiperSlide className="w-fit relative shadow-2xl">

                    {({ isActive }) => {

                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg bg-gray-100 p-5" src="https://i.ibb.co/MPPt916/alexandre-pellaes-6v-Ajp0psc-X0-unsplash.jpg" alt="" />
                        </>
                    }}

                </SwiperSlide>

                <div className="slider-container">
                    <div className="swiper-button-prev slider-arrow h-2 w-2 bg-white p-8 rounded-full">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>

                    <div
                        className="swiper-button-next slider-arrow h-2 w-2 bg-white p-8 rounded-full">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                </div>


                <div className="swiper-pagination"></div>

            </Swiper>
        </>
    );
};

export default Slider;