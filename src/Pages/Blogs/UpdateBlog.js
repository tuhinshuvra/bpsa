import React, { useMemo } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-hot-toast';
import { getCookie } from '../../utlis/helper';
import imageCompression from 'browser-image-compression';
import FullScreenImage from './FullScreenImage/FullScreenImage';
import axios from 'axios';
import './BlogDetails.css';

const UpdateBlog = () => {
  const navigate = useNavigate();
  const { user } = useContext(AllContext);
  const { id } = useParams();
  const [blog, setBlogs] = useState([]);
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);


  const [showFullScreenImage, setShowFullScreenImage] = useState(false);
  const [statusDescription, setStatusDescription] = useState(false);

  const handleImageClick = () => {
    setShowFullScreenImage(true);
  };

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
      summery: form.block_summery.value,
      description: content,
      status: "pending",
      member_id: user?.id,
      memberName: user?.name,
      blog_id: id,
    };

    if (!content) {
      setStatusDescription(true);
      toast.error("Description must be filled up");
      return;
    }


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
    <div className='col-md-10 mx-auto'>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container pt-3 pb-3 ">

          <nav aria-label="breadcrumb" className="bg-light rounded-3 p-2 mb-4">
            <h3 className=' text-center fw-bold'>Blog Update</h3>
          </nav>
          <div>
            <form className=' my-3' onSubmit={handleBlock}>
              <input defaultValue={blog.title} type='text' name='block_title' className='form-control my-1 ' placeholder='Enter block title' required />
              <input defaultValue={blog?.summery} type='text' name='block_summery' className='form-control my-1  ' placeholder='Enter blog Summary' />

              {
                statusDescription && <label className='my-2 text-2xl text-red-600'>Please fill up description than submit blogs</label>
              }

              <JoditEditor
                value={content}
                tabIndex={12}
                config={config}
                onChange={newContent => setContent(newContent)}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
              {/* <textarea defaultValue={blog.description} rows="10" cols="50" name='block_description' className='input input-bordered w-[89vw] my-2' placeholder='Enter blog Description' required></textarea><br /> */}

              <div className='    my-2'>
                <div className=''>
                  {blog?.image &&
                    <img className='mx-auto rounded-lg blogEditImg' src={blog?.image} alt="Blog" onClick={handleImageClick} />
                  }
                </div>
                <div className=' col-lg-4 mx-auto   my-auto text-center mt-3   '>
                  {/* <p className='text-center'>you can change your blog picture</p> */}
                  <label for="image" className="form-label fw-bold fst-italic mt-2 mt-lg-0">You can change your blog picture</label>
                  <input type='file' name='image' className='form-control' placeholder='Enter blog image' />
                </div>
              </div>
              {/* video url we can be entry */}
              {/* <input type='text' name='block_video' className='input input-bordered w-[89vw] my-2' placeholder='Enter blog video url'></input><br/> */}
              <div className='flex justify-between  mt-2  '>
                <Link className=' btn btn-primary btn-sm' to="/memberProfile" >Back</Link>
                <input de className='btn btn-warning btn-sm ' type="reset" value="reset" />
                <input className='btn btn-primary btn-sm' type="submit" value="submit" />
              </div>
            </form>
            {showFullScreenImage &&
              <FullScreenImage
                image={blog?.image}
                id={blog?.id}
              />}
          </div>

        </div>
      </section>
    </div>
  );
};

export default UpdateBlog;