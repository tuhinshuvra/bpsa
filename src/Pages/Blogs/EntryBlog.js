import React from 'react';

const EntryBlog = () => {
    const handleBlock=(event)=>{
        event.preventDefault();
        const form=event.target;
        const block={
            block_title:form.block_title.value,
            block_summery:form.block_summery.value,
            block_description:form.block_description.value,
           
            // block_video:form.block_video.value,
        }
        
        const imageFile = form.block_image.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        // Make an API request to ImageBB or any other endpoint here
        // Replace 'YOUR_API_KEY' with your actual API key
        fetch('https://api.imgbb.com/1/upload?key=7a43c068c4477f76ae69e0549062c80e', {
            method: 'POST',
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                block. block_image = data.data.display_url;
                console.log(block);
                form.reset();
        })
    }
    return (
        <div className='w-full'>
            <h1 className='text-center text-4xl mt-5'>Blog Entry</h1>
           <form className='text-center my-3' onSubmit={handleBlock}>
            <input  type='text' name='block_title' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter block title' required></input><br/>
            <input type='text' name='block_summery' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog Summary'></input><br/>
            <textarea  rows="10" cols="50" name='block_description' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog Description' required></textarea><br/>
            <input type='file' name='block_image' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog image'></input><br/>
            {/* video url we can be entry */}
            {/* <input type='text' name='block_video' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter blog video url'></input><br/> */}
          <div className='flex justify-around mx-[22vw] mt-2 mb-5'>
          <input className='btn btn-info w-full max-w-[10vw]' type="reset" value="reset"/>
          <input  className='btn btn-info w-full max-w-[10vw] ' type="submit" value="submit"/>
          </div>
           </form>
        </div>
    );
};

export default EntryBlog;