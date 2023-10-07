import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo1.png"

const NavBar = () => {
    return (
        <div>
            <div className="navbar py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={"/"}>Home</NavLink></li>
                            <li><NavLink to={"/login"}>Log In</NavLink></li>
                            <li><NavLink to={"/register"}>Register</NavLink></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case z-20"><img className="h-10" src={logo} alt="Logo Image" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        <li><NavLink className="text-white" to={"/"}>Home</NavLink></li>
                        <li><NavLink className="text-white" to={"/login"}>Log In</NavLink></li>
                        <li><NavLink className="text-white" to={"/register"}>Register</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;