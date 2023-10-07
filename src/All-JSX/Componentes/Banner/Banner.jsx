
import Lottie from 'lottie-react';
import 'swiper/css';
import "./Banner.css";
import animationData from "../../../../public/animation_lnezqfbz.json";
import ScrollAnimation from '../ScrollAnimation/ScrollAnimation';

const Banner = () => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="h-[calc(100vh-92px)] grid grid-cols-1 md:grid-cols-2 items-center">

            <div className="px-5 lg:px-0">
                <ScrollAnimation>
                    <h1 className="md:text-6xl z-0 text-3xl leading-loose bebas-text">Crafting Memorable Moments for Your Corporate World</h1>
                </ScrollAnimation>

                <ScrollAnimation>
                    <p className=" mt-5 leading-loose">
                        Welcome to CorporateEventsHub.com, your premier source for crafting unforgettable corporate gatherings. At Corporate Events Hub, we specialize in bringing your corporate vision to life, one event at a time.
                    </p>
                </ScrollAnimation>
                

                <div className="mt-7">
                    <ScrollAnimation>
                        <button id="banner-button" className='shadow-lg'>Book Now</button>
                    </ScrollAnimation>
                </div>
            </div>

            <div>
                <ScrollAnimation>
                    <Lottie 
                        className="w-[100%]"
                        options={defaultOptions}
                        animationData={animationData}
                        height={200}
                        width={200}
                        ></Lottie>
                </ScrollAnimation>
            </div>

        </div>
    );
};

export default Banner;