

import 'swiper/css';
import "./Banner.css";

const Banner = () => {

    return (
        <div className="h-[calc(100vh-92px)] flex justify-center items-center">

            <div className="px-5 lg:px-0">
                <h1 data-aos="zoom-in-down" className="md:text-6xl text-3xl text-center text-white bebas-text">Crafting Memorable Moments for Your Corporate World</h1>

                <p className="text-white text-center mt-5 lg:px-24 leading-loose">
                    Welcome to CorporateEventsHub.com, your premier source for crafting unforgettable corporate gatherings. At Corporate Events Hub, we specialize in bringing your corporate vision to life, one event at a time.
                </p>

                <div className="flex justify-center mt-7">
                    <button id="banner-button">Book Now</button>
                </div>

                <div>
                    
                </div>
            </div>

        </div>
    );
};

export default Banner;