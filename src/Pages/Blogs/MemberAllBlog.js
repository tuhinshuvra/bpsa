import React from 'react';
import img from "../Blogs/s1.jpg";
const MemberAllBlog = () => {
    return (
        <div>
            <h1 className='text-center'>My Blogs</h1>
            <div className='lg:grid lg:grid-cols-6 gap-4 my-5 mx-5'>
                <div className='col-span-3'>
                    <h3>
                        This is blog title, blog title blog title
                    </h3>
                    <p>
                        This is blog details This is blog details This is blog details
                        This is blog details This is blog details This is blog details
                        This is blog details This is blog details
                    </p>
                </div>
                <div className='col-span-2'>
                    <img src={img}></img>
                </div>
                <div className='col-span-1'>
                    <button className='btn btn-info'>pending</button>
                </div>
            </div>
        </div>
    );
};

export default MemberAllBlog;



// import React, { useState } from 'react';

// function MemberAllBlog() {
//   const [blogTitle, setBlogTitle] = useState('');
//   const [blogContent, setBlogContent] = useState('');
//   const [blogStatus, setBlogStatus] = useState('Approved');

//   const handleStatusChange = (newStatus) => {
//     setBlogStatus(newStatus);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Here you can submit the form data, including the selected blog status
//     console.log('Blog title:', blogTitle);
//     console.log('Blog content:', blogContent);
//     console.log('Blog status:', blogStatus);

//     // Reset form fields if needed
//     setBlogTitle('');
//     setBlogContent('');
//     setBlogStatus('Approved');
//   };

//   return (
//     <div>
//       <h1>Create a New Blog Post</h1>
//       <form onSubmit={handleSubmit}>
//         {/* <div>
//           <label htmlFor="title">Title:</label>
//           <input
//             type="text"
//             id="title"
//             value={blogTitle}
//             onChange={(e) => setBlogTitle(e.target.value)}
//           />
//         </div> */}
//         {/* <div>
//           <label htmlFor="content">Content:</label>
//           <textarea
//             id="content"
//             value={blogContent}
//             onChange={(e) => setBlogContent(e.target.value)}
//           />
//         </div> */}
//         <div>
//           <label htmlFor="status">Status:</label>
//           <select
//             id="status"
//             value={blogStatus}
//             onChange={(e) => handleStatusChange(e.target.value)}
//           >
//             <option value="Approved">Approved</option>
//             <option value="Ask for Review">Ask for Review</option>
//             <option value="Disabled">Disabled</option>
//           </select>
//         </div>
//         <button type="submit">update status</button>
//       </form>
//     </div>
//   );
// }

// export default MemberAllBlog;










