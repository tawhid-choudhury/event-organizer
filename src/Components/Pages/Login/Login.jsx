import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import swal from 'sweetalert';
import { FcGoogle } from "react-icons/fc";
import { SiTwitter, SiFacebook } from "react-icons/si";

const Login = () => {
    const { loginEmailPass, googleSignin, facebookSignin, user } = useContext(AuthContext)
    const nav = useNavigate();
    const [errorText, setErrorText] = useState("")

    const handleFacebook = () => {
        facebookSignin()
            .then((uc) => {
                console.log(uc);
                swal("Complete!", "Logged in!", "success");
                nav("/")
            }).catch((err) => {
                if (err.code === "auth/email-already-in-use") {
                    swal("Error!", "Email is already in use. Please choose a different email.", "error");
                    setErrorText("Email is already in use");
                } else {
                    swal("Error:", err);
                    setErrorText("Error:", err);
                    console.log(err);
                }
            })
    }

    const handleGoogle = () => {
        googleSignin()
            .then((uc) => {
                console.log(uc);
                swal("Complete!", "Logged in!", "success");
                nav("/")
            }).catch((err) => {
                if (err.code === "auth/email-already-in-use") {
                    swal("Error!", "Email is already in use. Please choose a different email.", "error");
                    setErrorText("Email is already in use");
                } else {
                    swal("Error:", err);
                    setErrorText("Error:", err);
                    console.log(err);
                }
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        loginEmailPass(email, password)
            .then((uc) => {
                console.log(uc);

                swal("Complete!", "Logged in!", "success");
                nav("/")
            }).catch((err) => {
                if (err.code === "auth/invalid-login-credentials") {
                    swal("Error!", "Invalid login credentials", "error");
                    setErrorText("Invalid login credentials");
                } else {
                    swal("Error:", err);
                    setErrorText("Error:", err);
                    console.log(err);
                }
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200 flex items-center justify-center" style={{ backgroundImage: 'url(https://i.ibb.co/FDZsJYF/registrar.jpg)' }}>
                <div className="absolute inset-0 bg-black opacity-70"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold text-white">Login now!</h1>
                        <p className="py-6">Unlock the future of secure online access with us. Join our community and experience seamless authentication. Your digital journey begins here.</p>
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-black bg-opacity-70 rounded-none">
                        {user ? <div className="text-center text-white text-2xl p-5">

                            <p className="mb-5">Logged in with:</p>
                            <div className="flex justify-center">
                                <img className="w-[100px] rounded-full" src={user?.photoURL ? user.photoURL : "https://i.ibb.co/F8JsB1D/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"} alt="" />
                            </div>
                            <h3 className="text-2x">{user?.email}</h3>
                        </div> :
                            <div>
                                <form className="card-body" onSubmit={handleSubmit}>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Email</span>
                                        </label>
                                        <input type="email" placeholder="email" name="email" className="input input-bordered rounded-none" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text text-white">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" name="password" className="input input-bordered rounded-none" required />
                                    </div>
                                    <div className="text-white">
                                        {errorText && <p className="text-red-500 py-2">{errorText}</p>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="border-2 p-3 hover:bg-white hover:text-black font-bold text-white">Login</button>
                                    </div>
                                </form>
                                <div>
                                    <p className="text-center text-white">Sign in using:</p>
                                    <div className="flex justify-center gap-5 mt-5">
                                        <button onClick={handleGoogle} className="text-4xl border-2 hover:bg-white border-white p-2"><FcGoogle></FcGoogle></button>
                                        <button className="hidden text-4xl border-2 hover:bg-white text-[#26a7de] p-2 border-white"><SiTwitter></SiTwitter></button>
                                        <button onClick={handleFacebook} className="text-4xl border-2 hover:bg-white text-[#3b5998] p-2 border-white"><SiFacebook></SiFacebook></button>
                                    </div>
                                </div>
                                <p className="text-white text-center py-5">Don&apos;t have an account? <Link to="/register"><span className="underline text-blue-500">Register Now</span></Link></p>
                            </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Login;