import { Outlet } from "react-router-dom";
import NavBar from "../Componentes/NavBar/NavBar";
import Banner from "../Componentes/Banner/Banner";
import backgroundImg from "../../assets/background.png";

const MainLayout = () => {

    return (
        <>
            <div
                // style={{ background: `linear-gradient(rgba(0, 0, 0, 0.507), rgba(0, 0, 0, 0.5)), url('${backgroundImg}') right bottom no-repeat`, backgroundSize: "cover" }}
            >
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