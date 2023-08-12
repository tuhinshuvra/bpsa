import React from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
const UpdateBlog = () => {
  const {user}=useContext(AllContext);
  const { id } = useParams();
  const [blog, setBlogs] = useState([]);
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
}, [user.id,id]);
  const handleBlock = async (event) => {
    event.preventDefault();
    const form = event.target;
    const NewBlog = {
      title: form.block_title.value,
      summary: form.block_summery.value, // Corrected 'summery' to 'summary'
      description: form.block_description.value,
      status: "pending",
      member_id:user?.id,
    };
    if(!form.image.files[0]){
        NewBlog.image=blog.image;
        console.log(NewBlog);
    }
    else{
        const imageFile = form.image.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);
      
        try {
          const imageResponse = await fetch('https://api.imgbb.com/1/upload?key=7a43c068c4477f76ae69e0549062c80e', {
            method: 'POST',
            body: formData,
          });
      
          const imageData = await imageResponse.json();
          if (imageData.data && imageData.data.display_url) {
            NewBlog.image = imageData.data.display_url;
      
            console.log(NewBlog);
            // const createBlogResponse = await fetch('http://dev.bpsa.com.bd/api/blog-create', {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/json',
            //   },
            //   body: JSON.stringify(blog),
            // });
      
            // const createBlogResult = await createBlogResponse.json();
            // console.log(createBlogResult);
            // alert("blog created successfully");
            // form.reset();
          } else {
            console.log("Error uploading image");
          }
        } catch (error) {
          console.error("An error occurred:", error);
        }
      };  
    }
  return (
    <div className='w-full'>
      <h1 className='text-center text-4xl mt-5'>Blog Update</h1>
      <form className='text-center my-3' onSubmit={handleBlock}>
        <input defaultValue={blog.title} type='text' name='block_title' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter block title' required></input><br />
        <input defaultValue={blog?.summary} type='text' name='block_summery' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog Summary'></input><br />
        <textarea defaultValue={blog.description} rows="10" cols="50" name='block_description' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog Description' required></textarea><br />
       {blog.image && <img src={blog.image} alt="Blog" className='mx-auto rounded-lg' style={{ maxWidth: '100px' }} />}
       <p className='text-center'>you can change your blog picture</p>
        <input type='file' name='image' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog image'></input>
        {/* video url we can be entry */}
        {/* <input type='text' name='block_video' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog video url'></input><br/> */}
        <div className='flex justify-around mx-[22vw] mt-2 mb-5'>
          <input className='btn btn-info lg:w-full  lg:max-w-[10vw]' type="reset" value="reset" />
          <input className='btn btn-info lg:w-full lg:max-w-[10vw] ' type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;