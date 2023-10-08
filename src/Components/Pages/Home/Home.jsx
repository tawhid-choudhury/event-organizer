import { useLoaderData } from "react-router-dom";
import Service from "./Service";
import DefaultCarousel from "./DefaultCarousel";

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
        </div>
    );
};

export default Home;