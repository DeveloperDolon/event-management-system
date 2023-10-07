import { useState } from "react";
import logo from "../../assets/logo1.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {
    const [passwordView, setPasswordView] = useState(false);
    const [error, setError] = useState("");

    const handleShowPassword = () => {
        setPasswordView(!passwordView);
    }

    const handleSubmit = (e) => {

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        setError("");

        if (password.length < 6) {
            setError("Password must be at least 6 characters!!");
            return;
        } else if (!(/[A-Z]/).test(password)) {
            setError("Password must have capital letter!!");
            return;
        } else if (!(/[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]/).test(password)) {
            setError("Password must have special characters!!");
            return;
        }
        alert("Your password is correct!");
    }


    return (

        <div className="h-full bg-gradient-to-tl from-[#00a8ff] to-indigo-900 w-full py-16 px-4">
            <div className="flex flex-col items-center justify-center">
                <img src={logo} alt="logo" />

                <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
                    <p tabIndex="0" className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Register your account</p>
                    <p tabIndex="0" className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500">Already have an account? <Link to="/login" className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-semibold leading-none  text-gray-800 cursor-pointer"> Login here</Link></p>
                    <button aria-label="Continue with google" role="button" className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg" alt="google" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Google</p>
                    </button>
                    <button aria-label="Continue with github" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg3.svg" alt="github" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Github</p>
                    </button>
                    <button aria-label="Continue with twitter" role="button" className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg4.svg" alt="twitter" />
                        <p className="text-base font-medium ml-4 text-gray-700">Continue with Twitter</p>
                    </button>
                    <div className="w-full flex items-center justify-between py-5">
                        <hr className="w-full bg-gray-400" />
                        <p className="text-base font-medium leading-4 px-2.5 text-gray-400">OR</p>
                        <hr className="w-full bg-gray-400  " />
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label id="name" className="text-sm font-medium leading-none text-gray-800">
                                Username
                            </label>
                            <input aria-labelledby="name" type="text" name="name" required className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6">
                            <label id="picture" className="text-sm font-medium leading-none text-gray-800">
                                Profile Photo Link
                            </label>
                            <input aria-labelledby="picture" type="text" name="picture"  className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        
                        <div className="mt-6">
                            <label id="email" className="text-sm font-medium leading-none text-gray-800">
                                Email
                            </label>
                            <input aria-labelledby="email" type="email" name="email" required className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                        </div>
                        <div className="mt-6  w-full">
                            <label htmlFor="pass" className="text-sm font-medium leading-none text-gray-800">
                                Password
                            </label>
                            <div className="relative flex items-center justify-center">
                                <input id="pass" required name="password" type={passwordView ? "text" : "password"} className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" />
                                <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                                    <span onClick={handleShowPassword}>{passwordView ? <AiOutlineEyeInvisible></AiOutlineEyeInvisible> : <AiOutlineEye></AiOutlineEye>}</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-sm mt-3 font-medium">
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                        <div className="mt-8">
                            <button role="button"
                                className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Register;