import { Outlet } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Banner from "../Componentes/Banner/Banner";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const MainLayout = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div 
        style={{background: "linear-gradient(rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/MPPt916/alexandre-pellaes-6v-Ajp0psc-X0-unsplash.jpg') center center no-repeat", backgroundSize: "cover"}}
        className="">
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>

                <Banner></Banner>
            </div>

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;