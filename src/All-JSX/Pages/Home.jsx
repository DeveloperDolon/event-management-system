
import { useLoaderData } from "react-router-dom";
import Lottie from 'lottie-react';

import animationData from "../../../public/animation_lng40xes.json"
import "swiper/css";

import { useEffect, useState } from "react";
import ScrollAnimation from "../Componentes/ScrollAnimation/ScrollAnimation";
import ServiceCard from "../Componentes/ServiceCard/ServiceCard";
import EventItem from "../Componentes/EventItems/EventItem";
import Banner from "../Componentes/Banner/Banner";
import NavBar from "../Componentes/NavBar/NavBar";
import Slider from "../Componentes/Swiper/Slider";

const Home = () => {
    const services = useLoaderData();
    const [eventItems, setEventItems] = useState([]);

     const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    useEffect(() => {
        fetch("./eventItems.json")
            .then((res) => res.json())
            .then(data => setEventItems(data))
    }, []);


    return (
        <div>
            {/* <div>
                
                <div className="max-w-7xl mx-auto">
                    <NavBar></NavBar>
                    <Banner></Banner>
                </div>

            </div> */}

            <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">Our Service</h1>
                    </ScrollAnimation>
                    <ScrollAnimation>
                        <p className="text-center lg:px-32 mt-5">
                            At Genius Expo, we are more than event planners; we are architects of unforgettable experiences. With a passion for creativity and a dedication to excellence, we have earned our reputation as a leader in the world of corporate event
                            management.
                        </p>
                    </ScrollAnimation>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-16">
                    {services.map((item, idx) => <ServiceCard key={idx} data={item}></ServiceCard>)}
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">Our Popular Event Items</h1>
                    </ScrollAnimation>
                </div>

                <div className="grid grid-cols-1 mt-14">
                    {
                        eventItems.map((item, idx) => <EventItem key={idx} data={item}></EventItem>)
                    }
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">WHY CHOOSE US FOR YOUR EVENT?</h1>
                    </ScrollAnimation>
                </div>



                <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-16 gap-10">
                    <div className="">
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                ALL KIND OF LOGISTICS AND RESOURCES SUPPORT
                            </div>
                            <div className="collapse-content">
                                <p>As an experienced Event Management company, we have all kind of Event equipment, logistics and resources available</p>
                            </div>
                        </div>

                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                EXPERIENCED EVENT PLANNER AND MANAGER
                            </div>
                            <div className="collapse-content">
                                <p>When it&apos;s about making your Event successful, it&apos;s all about making a good plan, managing and executing successfully. And, we have experienced who will make your event unique and memorable!</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Company Values and Mission Statement.
                            </div>
                            <div className="collapse-content">
                                <p>Our company is driven by a commitment to excellence in event management. Our mission is to transform your vision into extraordinary and memorable events, tailored to your specific needs and preferences.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-base-200">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">
                                Portfolio
                            </div>
                            <div className="collapse-content">
                                <p>Explore our portfolio to see some of our most successful events. From intimate gatherings to large-scale conventions, our portfolio showcases our diverse capabilities and creative solutions.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <ScrollAnimation>
                            <Lottie 
                            className="w-[80%] mx-auto"
                            options={defaultOptions}
                            animationData={animationData}
                            height={200}
                            width={200}
                            ></Lottie>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>


            <div className="max-w-7xl mx-auto mt-32">
                <div className="flex flex-col justify-center">
                    <ScrollAnimation>
                        <h1 className="bebas-text text-7xl text-center">Our Recent Events</h1>
                    </ScrollAnimation>
                </div>

                <div className="overflow-hidden">
                    <Slider></Slider>
                </div>
            </div>
        </div>
    );
};

export default Home;