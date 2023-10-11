import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AllContext } from '../../hooks/ContextData';
import { useEffect } from 'react';
import Loader from '../../Components/Common/Loader';
import '../MemberProfile/MemberProfilePage.css'

const MemberCoCurriculamActivitiesEntry = () => {
    useTitle("Profile Update");
    const [userNewData, setUserNewData] = useState();
    // console.log("userNewData :", userNewData);
    const { user, loading, setLoading, setShowCoCurricular } = useContext(AllContext);

    const navigate = useNavigate();

    // user new data
    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/profile/${user?.BPID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("MemberCoCurriculamActivitiesEntry user new  Data: ", data)
                setUserNewData(data?.member)
                setLoading(false)
            })
    }, [setLoading, user?.BPID]);


    const handleOnSubmit = (event) => {
        // navigate("/memberProfile")
        event.preventDefault();
        const form = event.target;
        const CoCurriculumActivities = form.CoCurriculumActivities.value;

        const userData = {
            CoCurriculumActivities: CoCurriculumActivities,
            image: userNewData.image,
        }
        console.log("userData : ", userData);

        fetch(`https://dev.bpsa.com.bd/api/profile-update/${user?.id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Inserted Data : ', data);
                if (data) {
                    form.reset()
                    toast.success('Co-Curricular Activities saved successfully.')
                    navigate("/memberProfile");
                    window.location.reload();
                }
                setLoading(false);
            })
            .catch(error => {
                console.log("Error Occured: ", error)
                // setErrorMessage(error.response.data.error)
            })
    }

    if (loading) {
        <Loader></Loader>
    }


    return (
        <div className='mx-auto'>
            <form onSubmit={handleOnSubmit}>
                <div className="">
                    <textarea
                        name='CoCurriculumActivities'
                        className="form-control formArea mb-0"
                        id="floatingTextarea"
                        maxlength="90"
                        defaultValue={userNewData?.CoCurriculumActivities}
                    />
                    <label className=' text-main text-xs mt-0' for="floatingTextarea"> Hobbies maximum 90 character</label>
                </div>

                <div className=' d-flex justify-between mb-1'>
                    <input className="profileUpdateBtn" type="reset" value="Reset" />
                    <input className='profileUpdateBtn' type="reset" onClick={() => setShowCoCurricular(false)} value="Cancel" />
                    <input className="profileUpdateBtn" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    );
};

export default MemberCoCurriculamActivitiesEntry;