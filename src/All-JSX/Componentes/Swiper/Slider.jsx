
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import coxBazar from "../../../assets/Rectangle 1.png";
import sajek from "../../../assets/sajek.jpg";
import sreemongol from "../../../assets/sreemongol.jpg";
import sundorbon from "../../../assets/sundorbon.jpg";
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";



const Slider = () => {

    const {setBackgroundImg, setBannerTitle} = useContext(AuthContext);

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
                        modifier: 1,
                    }
                }
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}

                className=""
            >
                <SwiperSlide className="w-fit relative">
                    {({ isActive }) => {
                        isActive && setBackgroundImg(coxBazar);
                        isActive && setBannerTitle("Cox's Bazar");

                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                                <span className="absolute bottom-10 left-5 bebas-font">Cox&apos;s Bazar</span>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg" src={coxBazar} alt="" />
                        </>
                    }}
                </SwiperSlide>
                <SwiperSlide className="w-fit relative">

                    {({ isActive }) => {
                        isActive && setBackgroundImg(sundorbon);
                        isActive && setBannerTitle("Sundorbon");

                        return (<>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                                <span className="absolute bottom-10 left-5 bebas-font">Sundorbon</span>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg" src={sundorbon} alt="" />
                        </>
                        )
                    }}


                </SwiperSlide>
                <SwiperSlide className="w-fit relative">

                    {({ isActive }) => {
                        isActive && setBackgroundImg(sreemongol);
                        isActive && setBannerTitle("Sreemongol");

                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                                <span className="absolute bottom-10 left-5 bebas-font">Sreemongol</span>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg" src={sreemongol} alt="" />
                        </>
                    }}


                </SwiperSlide>
                <SwiperSlide className="w-fit relative">

                    {({ isActive }) => {
                        isActive && setBackgroundImg(sajek);
                        isActive && setBannerTitle("Sajek");

                        return <>
                            <span className={` md:text-4xl text-2xl border-[#F9A51A] ${isActive && "border-2"}  overlay z-30 text-white`}>
                                <span className="absolute bottom-10 left-5 bebas-font">Sajek</span>
                            </span>
                            <img className="md:h-[500px] h-[300px] w-full rounded-lg" src={sajek} alt="" />
                        </>
                    }}

                </SwiperSlide>

                <div className="slider-container flex absolute bottom-14 left-20 z-40">
                    <div className="swiper-button-prev slider-arrow h-2 w-2 bg-white p-8 rounded-full rotate-180">
                        <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>

                    <div
                        className="swiper-button-next slider-arrow h-2 w-2 bg-white p-8 rounded-full rotate-180">
                        <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                </div>


                <div className="swiper-pagination"></div>

            </Swiper>
        </>
    );
};

export default Slider;