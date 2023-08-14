import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const MemberImageUpload = () => {

    const navigate = useNavigate();

    const handleImageUpload = async (event) => {
        event.preventDefault();
        const form = event.target;
        const member = {
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
                member.image = imageData.data.display_url;

                // https://dev.bpsa.com.bd/api/verify?PIMS_ID=${unique_id}

                const createBlogResponse = await fetch('http://dev.bpsa.com.bd/api/profile-update', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(member),
                });

                const createBlogResult = await createBlogResponse.json();
                console.log(createBlogResult);
                toast.success("member image uploaded successfully");
                navigate("/memberProfile");
            } else {
                console.log("Error uploading image");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    return (
        <div className='col-4 mx-auto  my-5'>
            <h1 className='text-center fs-3'>Upload Member Profile Image</h1>
            <form onSubmit={handleImageUpload} className='text-center my-3' >
                {/* <input type='file' name='image' className='input input-bordered w-full max-w-xl my-2' placeholder='Enter member image'></input><br /> */}
                <input type="file" name="image" className="form-control my-2" id="image" aria-describedby="emailHelp"></input>
                <div className=' d-flex justify-content-between '>
                    <input className='btn btn-sm btn-primary' type="reset" value="reset" />
                    <input className='btn btn-sm btn-primary' type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default MemberImageUpload;