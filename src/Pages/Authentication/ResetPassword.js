import axios from 'axios';
import React, { useState } from 'react';
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
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

        const currentPasswordMatch = passwordPattern.test(currentPassword);

        if (!currentPasswordMatch) {
            setErrorMessage("invalid current password,  Password combination must be lowercase, uppercase ,number . password total numbers must me eight");
            return;
        }

        const isPasswordValid = passwordPattern.test(newPassword);
        if (!isPasswordValid) {
            setErrorMessage("new Password combination must be lowercase, uppercase ,number . password total numbers must me eight");
            return;
        }
        const isConfirmedPasswordValid = passwordPattern.test(confirmedPassword);
        if (!isConfirmedPasswordValid) {
            setErrorMessage("confirmed password combination must be lowercase, uppercase ,number. password total numbers must me eight");
            return;
        }
        if (newPassword !== confirmedPassword) {
            setErrorMessage("new password and confirmed password not match");
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
            axios.post("https://dev.bpsa.com.bd/api/change-password", data)
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
        <div className='col-xl-3 col-lg-4 col-md-6 mx-auto my-4 px-2 '>
            <div className=' d-flex flex-column align-items-center mb-3'>
                <MdLockReset className='signup_person'></MdLockReset>
                <h2 className=' text-center fs-3'>Reset Password</h2>
            </div>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}


            <form onSubmit={handleNew}>

                <div className=' mb-3'>
                    <label for="currentPassword" className="form-label my-0 fst-italic ">Current Password</label>
                    <input
                        className=" form-control  my-0"
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        placeholder='Enter your current password'
                        required
                    />
                </div>

                <div className=' my-0 '>
                    <label for="newPassword" className="form-label my-0 fst-italic  ">New Password</label>
                    <input
                        className=" form-control my-0 "
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        placeholder='Enter your new password'
                        required />
                </div>

                <label className='passwordMessage mt-0 text-center' htmlFor="">
                    Password should be at least 8 characters and must contain a capital letter, a small letter, and a numeric character.
                </label>

                <div className=' my-3'>
                    <label for="confirmedPassword" className="form-label my-0 fst-italic ">Confirm Password</label>
                    <input
                        className=" form-control my-0 "
                        type="password"
                        name="confirmedPassword"
                        id="confirmedPassword"
                        placeholder='Enter your confirmed password'
                        required
                    />
                </div>

                <div className=' d-flex justify-content-between my-3'>
                    <button type='reset' className='btn btn-warning btn-sm  w-25'>Reset</button>
                    <button type='submit' className='btn   btn-primary  btn-sm  w-25'>Submit</button>
                </div>

            </form>
        </div>
    );
};

export default ResetPassword;