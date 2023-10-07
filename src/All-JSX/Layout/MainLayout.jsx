
import "swiper/css";
import "./MainLayout.css";
import { Outlet } from "react-router-dom";


const MainLayout = () => {


    return (
        <div className="overflow-hidden">
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;