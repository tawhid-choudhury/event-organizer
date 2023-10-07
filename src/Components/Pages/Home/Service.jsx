
import PropTypes from 'prop-types';

const Service = ({ service }) => {
    return (
        <div data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000" className='p-5 border-2 border-black m-auto  hover:bg-black hover:text-white'>
            <div className='flex flex-col items-center relative'>
                <div className='max-w-[100%] md:h-[300px] bg-black'>
                    <img className='w-full h-full' src={service.picUrl} alt={service.name} />
                </div>
                <div className='bg-black bg-opacity-70 w-full absolute'>
                    <h1 className='text-2xl text-white p-5'>{service.name}</h1>
                </div>
                <div className=' pt-5 h-[100px]'>
                    {service.description.length > 100 ? <p>{service.description.substring(0, 100)} . . . <span className='text-gray-500 font-bold'>READ MORE ON DETAILS PAGE</span></p> : <p>{service.description}</p>}
                </div>
                <div className='w-full my-10'>
                    <p className='font-bold'>Cost per day: <span className='bg-gray-300 p-2 rounded-lg text-black'> ${service.costPerDay}K </span></p>
                </div>
                <button className='border-2 border-white hover:bg-white hover:text-black bg-black text-white text-bold w-full p-5'>View Details</button>
            </div>
        </div >
    );
};

Service.propTypes = {
    service: PropTypes.object,
};

export default Service;