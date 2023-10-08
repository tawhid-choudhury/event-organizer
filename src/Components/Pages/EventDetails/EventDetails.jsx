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
                        <h1 className="mb-5 text-5xl font-bold">{service.name}</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-[90%] m-auto my-10">
                <h2 className="text-5xl text-black">Description</h2>
            </div>
        </div>
    );
};

export default EventDetails;