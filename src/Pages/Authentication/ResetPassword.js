import axios from 'axios';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { AllContext } from '../../hooks/ContextData';
import { MdLockReset } from 'react-icons/md';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const ResetPassword = () => {
    const { user } = useContext(AllContext);
    // console.log(user)
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleNew = (e) => {
        e.preventDefault();
        const form = e.target;
        const currentPassword = form.currentPassword.value;
        const newPassword = form.newPassword.value;
        const confirmedPassword = form.confirmedPassword.value;
        // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        const currentPasswordMatch = passwordPattern.test(currentPassword);

        if (!currentPasswordMatch) {
            setErrorMessage("Wrong current password");
            return;
        }

        const isPasswordValid = passwordPattern.test(newPassword);
        if (!isPasswordValid) {
            setErrorMessage("New password should be at least 8 characters long and must contain CAPITAL letter, small letter, and numeric character");
            return;
        }
        const isConfirmedPasswordValid = passwordPattern.test(confirmedPassword);
        if (!isConfirmedPasswordValid) {
            setErrorMessage("Conrirm password should be at least 8 characters long and must contain CAPITAL letter, small letter, and numeric character");
            return;
        }
        if (newPassword !== confirmedPassword) {
            setErrorMessage("The new password and confirm password do not match.");
            return;
        }
        else {
            setErrorMessage("");
            const data = {
                uniqueId: user?.BPID,
                current_password: currentPassword,
                password: newPassword,
                password_confirmation: confirmedPassword,
            }
            console.log(data);
            // axios.post("https://dev.bpsa.com.bd/api/change-password", data)
            axios.post("https://dev.bpsa.com.bd/api/change-password-member", data)
                .then(result => {
                    // console.log(result);
                    if (result.status == 201) {
                        if (result.data.massege == 'Password changed successfully.') {
                            toast.success("Password changed successfully");
                            form.reset();
                            navigate("/memberProfile");
                        }
                        else if (result.data.massege == 'Incorrect current password. ') {

                            setErrorMessage("Incorrect current password. ")
                        }
                        else {
                            setErrorMessage("something is wrong, password not change. Please try again")
                        }
                    }
                    else {
                        setErrorMessage("something is wrong, password not change. Please try again")
                    }
                })
                .catch(err => setErrorMessage(err.message));
        }
    }

    return (
        <div className='col-xl-4 col-lg-5 col-md-8 col-11 mx-auto  loginPage '>
            <div className=' d-flex flex-column align-items-center mb-3'>
                <MdLockReset className='signup_person'></MdLockReset>
                <h2 className=' text-center fs-3'>Reset Password</h2>
                {/* <h3 className=' text-center fs-5 fw-bold mt-0 mb-3'>Set New Password</h3> */}
            </div>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}

            <form onSubmit={handleNew}>

                <div className=' mb-3'>
                    <TextField
                        className=' mt-0'
                        label="Current Password"
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        margin="normal"

                        fullWidth
                        required
                    />
                </div>

                <div className=' my-0 '>
                    <TextField
                        className=' mt-0'
                        label="New Password"
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        margin="normal"

                        fullWidth
                        required
                    />
                </div>

                <label className='passwordMessage mt-0 text-center' htmlFor="">
                    Password should be at least 8 characters long and must contain CAPITAL letter, small letter, and numeric character.
                </label>

                <div className=' my-3'>
                    <TextField
                        className=' mt-0'
                        label="Confirm Password"
                        type="password"
                        name="confirmedPassword"
                        id="confirmedPassword"
                        margin="normal"

                        fullWidth
                        required
                    />
                </div>

                <div className=' d-flex justify-content-between my-3'>
                    {/* <button type='reset' className='btn btn-warning btn-sm  w-25'>Reset</button> */}
                    <button type='submit' className='btn btn-outline-secondary w-full '>Submit</button>
                </div>

            </form>
        </div>
    );
};

export default ResetPassword;