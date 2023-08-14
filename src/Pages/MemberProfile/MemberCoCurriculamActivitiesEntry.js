import TextareaAutosize from '@mui/material/TextareaAutosize';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const MemberCoCurriculamActivitiesEntry = () => {
    useTitle("Profile Update");

    const [value, setValue] = useState('');

    const navigate = useNavigate();

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    // this function is used to post sign up data
    const handleOnSubmit = (event) => {
        navigate("/memberProfile")
        // event.preventDefault();
        // const form = event.target;
        // const fullName = form.full_name.value;

        // const userData = {
        //     name: fullName,
        // }
        // console.log("userData : ", userData);

        // fetch(`https://dev.bpsa.com.bd/api/profile-update`, {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userData)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Inserted Data : ', data);
        //         if (data) {
        //             form.reset()
        //             toast.success('Co-Curricular Activities saved successfully.')
        //             navigate("/memberProfile");
        //         }

        //     })
        //     .catch(error => {
        //         console.log("Error Occured: ", error.response.data)
        //         // setErrorMessage(error.response.data.error)
        //     })
    }


    return (
        <div className=' container my-4'>
            <div className=' col-lg-8 col-md-10 mx-auto'>

                <div className=' d-flex flex-column align-items-center'>
                    <h2 className=' text-center fs-3'>Co-Curricular Activities Entry</h2>
                </div>

                <form onSubmit={handleOnSubmit}>

                    <div class="form-floating">
                        <textarea onChange={handleChange} class="form-control" placeholder="Leave a comment here" id="floatingTextarea" maxlength="100"></textarea>
                        <label for="floatingTextarea">Enter Co-Curricular Activities</label>
                    </div>

                    <div className=' d-flex justify-between mt-3'>
                        <button type="reset" className="btn btn-warning btn-sm">Reset</button>
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default MemberCoCurriculamActivitiesEntry;