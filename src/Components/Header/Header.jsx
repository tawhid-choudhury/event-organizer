import { NavLink } from "react-router-dom";
import dflt from "./default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
import { FaStream } from 'react-icons/fa';
const Header = () => {
    return (
        <div data-aos="fade-down" className="flex flex-col w-[90%] m-auto absolute z-50 text-white top-0 left-[5%] bg-black bg-opacity-70 px-10">

            <div className="flex justify-between items-center py-4">


                <h2 className="font-electrolize text-3xl">Games & Tech</h2>
                <div className="flex flex-col items-end gap-4">
                    <div className="flex gap-5 items-center justify-end">
                        <div className="w-10 rounded-full">
                            <img src={dflt} className="rounded-full" />
                        </div>
                        <button>LogOut</button>
                    </div>
                    <ul className="hidden md:flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                    </ul>
                    <div className="dropdown dropdown-end md:hidden">
                        <label tabIndex={0} className="btn"><FaStream></FaStream></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 w-52 mt-4 bg-black bg-opacity-80">
                            <li className="py-5"><NavLink to="/">Home</NavLink></li>
                            <li className="py-5"><NavLink to="/login">Login</NavLink></li>
                            <li className="py-5"><NavLink to="/register">Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;