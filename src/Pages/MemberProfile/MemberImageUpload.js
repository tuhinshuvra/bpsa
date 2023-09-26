import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AllContext } from '../../hooks/ContextData';
import { isAuth } from '../../utlis/helper';
import Loader from '../../Components/Common/Loader';
import '../MemberProfile/MemberProfilePage.css';

const MemberImageUpload = () => {
    const { user, setUser, loading, setLoading, showImageUpload, setShowImageUpload } = useContext(AllContext);

    const [userNewData, setUserNewData] = useState();
    const navigate = useNavigate();
    console.log("Login userData :", user);

    // user new data
    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/pms?PIMS_ID= ${user?.BPID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Member User table  Data: ", data.member)
                setUserNewData(data?.value);

                setLoading(false);
            })
    }, [setLoading, user?.BPID])

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
                window.location.reload();
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
        <div className='col-10 mx-auto  my-1 '>
            <form onSubmit={handleImageUpload} className='text-center my-0 ' >
                <input type="file" name="image" className=" bg-secondary text-white text-xs " id="image" aria-describedby="emailHelp" />
                <textarea defaultValue={user?.CoCurriculumActivities} name='CoCurriculumActivities' className="form-control" id="floatingTextarea" maxLength="80" hidden />

                <div className='col-9 mx-auto d-flex justify-content-between mt-1'>
                    <input className='profileUpdateBtn' type="reset" value="Reset" />
                    <input className='profileUpdateBtn' type='reset' onClick={() => setShowImageUpload(false)} value="Cancel" />
                    <input className='profileUpdateBtn' type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default MemberImageUpload;