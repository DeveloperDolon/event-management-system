import { Outlet } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
// import Slider from "../Componentes/Swiper/Slider";

const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>

                {/* <Slider></Slider> */}
            </div>         

            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;