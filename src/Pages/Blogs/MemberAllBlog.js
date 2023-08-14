import React from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
const MemberAllBlog = () => {
    useTitle("MemberAllBlog")
    const { user } = useContext(AllContext);
    let count = 1;
    const [blogs, setBlogs] = useState();
    useEffect(() => {
        fetch(" https://dev.bpsa.com.bd/api/blog")
            .then(res => res.json())
            .then(result => {
                const filterData = result.data.blog.filter(blog => blog?.memberName == user.name);
                setBlogs(filterData);
            })
            .catch(error => console.log(error));
    }, [])
    if (blogs) {
        console.log(blogs);
    }
    return (
        <div>
            <h1 className='text-center text-main my-5'>My Blogs</h1>
            {
                blogs && blogs.map(blog => <div className='lg:grid lg:grid-cols-6 gap-4 my-5 mx-5' key={blog.id}>
                    <div className='col-span-3'>
                        <Link to={`/blogDetails/${blog.id}?source=memberAllBlog`}>
                            <div className='flex -mx-6'>
                                <h3 className='me-2'>{count++}.</h3>
                                <h3 className='text-main'>{blog?.title}</h3>
                            </div>
                            <p>{blog?.description}</p>
                            <p>{blog?.summary}</p>
                        </Link>
                    </div>
                    <div className='col-span-2'>
                        <img className='rounded-lg h-[30vh] w-[25vw]' src={blog?.image}></img>
                    </div>
                    <div className='col-span-1 grid mx-[5vw] '>
                        <button className='btn btn-info'>{blog?.status}</button>
                        <Link to={`/updateBlog/${blog?.id}`} className='btn btn-info  mt-[10vh]'>Edit</Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MemberAllBlog;


