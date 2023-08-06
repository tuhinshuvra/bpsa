import { TextField } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const SignupPage = () => {
    useTitle("SignUp");
    const [enableOtp, setEnableOtp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);

    const navigate = useNavigate();

    const checkPasswordMatch = (password, retypePassword) => {
        return password === retypePassword;
    };


    // this function is used to veriry unique id
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
        };

        fetch(`serverAddress/api/verify`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(uniqueData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("Registered User Data :", data);
                toast.success("OTP Send Successfully, Please check your phone for otp.");

                form.reset();
                // After successful OTP verification, set otpVerified to true
                setOtpVerified(true);
            })
            .catch((error) => {
                console.log("Error Occured: ", error.response.data);
                setErrorMessage(error.response.data.error);
            });
    };

    // this function is used to veriry otp during typing
    const handleOtpTyping = (event) => {
        const otp = event.target.value;

        const otpData = {
            otp: otp,
        };

        fetch(`serverAddress/api/verify-otp`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(otpData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("OTP Verification Data :", data);
                if (data.verified) {
                    toast.success("OTP Verified Successfully.");
                    setOtpVerified(true); // Set otpVerified to true if OTP is verified
                } else {
                    toast.error("OTP Verification Failed. Please try again.");
                    setOtpVerified(false); // Set otpVerified to false if OTP verification fails
                }
            })
            .catch((error) => {
                console.log("Error Occurred during OTP Verification: ", error);
                toast.error("Error occurred during OTP verification. Please try again later.");
                setOtpVerified(false); // Set otpVerified to false if OTP verification fails
            });
    };

    // this function is used to post sign up data
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.full_name.value;
        const userName = form.user_name.value;
        const password = form.password.value;
        const retypePassword = form.confirm_password.value;



        // Check if the passwords match
        if (!checkPasswordMatch(password, retypePassword)) {
            // Passwords don't match, show an error message or take appropriate action
            setErrorMessage("Passwords do not match");
            return;
        }

        const userData = {
            name: fullName,
            user_name: userName,
            password: password,
            role: 'general',
        }
        console.log("User Data", userData);

        fetch(`serverAddress/api/signup`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log("Registered User Data :", data);
                toast.success("Congratulation! Member has Successfully Sign Up.");
                form.reset();
                navigate("/");
            })
            .catch(error => {
                console.log("Error Occured: ", error.response.data)
                setErrorMessage(error.response.data.error)
            })

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
                        label="Birth Date"
                        name="birth_date"
                        id="birth_date"
                        type="date"
                        margin="normal"

                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />


                    <TextField
                        label="Unique ID"
                        name="unique_id"
                        id="unique_id"
                        type="text"
                        margin="normal"

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
                            onChange={handleOtpTyping} // Attach the function to the onChange event
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
                                label="Full Name"
                                name="full_name"
                                id="full_name"
                                type="text"
                                margin="normal"
                                disabled={false}
                                required
                                fullWidth
                            />

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
                                label="Full Name"
                                name="full_name"
                                id="full_name"
                                type="text"
                                margin="normal"
                                disabled={true}
                                required
                                fullWidth
                            />
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

                    <p className=' text-center text-danger fw-bold fs-6'>{errorMessage}</p>

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