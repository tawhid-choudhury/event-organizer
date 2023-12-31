import { NavLink } from "react-router-dom";
import { FaStream } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(swal("Complete!", "logged out!", "success"))
    }
    return (
        <div data-aos="fade-down" data-aos-duration="1000" className="flex flex-col w-[90%] m-auto fixed z-50 text-white top-0 left-[5%] bg-black bg-opacity-70 px-10">

            <div className="flex flex-col gap-5 sm:flex-row justify-between items-center py-4">


                <h2 className="font-electrolize hidden sm:block md:text-xl lg:text-3xl p-2 border-2 ">Games <span className="bg-white px-2 text-black ">& Tech</span></h2>
                <div className="flex flex-row md:flex-col items-center gap-4">
                    <div className="flex gap-5 items-center justify-end">
                        <div className="w-10 rounded-full">
                            <img src={user?.photoURL ? user.photoURL : "https://i.ibb.co/F8JsB1D/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"} className="rounded-full" />
                        </div>
                        <p className="text-xs hidden md:block">{user?.email}</p>
                        <button onClick={handleLogout} className="border-2 p-2 hover:bg-white hover:text-black font-bold">LogOut</button>
                    </div>
                    <ul className="hidden md:flex gap-5">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/login">Login</NavLink></li>
                        <li><NavLink to="/register">Register</NavLink></li>
                        <li><NavLink to="/blogs">Blogs</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                    <div className="dropdown dropdown-end md:hidden border-2 p-3">
                        <label tabIndex={0} className="bg-white"><FaStream>&nbsp;</FaStream></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 w-52 mt-4 bg-black bg-opacity-80">
                            <li className="py-5"><NavLink to="/">Home</NavLink></li>
                            <li className="py-5"><NavLink to="/login">Login</NavLink></li>
                            <li className="py-5"><NavLink to="/register">Register</NavLink></li>
                            <li className="py-5"><NavLink to="/blogs">Blogs</NavLink></li>
                            <li className="py-5"><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;