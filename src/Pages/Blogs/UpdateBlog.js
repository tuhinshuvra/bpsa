import React, { useMemo } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-hot-toast';
import { getCookie } from '../../utlis/helper';
import imageCompression from 'browser-image-compression';
import axios from 'axios';



const UpdateBlog = () => {
  const navigate = useNavigate();
  const { user } = useContext(AllContext);
  const { id } = useParams();
  const [blog, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`https://dev.bpsa.com.bd/api/blog/${user.id}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getCookie("token")}`, // Replace with your actual authentication token
      },
    })
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
  }, [user.id, id]);
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (blog?.description) {
      setContent(`<p>${blog.description}</p>`);
      console.log(blog)
    }
  }, [blog]);
  const config = useMemo(() => {
    return {
      placeholder: isEditing ? '' : 'description',
      height: 350,
    };
  }, [isEditing]);

  const handleFocus = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };
  const parser = new DOMParser();
  const parsedDocument = parser.parseFromString(content, 'text/html');
  const rootElement = parsedDocument.documentElement;
  const textValue = rootElement.textContent.trim();




  const handleBlock = async (event) => {
    event.preventDefault();
    const form = event.target;
    const NewBlog = {
      title: form.block_title.value,
      summary: form.block_summery.value, // Corrected 'summery' to 'summary'
      description: content,
      status: "pending",
      member_id: user?.id,
      memberName: user?.name,
      blog_id: id,
    };
    if (!form.image.files[0]) {
      NewBlog.image = blog.image;
      console.log(NewBlog);
      fetch("https://dev.bpsa.com.bd/api/blog-update", {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${getCookie("token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(NewBlog),
      })
        .then(res => res.json())
        .then(result => {
          console.log(result);
          toast.success("blog updated successfully");
          navigate(`/blogDetails/${id}`);
        })
        .catch(error => console.log(error));
    }
    else {

      let imageFile;
      const originalImageFile = form.image.files[0];
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };

      try {
        const compressedFile = await imageCompression(originalImageFile, options);
        imageFile = compressedFile;
      } catch (error) {
        console.log(error);
        return;
      }

      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
          const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            params: {
              key: '7a43c068c4477f76ae69e0549062c80e', // Replace with your ImageBB API key
            },
          });

          const imageUrl = response.data.data.url;
          console.log('Image uploaded to ImageBB:', imageUrl);

          // Update the blog object with the ImageBB URL
          NewBlog.image = imageUrl;
        } catch (error) {
          console.error('Error uploading image to ImageBB:', error);
          toast.error('Error uploading image to ImageBB');
          return;
        }
      }
          fetch("https://dev.bpsa.com.bd/api/blog-update", {
            method: "POST",
            headers: {
              'Authorization': `Bearer ${getCookie("token")}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(NewBlog),
          })
            .then(res => res.json())
            .then(result => {
              toast.success("blog updated successfully");
              navigate(`/blogDetails/${id}`);

            })
            .catch(error => console.log(error));
    };
  }
  return (
    <div className='w-full'>
      <h1 className='text-center text-4xl mt-5'>Blog Update</h1>
      <form className='mx-[5vw] my-3' onSubmit={handleBlock}>
        <input defaultValue={blog && blog.title} type='text' name='block_title' className='input input-bordered w-[89vw] my-2' placeholder='Enter block title' required></input><br />
        <JoditEditor
          value={content}
          tabIndex={12}
          config={config}
          onChange={newContent => setContent(newContent)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <input defaultValue={blog && blog.summery} type='text' name='block_summery' className='input input-bordered w-[89vw] my-2' placeholder='Enter blog Summary'></input><br />
        {/* <textarea defaultValue={blog.description} rows="10" cols="50" name='block_description' className='input input-bordered w-[89vw] my-2' placeholder='Enter blog Description' required></textarea><br /> */}
        {blog.image && <img src={blog.image} alt="Blog" className='mx-auto rounded-lg' style={{ maxWidth: '100px' }} />}
        <p className='text-center'>you can change your blog picture</p>
        <input type='file' name='image' className='input input-bordered w-[89vw] my-2' placeholder='Enter blog image'></input>
        {/* video url we can be entry */}
        {/* <input type='text' name='block_video' className='input input-bordered w-[89vw] my-2' placeholder='Enter blog video url'></input><br/> */}
        <div className='flex justify-between  mt-2 mb-5'>
          <input de className='text-white uppercase bg-main px-[2vw] py-[2vh]  rounded-lg ' type="reset" value="reset" />
          <input className='text-white uppercase bg-main px-[2vw] py-[2vh]  rounded-lg ' type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default UpdateBlog;