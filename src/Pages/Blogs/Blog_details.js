import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';

const Blog_Details = () => {
    useTitle("BlogDetails");
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    console.log(source);
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`https://admin.bpsa.com.bd/api/blog/${user.id}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`, // Replace with your actual authentication token
            },
        }
        )
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
    if (blog) {
        console.log(blog?.summery);
    }
    return (
        <div>
            <h3 className='mt-10 text-center text-main'>{blog?.title}</h3>
            <div className='mx-[5vw] my-[1vh]'>
                <img className='w-[40vw] h-[50vh] rounded mx-[25vw] my-5' src={blog?.image}></img>
                {/* <p className='my-5'>{blog?.description}</p> */}
                <small className='my-5' dangerouslySetInnerHTML={{ __html: blog?.description }} />
                <p>{blog?.summery}</p>
                <div className='flex justify-between items-center my-4 shadow py-3  px-10'>
                    <div className='flex justify-between items-center'>
                        <p className='mr-5'>Blogger: {blog?.memberName}</p>
                        <p>Published: 07/08/2023</p>
                        <Link to={"/memberProfile"} className='text-white uppercase bg-main px-[2vw] py-[2vh] mx-5 rounded-lg ' >Back</Link>
                    </div>
                    <div className='mb-10'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog_Details;
