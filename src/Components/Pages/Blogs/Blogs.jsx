import { useLoaderData } from "react-router-dom";

const Blogs = () => {
    const blogs = useLoaderData();
    return (
        <div>
            <div className="hero min-h-[60vh]" style={{ backgroundImage: `url(https://i.ibb.co/PFb3Nx7/hackerthon.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">Blogs</h1>
                    </div>
                </div>
            </div>
            <div className="max-w-[90%] m-auto my-10">
                {blogs.map((blog, idx) => <div key={idx} className="my-10">
                    <h2 className="font-bold text-3xl">{blog.title}</h2>
                    <p className="text-sm font-bold">Author: {blog.author}</p>
                    <p className="text-sm font-bold">Date: {blog.datetime}</p>
                    <p className="text-justify">{blog.content}</p>
                </div>)}
            </div>

        </div>
    );
};

export default Blogs;