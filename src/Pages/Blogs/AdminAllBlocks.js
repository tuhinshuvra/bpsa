import React from 'react';
import img from "../Blogs/s1.jpg";
const AdminAllBlocks = () => {
    return (
        <div>
            <h1 className='text-center'>All Blogs</h1>
            <div className='lg:grid lg:grid-cols-6 gap-4 my-5 mx-5'>
                <div className='col-span-3'>
                    <div className=' flex items-start'>
                        <p className='text-3xl me-2'>01.</p>
                        <div>
                            <h3>
                                This is blog title, blog title blog title
                            </h3>
                            <p>
                                This is blog details This is blog details This is blog details
                                This is blog details This is blog details This is blog details
                                This is blog details This is blog details
                            </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-2'>
                    <img src={img}></img>
                    <p className='my-2'>Blogger: Md Rasel Islam</p>
                </div>
                <div className='col-span-1'>
                    <details className="dropdown mb-32">
                        <summary className="m-1 btn btn-info">Action</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                            <li><a>Pending</a></li>
                            <li><a>Approved</a></li>
                            <li><a>Ask for review</a></li>
                            <li><a>Disabled</a></li>
                        </ul>
                    </details>
                    <p className='mt-5'>Published: 07/08/2023</p>
                </div>
            </div>
        </div>
    );
};

export default AdminAllBlocks;