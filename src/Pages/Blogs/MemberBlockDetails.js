import React from 'react';
import img from "../Blogs/s1.jpg"
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const MemberBlockDetails = () => {
    const { id } = useParams();
    const [blog, setBlogs] = useState([]);
    useEffect(() => {
        fetch("http://dev.bpsa.com.bd/api/blog")
            .then(res => res.json())
            .then(result => {
                if (result.status === 'success' && result.data && Array.isArray(result.data.blog)) {
                    setBlogs(result.data.blog.find(blog => blog.id == id));
                } else {
                    console.error("Invalid API response:", result);
                }
            })
            .catch(error => {
                console.error("API request error:", error);
            });
    }, []);
    console.log(blog?.title)
    return (
        <div className=' my-5'>

            {/* <h1 className=' mt-3 text-center'>{blog?.title}</h1> */}
            <h3 className=' text-center'>জঙ্গিবাদ দমনে বাংলাদেশ পুলিশের গর্বিত সদস্যদের ভুমিকা</h3>
            <div className='mx-[10vw] my-[3vh]'>
                {/* <img className='w-full h-[60vh]' src={blog?.image}></img> */}
                <img className='w-full h-[60vh]' src={img}></img>
                <p className='my-3'>{blog?.description}</p>
                <p>
                    জঙ্গিবাদ দমনে বাংলাদেশ পুলিশের গর্বিত সদস্যদের ভুমিকা দেশে বিদেশে সমাদৃত । ২০১৬ সালে গুলশানের হলি আর্টিজান বেকারীতে জঙ্গি হামলায় ডিএমপির সহকারী পুলিশ কমিশনার রবিউল ইসলাম এবং বনানী থানার তৎকালীন অফিসার ইনচার্জ সালাউদ্দিন খান দুঃসাহসী উদ্ধার অভিযান পরিচালনা করতে গিয়ে নিহত হন।
                </p>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <p className='mr-5'>Blogger: Md Rasel Islam</p>
                        <p>Published: 07/08/2023</p>
                    </div>
                    <div>
                        {/* <button className='btn btn-info'>{blog?.status}</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberBlockDetails; 