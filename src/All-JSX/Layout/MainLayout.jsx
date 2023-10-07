import { Outlet } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Banner from "../Componentes/Banner/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./MainLayout.css";

const MainLayout = () => {

    return (
        <>
            <div>
            <Swiper 
                    centeredSlides={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}

                    className="mySwiper">
                    <SwiperSlide>
                        <span className="overlay"></span>
                        <img className="absolute z-[0] h-screen w-full" src="https://i.ibb.co/SyWRdVY/wan-san-yip-ID1y-Wa1-Wpx0-unsplash.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="overlay"></span>
                        <img className="absolute z-[0] h-screen w-full" src="https://i.ibb.co/Cnx9hZb/group-diverse-people-having-business-meeting.jpg" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <span className="overlay"></span>
                        <img className="absolute z-[0] h-screen w-full" src="https://i.ibb.co/7p8rdt1/teemu-paananen-bzdhc5b3-Bxs-unsplash.jpg" alt="" />
                    </SwiperSlide>
                </Swiper>
                <div className="max-w-7xl mx-auto">
                    <NavBar></NavBar>

                    <Banner></Banner>
                </div>
            </div>


            <div className="max-w-7xl mx-auto mt-32">
                <h1 className="bebas-text text-7xl text-center">Our Service</h1>

                
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default MainLayout;