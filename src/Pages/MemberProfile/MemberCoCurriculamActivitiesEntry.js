import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AllContext } from '../../hooks/ContextData';
import { useEffect } from 'react';
import Loader from '../../Components/Common/Loader';

const MemberCoCurriculamActivitiesEntry = () => {
    useTitle("Profile Update");
    const [userNewData, setUserNewData] = useState();
    // console.log("userNewData :", userNewData);
    const { user, loading, setLoading, showCoCurricular, setShowCoCurricular } = useContext(AllContext);

    const navigate = useNavigate();

    // user new data
    useEffect(() => {
        fetch(`https://dev.bpsa.com.bd/api/pms?PIMS_ID= ${user?.UniqueID}`)
            .then(res => res.json())
            .then(data => {
                // console.log("Member User table  Data: ", data.member)
                setUserNewData(data?.value)
                setLoading(false)
            })
    }, [setLoading, user.UniqueID])


    // this function is used to post sign up data
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
        <div className='   '>
            <div className='  mx-auto'>
                <form onSubmit={handleOnSubmit}>

                    <div className="form-floating">
                        <textarea
                            name='CoCurriculumActivities'
                            className="form-control"
                            id="floatingTextarea"
                            maxlength="80"
                            defaultValue={userNewData?.CoCurriculumActivities}
                        />
                        <label for="floatingTextarea">Enter Co-Curricular Activities(max 80 character)</label>
                    </div>

                    <div className=' d-flex justify-between my-1'>
                        <button type="reset" className="btn btn-warning btn-sm">Reset</button>
                        <input className='btn btn-sm btn-warning   w-20' onClick={() => setShowCoCurricular(false)} value="Cancel" />
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default MemberCoCurriculamActivitiesEntry;