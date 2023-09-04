import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { isAuth } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
const MemberImageUpload = () => {
    const { user, setUser, loading, setLoading, showImageUpload, setShowImageUpload, showCoCurricular, setShowCoCurricular } = useContext(AllContext);

    const [userNewData, setUserNewData] = useState();
    const navigate = useNavigate();
    // console.log("userNewData :", userNewData);

    // user new data
    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/forgetpass?PIMS_ID= ${user.UniqueID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Member User table  Data: ", data.member)
                setUserNewData(data.member);

                setLoading(false);
            })
    }, [setLoading, user.UniqueID])

    const handleImageUpload = async (event) => {
        event.preventDefault();
        const form = event.target;
        const member = {
            CoCurriculumActivities: userNewData?.CoCurriculumActivities
        };

        // console.log("member Image Data : ", member);

        const imageFile = form.image.files[0];
        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const imageResponse = await fetch(
                'https://api.imgbb.com/1/upload?key=7a43c068c4477f76ae69e0549062c80e',
                {
                    method: 'POST',
                    body: formData,
                }
            );

            const imageData = await imageResponse.json();
            if (imageData.data && imageData.data.display_url) {
                member.image = imageData.data.display_url;

                const createBlogResponse = await fetch(`https://dev.bpsa.com.bd/api/profile-update/${user?.id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(member),
                });

                const createBlogResult = await createBlogResponse.json();
                console.log(createBlogResult);
                setUser(isAuth());
                toast.success("member image uploaded successfully");
                setShowImageUpload(false);
                navigate("/memberProfile");
            } else {
                console.log("Error uploading image");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    if (loading) {
        <Loader></Loader>
    }

    return (
        <div className=' mx-auto  my-1 '>
            {/* <p className='text-center fw-bold mb-0'>Upload Member Profile Image</p> */}
            <form onSubmit={handleImageUpload} className='text-center ' >
                <input type="file" name="image" className="form-control " id="image" aria-describedby="emailHelp" />
                <textarea defaultValue={user?.CoCurriculumActivities} name='CoCurriculumActivities' className="form-control" placeholder="Leave a comment here" id="floatingTextarea" maxLength="100" hidden />

                <div className=' d-flex justify-content-between mt-1'>
                    <input className='btn btn-sm btn-primary' type="reset" value="reset" />

                    <input className='btn btn-sm btn-primary w-20' onClick={() => setShowImageUpload(false)} value="Cancel" />

                    <input className='btn btn-sm btn-primary' type="submit" value="submit" />
                </div>
            </form>
        </div>
    );
};

export default MemberImageUpload;