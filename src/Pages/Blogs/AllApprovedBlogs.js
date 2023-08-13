import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const AllApprovedBlogs = () => {
    const { allBlogs, setAllBlogs } = useState([]);

    useEffect(() => {
        fetch('https://dev.bpsa.com.bd/api/blog')
            .then(res => res.json())
            .then(data => {
                console.log("All Blogs", data.data.blog)
                setAllBlogs(data.data.blog);
            })
    }, [setAllBlogs])

    const noOfBlogs = allBlogs.length;
    console.log("noOfBlogs", noOfBlogs);

    return (
        <div>
            <h2>All Approved Blogs, Total Blogs: </h2>


        </div>
    );
};

export default AllApprovedBlogs;