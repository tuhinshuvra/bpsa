import React, { useRef, useState, useContext } from 'react';
import JoditEditor from 'jodit-react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { getCookie } from '../../utlis/helper';
import imageCompression from 'browser-image-compression';
import axios from 'axios';
import useTitle from '../../hooks/useTitle';

const EntryBlog = () => {
  useTitle("PostEntry");
  const editor = useRef(null);
  const [content, setContent] = useState('');
  const [statusDescription, setStatusDescription] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AllContext);

  console.log(" EntryBlog user", user);

  const handleBlock = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (!content) {
      setStatusDescription(true);
      toast.error("Description must be filled up");
      return;
    }

    const post = {
      title: form.block_title.value,
      summery: form.block_summery.value,
      description: content,
      status: 'Pending',
      member_id: user?.id,
      memberName: user?.Name,
    };

    let imageFile;

    if (!form.image.value) {
      // No image provided, proceed without an image
      imageFile = null;
    } else {
      // Compress the uploaded image
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
    }

    // Upload the image to ImageBB
    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);

      try {
        const response = await axios.post('https://api.imgbb.com/1/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          params: {
            key: '7a43c068c4477f76ae69e0549062c80e',
          },
        });

        const imageUrl = response.data.data.url;
        console.log('Image uploaded to ImageBB:', imageUrl);

        // Update the post object with the ImageBB URL
        post.image = imageUrl;
      } catch (error) {
        console.error('Error uploading image to ImageBB:', error);
        toast.error('Error uploading image to ImageBB');
        return;
      }
    }

    // Proceed to create the post post with the updated post object
    try {
      const createPostResponse = await fetch('https://admin.bpsa.com.bd/api/blog-create', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${getCookie("token")}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(post),
      });

      if (createPostResponse.ok) {
        const createPostResult = await createPostResponse.json();
        console.log(createPostResult);
        toast.success('Post created successfully');

        form.reset();
        navigate("/memberProfile");
      } else {
        const errorResponse = await createPostResponse.text();
        console.error('Error creating post:', errorResponse);
        toast.error('Error creating post');
      }
    } catch (error) {
      console.error('Error creating post:', error);
      toast.error('Error creating post');
    }
  };

  return (
    <div className='  col-md-10 mx-auto'>
      <section style={{ backgroundColor: "#eee" }}>
        <div className="container pt-3 pb-1 ">

          <nav aria-label="" className="bg-light rounded-3 p-2  ">
            <h3 className='fw-bold text-center '>Post Entry</h3>
          </nav>

          <form className='   ' onSubmit={handleBlock}>
            <input type='text' name='block_title' className='input input-bordered w-full my-2 bg-white' placeholder='Enter post title' required></input><br />
            <input type='text' name='block_summery' className='input input-bordered w-full my-2 bg-white' placeholder='Enter post summary'></input><br />
            {
              statusDescription && <label className='my-2 text-2xl text-red-600'>Please fill up description than submit posts</label>
            }
            <JoditEditor
              placeholder="Enter post description"
              ref={editor}
              value={content}
              onChange={newContent => setContent(newContent)}
            >
            </JoditEditor>
            <input type='file' name='image' className='input input-bordered w-full my-2 bg-white' placeholder='Enter post image'></input><br />
            <div className='flex justify-between mt-2 mb-5'>
              <input de className='btn btn-outline-secondary  btn-sm  w-25 ' type="reset" value="reset" />
              <input className='btn btn-outline-secondary  btn-sm w-25  ' type="submit" value="submit" />
            </div>
          </form>

        </div>
      </section>
    </div>
  );
};

export default EntryBlog;
