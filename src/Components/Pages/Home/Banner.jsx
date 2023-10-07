const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/Zc3PTMr/52333071472-f2e907ae48-k.jpg)' }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-5xl">
                    <h1 data-aos="zoom-in" data-aos-duration="2000" className="mb-5 text-5xl lg:text-8xl font-bold  text-white">The <span className="border-4 px-4">Best</span> Event Organizer</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;