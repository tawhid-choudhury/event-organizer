import { NavLink } from "react-router-dom";
import dflt from "./default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
import { FaStream } from 'react-icons/fa';
const Header = () => {

    // {/* <div className="navbar bg-black text-white py-5 max-w-[90%] m-auto">
    //             <div className="navbar-start">
    //                 <div className="dropdown">
    //                     <label tabIndex={0} className="btn btn-ghost lg:hidden">
    //                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
    //                     </label>
    //                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
    //                         <li><NavLink>Home</NavLink></li>
    //                         <li><NavLink>Services</NavLink></li>
    //                         <li><NavLink>Login</NavLink></li>
    //                         <li><NavLink>Register</NavLink></li>
    //                     </ul>
    //                 </div>
    //                 <a className="btn btn-ghost normal-case text-xl font-pacifico">Event <br />Manager</a>
    //             </div>
    //             <div className="navbar-center hidden lg:flex">
    //                 <ul className="menu menu-horizontal px-1">
    //                     <li><NavLink>Home</NavLink></li>
    //                     <li><NavLink>Services</NavLink></li>
    //                     <li><NavLink>Login</NavLink></li>
    //                     <li><NavLink>Register</NavLink></li>
    //                 </ul>
    //             </div>
    //             <div className="navbar-end">
    //                 <div className="w-10 rounded-full">
    //                     <img src={dflt} className="rounded-full" />
    //                 </div>
    //                 <a className="ml-4 bg-orange-500 px-5 py-3 rounded-full">Logout</a>
    //             </div>
    //         </div> */}
    return (
        <div className="flex flex-col max-w-[90%] m-auto">

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
                        <li><NavLink>Home</NavLink></li>
                        <li><NavLink>Services</NavLink></li>
                        <li><NavLink>Login</NavLink></li>
                        <li><NavLink>Register</NavLink></li>
                    </ul>
                    <div className="dropdown dropdown-end md:hidden">
                        <label tabIndex={0} className="btn"><FaStream></FaStream></label>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 w-52 mt-4">
                            <li><NavLink>Home</NavLink></li>
                            <li><NavLink>Services</NavLink></li>
                            <li><NavLink>Login</NavLink></li>
                            <li><NavLink>Register</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;