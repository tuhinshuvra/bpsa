import React from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { getCookie } from '../../utlis/helper';

const MemberAllBlog = () => {
    useTitle("MemberAllPost");
    const { user } = useContext(AllContext);
    let count = 1;
    const [posts, setPosts] = useState();
    const [pendingPosts, setPendingPosts] = useState();
    useEffect(() => {
        fetch("https://dev.bpsa.com.bd/api/blog", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie("token")}`, // Replace with your actual authentication token
            },
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok, status: ${res.status}`);
                }
                return res.json();
            })
            .then(result => {
                const filterData = result.data.blog.filter(post => post?.memberName == user.name && post?.status == "Approved");
                setPosts(filterData);
                const filterData2 = result.data.blog.filter(post => post?.memberName == user.name && post?.status != "Approved");
                setPendingPosts(filterData2);
            })
            .catch(error => console.log(error));
    }, [])
    if (posts) {
        console.log(posts);
    }
    const formatDate = (dateString) => {
        const options = { year: 'numeric', day: '2-digit', month: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }

    return (
        <div>
            <div className="row mt-5 mb-2">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                        <h4 className=' text-center'>Approved Posts</h4>
                    </nav>
                </div>
            </div>
            {
                posts && posts.map(post => (
                    <div className="card blogArea my-1" key={post?.id}>
                        <div className="d-flex">
                            <div className="col-md-10">
                                <div className="card-body">
                                    <h5 className=" ">{post?.title}</h5>
                                    {/* <p className=" my-0 ">{blog?.description}</p> */}
                                    <p>{post?.summary}</p>
                                    <div className=' d-flex justify-content-evenly'>
                                        <div className=' d-flex col-md-5 me-auto   my-0'>
                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> {post?.memberName} </small></p>

                                            <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> {formatDate(post?.created_at)}</small></p>
                                            {/* <p className="card-text my-0"><small className="text-body-secondary"> <b> status:</b> {blog?.status}</small></p> */}
                                        </div>
                                        <div>
                                            <Link to={`/blogDetails/${post.id}?source=memberAllBlog`} className='text-white uppercase bg-main px-[2vw] py-[2vh] mx-5 rounded-lg '>Show Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2 my-auto">
                                <img src={post.image} className="memberBlogImg rounded-lg" alt="..." />
                            </div>

                        </div>
                    </div>
                ))
            }
            <div className='my-5'>
                <div className="row mt-5 mb-2">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2  ">
                            <h4 className=' text-center'>Pending Posts </h4>
                        </nav>
                    </div>
                </div>
                {
                    pendingPosts && pendingPosts.map(post => (
                        <div className="card blogArea my-1" key={post?.id}>
                            <div className="d-flex">
                                <div className="col-md-10">
                                    <div className="card-body">
                                        <h5 className=" ">{post?.title}</h5>
                                        {/* <p className=" my-0 ">{blog?.description}</p> */}
                                        <p>{post.summary}</p>
                                        <div className=' d-flex justify-content-evenly'>
                                            <div className=' d-flex col-md-5 me-auto   my-0'>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Blogger:</b> {post?.memberName} </small></p>

                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> Published:</b> {formatDate(post?.created_at)}</small></p>
                                                <p className="card-text my-0"><small className="text-body-secondary"> <b> status:</b> {post?.status}</small></p>
                                            </div>
                                            <div>
                                                <Link to={`/blogDetails/${post?.id}`} className='text-white uppercase bg-main px-[2vw] py-[2vh] mx-5 rounded-lg'>Show Details</Link>
                                                <Link to={`/updateBlog/${post?.id}`} className='text-white uppercase bg-main px-[2vw] py-[2vh] mx-5 rounded-lg '>Edit</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2 my-auto">
                                    <img src={post.image} className="memberBlogImg rounded-lg" alt="..." />
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        // <div>
        //     <h1 className='text-center text-main my-5'>My Blogs</h1>
        //     {
        //         blogs && blogs.map(blog => <div className='lg:grid lg:grid-cols-6 gap-4 my-5 mx-5' key={blog.id}>
        //             <div className='col-span-3'>
        //                 <Link to={`/blogDetails/${blog.id}?source=memberAllBlog`}>
        //                     <div className='flex -mx-6'>
        //                         <h3 className='me-2'>{count++}.</h3>
        //                         <h3 className='text-main'>{blog?.title}</h3>
        //                     </div>
        //                     <p className='text-black'>{blog?.description}</p>
        //                     <p className='text-black'>{blog?.summary}</p>
        //                 </Link>
        //             </div>
        //             <div className='col-span-2'>
        //                 <img className='rounded-lg h-[30vh] w-[25vw]' src={blog?.image}></img>
        //             </div>
        //             <div className='col-span-1 grid mx-[5vw] '>
        //                 <button className='btn btn-info'>{blog?.status}</button>
        //                 <Link to={`/updateBlog/${blog?.id}`} className='btn btn-info  mt-[10vh]'>Edit</Link>
        //             </div>
        //         </div>)
        //     }
        // </div>
    );
};

export default MemberAllBlog;


