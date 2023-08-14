import React from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
const Blog_Details = () => {
    const location = useLocation();
    const source = new URLSearchParams(location.search).get('source');
    console.log(source);
    const { id } = useParams();
    const { user } = useContext(AllContext);
    const [blog, setBlogs] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://dev.bpsa.com.bd/api/blog/${user.id}`)
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
    return (
        <div>
            <h3 className='mt-10 text-center text-main'>{blog.title}</h3>
            <div className='mx-[5vw] my-[1vh]'>
                <img className='w-[40vw] h-[50vh] rounded mx-[25vw] my-5' src={blog.image}></img>
                <p className='my-3'>{blog.description}</p>
                <p>{blog.summary}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex'>
                        <p className='mr-5'>Blogger: {blog?.memberName}</p>
                        <p>Published: 07/08/2023</p>
                        <Link to={`/${source}`} className='btn btn-info mx-5' >Back</Link>
                    </div>
                    <div className='mb-10'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog_Details;
