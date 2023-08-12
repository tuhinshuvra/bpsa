import TextareaAutosize from '@mui/material/TextareaAutosize';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const MemberProfileUpdatePage = () => {
    useTitle("Profile Update");

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };


    // this function is used to post sign up data
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.full_name.value;

        const userData = {
            name: fullName,
        }
        console.log("userData : ", userData);

        fetch(`https://dev.bpsa.com.bd/api/signup`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Registerd User Data : ', data);
                if (data) {
                    form.reset()
                    toast.success('Congratulation! User created successfully.')
                }

            })
            .catch(error => {
                console.log("Error Occured: ", error.response.data)
                // setErrorMessage(error.response.data.error)
            })
    }


    return (
        <div className=' container my-4'>
            <div className=' col-lg-4 col-md-6 mx-auto'>

                <div className=' d-flex flex-column align-items-center'>
                    <h2 className=' text-center fs-3'>Co Curricular Activities</h2>
                </div>

                <form onSubmit={handleOnSubmit}>

                    <TextareaAutosize
                        minRows={3}
                        value={value}
                        onChange={handleChange}
                        style={{
                            resize: 'vertical',
                            width: '100%',
                            border: '1px solid #ccc', // Add border style
                            padding: '8px', // Add padding for a better visual appearance
                        }}
                    />



                    {/* <p className=' text-center text-danger fw-bold fs-6'>{errorMessage}</p> */}

                    <div className=' d-flex justify-between mt-3'>
                        <button type="reset" className="btn btn-warning btn-sm">Reset</button>
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </div>

                    <p className=' text-center my-2'>Already have an account? go to<Link to="/login" className=' ms-1'>Login</Link> </p>
                </form>

            </div>
        </div>
    );
};

export default MemberProfileUpdatePage;