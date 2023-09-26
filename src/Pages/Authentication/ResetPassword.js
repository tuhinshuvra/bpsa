import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AllContext } from '../../hooks/ContextData';
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
                            toast.success("password reset update");
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
        <div className='my-4 text-center'>
            <h2 className=' text-center fs-3'>Reset Password</h2>
            {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
            <form onSubmit={handleNew}>
                <input type="password" name="currentPassword" id="currentPassword" className="input input-bordered w-full max-w-xs my-1" placeholder='Enter your current password' required /><br />
                <input type="password" name="newPassword" id="newPassword" className="input input-bordered w-full max-w-xs my-1" placeholder='Enter your new password' required /><br />
                <input type="password" name="confirmedPassword" id="confirmedPassword" className="input input-bordered w-full max-w-xs my-1" placeholder='Enter your confirmed password' required /><br />
                <button className='btn  btn-info w-full max-w-xs my-2 '>submit</button>
            </form>
        </div>
    );
};

export default ResetPassword;