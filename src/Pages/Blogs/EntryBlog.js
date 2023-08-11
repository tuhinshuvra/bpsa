import React from 'react';
const EntryBlog = () => {

  const handleBlock = async (event) => {
    event.preventDefault();
    const form = event.target;
    const blog = {
      title: form.block_title.value,
      summary: form.block_summery.value, // Corrected 'summery' to 'summary'
      description: form.block_description.value,
      status: "pending",
    };
  
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
        blog.image = imageData.data.display_url;
  
        const createBlogResponse = await fetch('http://dev.bpsa.com.bd/api/blog-create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(blog),
        });
  
        const createBlogResult = await createBlogResponse.json();
        console.log(createBlogResult);
        alert("blog created successfully");
        form.reset();
      } else {
        console.log("Error uploading image");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };  
  return (
    <div className='w-full'>
      <h1 className='text-center text-4xl mt-5'>Blog Entry</h1>
      <form className='text-center my-3' onSubmit={handleBlock}>
        <input type='text' name='block_title' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter block title' required></input><br />
        <input type='text' name='block_summery' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog Summary'></input><br />
        <textarea rows="10" cols="50" name='block_description' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog Description' required></textarea><br />
        <input type='file' name='image' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog image'></input><br />
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

export default EntryBlog;