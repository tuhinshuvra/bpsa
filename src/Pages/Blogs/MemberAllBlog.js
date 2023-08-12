import React from 'react';
import img from "../Blogs/s1.jpg";
const MemberAllBlog = () => {
    const user = {
        email: "mdraselislam1944@gmail.com",
        password: "kax9vr2u",
    };
    return (
        <div>
            <h1 className='text-center'>My Blogs</h1>
            <div className='lg:grid lg:grid-cols-6 gap-4 my-5 mx-5'>
                <div className='col-span-3'>
                    <h3>
                        This is blog title, blog title blog title
                    </h3>
                    <p>
                        This is blog details This is blog details This is blog details
                        This is blog details This is blog details This is blog details
                        This is blog details This is blog details
                    </p>
                </div>
                <div className='col-span-2'>
                    <img src={img}></img>
                </div>
                <div className='col-span-1'>
                    <button className='btn btn-info'>pending</button>
                </div>
            </div>
        </div>
    );
};

export default MemberAllBlog;