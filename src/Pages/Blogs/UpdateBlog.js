import React, { useMemo } from 'react';
import { useContext } from 'react';
import { AllContext } from '../../hooks/ContextData';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import JoditEditor from 'jodit-react';
const UpdateBlog = () => {
  const navigate = useNavigate();
  const { user } = useContext(AllContext);
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
  }, [user.id, id]);
  const [content, setContent] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {
    if (blog?.description) {
      setContent(`<p>${blog.description}</p>`);
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
      description: textValue,
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
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(NewBlog),
      })
        .then(res => res.json())
        .then(result => {
          alert("blog updated successfully");
          navigate("/updateBlog/" + id);
        })
        .catch(error => console.log(error));
    }
    else {
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
          fetch("https://dev.bpsa.com.bd/api/blog-update", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(NewBlog),
          })
            .then(res => res.json())
            .then(result => {
              alert("blog updated successfully");
              navigate("/updateBlog/" + id);

            })
            .catch(error => console.log(error));
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
      <form className='mx-[5vw] my-3' onSubmit={handleBlock}>
        <input defaultValue={blog.title} type='text' name='block_title' className='input input-bordered w-[89vw] my-2' placeholder='Enter block title' required></input><br />
        <input defaultValue={blog?.summary} type='text' name='block_summery' className='input input-bordered w-[89vw] my-2' placeholder='Enter blog Summary'></input><br />
        <JoditEditor
          value={content}
          tabIndex={12}
          config={config}
          onChange={newContent => setContent(newContent)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
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