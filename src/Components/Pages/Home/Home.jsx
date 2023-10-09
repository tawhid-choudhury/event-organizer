import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import DefaultCarousel from "./DefaultCarousel";
import { FaRunning, FaGift, FaDumbbell, FaHeart } from "react-icons/fa";


const Home = () => {
    const services = useLoaderData();
    // console.log(services);
    return (
        <div className="">
            <DefaultCarousel></DefaultCarousel>
            <div className="max-w-[90%] m-auto my-10 ">
                <h1 className="text-5xl text-black">Our services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 items-center justify-center">
                    {
                        services.map((service) => <Service service={service} key={service.id} ></Service>)
                    }
                </div>

            </div>
            <div data-aos="fade-down" className="bg-black text-white py-10">
                <div className="max-w-[90%] m-auto my-10">
                    <h1 className="text-5xl pb-10">Why Choose Us?</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-10 items-center justify-center">
                        <div>
                            <div className="card  bg-base-100 shadow-xl image-full">
                                <figure><img src="https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl">Fastest event organizer</h2>
                                    <div className="flex justify-center items-center">
                                        <h1 className="text-9xl "><FaRunning></FaRunning></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 shadow-xl image-full">
                                <figure><img src="https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl">Every thing in a package</h2>
                                    <div className="flex justify-center items-center">
                                        <h1 className="text-9xl "><FaGift></FaGift></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card  bg-base-100 shadow-xl image-full">
                                <figure><img src="https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl">Strong Connections</h2>
                                    <div className="flex justify-center items-center">
                                        <h1 className="text-9xl "><FaDumbbell></FaDumbbell></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="card bg-base-100 shadow-xl image-full">
                                <figure><img src="https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="text-center text-2xl">Good Reputation</h2>
                                    <div className="flex justify-center items-center">
                                        <h1 className="text-9xl "><FaHeart></FaHeart></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h1 className="max-w-[90%] m-auto my-10 text-5xl">Meet the Team</h1>
            <div data-aos="fade-up" className="max-w-[90%] m-auto my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="text-center flex flex-col items-center">
                    <img className="w-[200px] rounded-full" src="https://i.ibb.co/5xh6vZp/person2.jpg" alt="" />
                    <h1 className="text-2xl">Sarah Adams, CEO</h1>
                </div>
                <div className="text-center flex flex-col items-center">
                    <img className="w-[200px] rounded-full" src="https://i.ibb.co/PwvC9Df/person1.jpg" alt="" />
                    <h1 className="text-2xl">Emily Brown, Co-Owner</h1>
                </div>
                <div className="text-center flex flex-col items-center">
                    <img className="w-[200px] rounded-full" src="https://i.ibb.co/xLgMpL7/person3.jpg" alt="" />
                    <h1 className="text-2xl">Michael Williams, Bussiness partner</h1>
                </div>
                <div className="text-center flex flex-col items-center">
                    <img className="w-[200px] rounded-full" src="https://i.ibb.co/0yP1YvD/person4.jpg" alt="" />
                    <h1 className="text-2xl">Jane Smith, Bussiness partner</h1>
                </div>

            </div>
        </div>
    );
};

export default Home;