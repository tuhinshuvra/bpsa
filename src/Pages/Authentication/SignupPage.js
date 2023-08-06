import { TextField } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';

const SignupPage = () => {
    useTitle("SignUp");
    const [enableOtp, setEnableOtp] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.full_name.value;
        const userName = form.user_name.value;
        const password = form.password.value;

        const userData = {
            name: fullName,
            user_name: userName,
            password: password,
            role: 'general',
        }
        console.log("User Data", userData);
    }

    const handleVerifyUniqueId = (event) => {
        event.preventDefault();
        const form = event.target.form;
        if (!form) {
            console.error("Form element not found");
            return;
        }

        const birth_date = form.birth_date.value;
        const unique_id = form.unique_id.value;

        const uniqueData = {
            birth_date: birth_date,
            unique_id: unique_id,
        }

        setOtpVerified(true);
        console.log("uniqueData", uniqueData);
    }


    return (
        <div className=' container my-4'>
            <div className=' col-lg-4 col-md-6 mx-auto'>

                <div className=' d-flex flex-column align-items-center'>
                    <BsPersonCircle className='signup_person'></BsPersonCircle>
                    <h2 className=' text-center fs-3'>Sign up</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <TextField
                        label="Full Name"
                        name="full_name"
                        id="full_name"
                        type="text"
                        margin="normal"
                        required
                        fullWidth
                    />

                    <TextField
                        label="Birth Date"
                        name="birth_date"
                        id="birth_date"
                        type="date"
                        margin="normal"
                        required
                        fullWidth
                    />

                    <TextField
                        label="Unique ID"
                        name="unique_id"
                        id="unique_id"
                        type="text"
                        margin="normal"
                        required
                        fullWidth
                    />

                    <div onClick={() => setEnableOtp(true)} className=' text-center'>
                        <button onClick={handleVerifyUniqueId} className=' btn btn-primary btn-sm '>Verify</button>
                    </div>

                    {enableOtp ?
                        <TextField
                            label="OTP"
                            name="otp"
                            id="otp"
                            type="text"
                            margin="normal"
                            disabled={false}
                            required
                            fullWidth
                        />
                        :
                        <TextField
                            label="OTP"
                            name="otp"
                            id="otp"
                            type="text"
                            margin="normal"
                            disabled={true}
                            required
                            fullWidth
                        />
                    }

                    {otpVerified ?
                        <>
                            <TextField
                                label="User name"
                                name="user_name"
                                id="user_name"
                                type="text"
                                margin="normal"
                                disabled={false}
                                required
                                fullWidth
                            />

                            <TextField
                                label="Password"
                                name="password"
                                id="password"
                                type="password"
                                margin="normal"
                                disabled={false}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Retype Password"
                                name="confirm_password"
                                id="confirm_password"
                                type="password"
                                margin="normal"
                                disabled={false}
                                required
                                fullWidth
                            />
                        </>
                        :
                        <>
                            <TextField
                                label="User name"
                                name="user_name"
                                id="user_name"
                                type="text"
                                margin="normal"
                                disabled={true}
                                required
                                fullWidth
                            />

                            <TextField
                                label="Password"
                                name="password"
                                id="password"
                                type="password"
                                margin="normal"
                                disabled={true}
                                required
                                fullWidth
                            />
                            <TextField
                                label="Retype Password"
                                name="confirm_password"
                                id="confirm_password"
                                type="password"
                                margin="normal"
                                disabled={true}
                                required
                                fullWidth
                            />
                        </>
                    }


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

export default SignupPage;