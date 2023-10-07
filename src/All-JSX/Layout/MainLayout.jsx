
import "swiper/css";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import Footer from "../Componentes/Footer/Footer";


const MainLayout = () => {


    return (
        <div className="overflow-hidden">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;