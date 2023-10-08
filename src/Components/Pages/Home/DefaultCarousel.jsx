'use client';

import { Carousel } from 'flowbite-react';

export default function DefaultCarousel() {
    return (
        <div className='h-screen'>
            <Carousel>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg)' }}>
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-5xl">
                                <h1 className="mb-5 text-5xl lg:text-8xl font-bold  text-white">The <span className="border-4 px-4">Best</span> Event Organizer</h1>
                                <p className='text-xl'>Selected by you as the best event organizer in the country</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/5cTJk8Q/expo.jpg)' }}>
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-5xl">
                                <h1 className="mb-5 text-5xl lg:text-8xl font-bold  text-white"> <span className="border-4 px-4">All In One</span> Event Organizer</h1>
                                <p className='text-xl'>We take care of everything, from planning, to decoration, to marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}


