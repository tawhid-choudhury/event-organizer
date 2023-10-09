import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import swal from 'sweetalert';

const Contact = () => {
    const { user } = useContext(AuthContext);
    const handleSub = (e) => {
        e.preventDefault();
        e.target.message.value = "";
        swal("Message Sent", "Our replresentative will reply to your message", "success")
    }


    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ backgroundImage: `url(https://i.ibb.co/ysgZnHT/esportstourney.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Contact Us</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-[90%] m-auto my-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h1 className='font-bold text-4xl'>Lets arrange a meeting</h1>
                    <p className='my-4'>Feel free to contact us anytime</p>
                    <p className='p-5 bg-gray-200 my-8'>Email: example@email.com</p>
                    <p className='p-5 bg-gray-200 my-8'>Phone: (123) 456-7890</p>
                    <p className='p-5 bg-gray-200 my-8'>Address: 123 Main St, City, Country</p>
                </div>
                <div>
                    <h1 className='font-bold text-4xl'>Send an Email </h1>
                    <h1 className='my-4'>Sending Email as: </h1>
                    <h1 className='p-5 bg-gray-200 my-4'>{user?.email}</h1>
                    <form onSubmit={handleSub}>
                        <input name='message' className='p-5 bg-gray-200 my-4 w-full border-0 h-[200px]' type="text" placeholder='Write your message here' />
                        <input className='p-5 bg-black my-8 w-full text-white hover:bg-white hover:text-black border-2 ' type="submit" name="" id="" />
                    </form>
                </div>
            </div>

        </div>
    );
};

<div>
    <div>

    </div>
    <div>

    </div>
</div>
export default Contact;