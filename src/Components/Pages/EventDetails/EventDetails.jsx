import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
    const { id } = useParams();
    const services = useLoaderData();
    const service = Array.isArray(services) ? services.find(c => c.id === parseInt(id)) : null;
    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ backgroundImage: `url(${service.picUrl})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">{service.name}</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-[70%] m-auto my-10">
                <div className="flex flex-col md:flex-row gap-5">
                    <div>
                        <h2 className="text-5xl text-black">Description</h2>
                        <p className="text-xl py-10 text-justify">{service.description}</p>
                    </div>
                    <div className=" p-5 drop-shadow-md">
                        <h2 className="text-5xl text-black">Details</h2>
                        <div>
                            <div className="flex flex-col gap-3  p-2 mb-5">
                                <h2 className="text-2xl text-black">Cost Per Day: </h2>
                                <h2 className="text-center border-2 py-2 w-[200px]">{service.costPerDay},000 </h2>
                            </div>
                            <div className="flex flex-col items-start gap-3 p-2">
                                <h2 className="text-2xl text-black">Venues:</h2>
                                {service.venues.map((v, idx) => <div className="text-center border-2 p-2 w-[200px]" key={idx}>{v}</div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;