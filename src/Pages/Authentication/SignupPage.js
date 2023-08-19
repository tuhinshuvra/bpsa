import { TextField } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Login.css';

const SignupPage = () => {
    useTitle("SignUp");

    // const [enableOtp, setEnableOtp] = useState(false);
    const [enableOtp, setEnableOtp] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [verifyMessage, setVerifyMessage] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [remainingTime, setRemainingTime] = useState(5 * 60);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const navigate = useNavigate();


    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secondsToShow = seconds % 60;
        return `${minutes}:${secondsToShow < 10 ? '0' : ''}${secondsToShow}`;
    };

    const startCountdown = () => {
        const countdownInterval = setInterval(() => {
            setRemainingTime((prevTime) => prevTime - 1);
        }, 1000);

        // Clear the interval when the countdown is complete
        setTimeout(() => {
            clearInterval(countdownInterval);
            // You might want to handle any actions after the countdown here
        }, remainingTime * 1000);
    };



    const checkPasswordMatch = (password, retypePassword) => {
        return password === retypePassword;
    };


    // this function is used to veriry unique id
    const handleVerifyUniqueId = (event) => {
        event.preventDefault();
        const form = event.target;
        // if (!form) {
        //     console.error("Form element not found");
        //     return;
        // }
        const unique_id = form.unique_id.value;
        const birth_year = form.birth_year.value;

        const verifyData = {
            unique_id: unique_id,
            // birth_year: birth_year,
        }

        console.log("signupData : ", verifyData);

        fetch(`https://dev.bpsa.com.bd/api/verify?PIMS_ID=${verifyData}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("Verify unique Id", data);
                if (data.value === 1) {
                    // toast.success("OTP Sent Successfully. Please check your phone for OTP.");
                    toast.success("Unique ID Verified Successfully!");
                    // form.reset();
                    setOtpVerified(true);
                    setVerifyMessage(true);
                    startCountdown(); // Start the countdown after verification
                }
                else {
                    toast.error("Unique ID Verification Failed!");
                }


                // After successful OTP verification, set otpVerified to true
                // setOtpVerified(true);
            })
            .catch((error) => {
                console.log("Error Occurred:", error.response.data);
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
                    setOtpVerified(true);
                } else {
                    toast.error("OTP Verification Failed. Please try again.");
                    setOtpVerified(false);
                }
            })
            .catch((error) => {
                console.log("Error Occurred during OTP Verification: ", error);
                toast.error("Error occurred during OTP verification. Please try again later.");
                setOtpVerified(false);
            });
    };

    const handleResendOTP = () => {
        console.log('OTP resend successfully!');
    }


    // this function is used to post sign up data
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const uniqueId = form.unique_id.value;
        const fullName = form.full_name.value;
        const email = form.user_name.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;


        if (!checkPasswordMatch(password, confirmPassword)) {
            setPasswordsMatch(false);
            return;
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[1234567890])[A-Za-z\d@$!%*?&]{8,}$/;
        const isPasswordValid = passwordPattern.test(password);

        if (!isPasswordValid) {
            setPasswordValid(false);
            return;
        }

        const userData = {
            name: fullName,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
            UniqueID: uniqueId,
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
                navigate("/login");

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

                {!passwordsMatch && (
                    <p className="text-center text-danger fw-bold fs-6">Passwords do not match.</p>
                )}

                {/* {verifyMessage && (
                    <p className="text-center text-danger fw-bold fs-6">Unique ID verified Successfully!</p>
                )} */}


                {passwordValid ? <></> :
                    <><p className=' text-warning'>Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, and a numeric number.</p></>
                }

                {/* handle unique id verification  form*/}
                <form onSubmit={handleVerifyUniqueId}>
                    <TextField
                        label="Unique ID"
                        name="unique_id"
                        id="unique_id"
                        type="text"
                        margin="normal"

                        fullWidth
                        required
                    />

                    <TextField
                        label="Birth Year"
                        name="birth_year"
                        id="birth_year"
                        type="number"
                        margin="normal"
                        fullWidth
                        InputProps={{
                            inputProps: {
                                min: 1900, // Set a minimum value for birth year
                                max: new Date().getFullYear(), // Set a maximum value as the current year
                            },
                        }}
                        required
                    />

                    <div className=' text-center'>
                        <button type='submit' className=' btn btn-primary btn-sm '>Verify</button>
                    </div>
                </form>


                {/* handle otp verification form */}
                <form>
                    {enableOtp ?
                        <div className=' d-flex   align-items-baseline  '>
                            {/* <button className='btn btn-primary btn-sm'>Counter</button> */}
                            <div className=' d-flex justify-content-center align-items-center  '>
                                <button className='btn btn-primary '>{formatTime(remainingTime)}</button>
                            </div>

                            <TextField
                                className=' mx-1'
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
                            <button className='btn btn-primary' onClick={handleResendOTP}>Resend OTP</button>
                        </div>
                        :
                        <div>
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
                        </div>
                    }

                    {otpVerified ?
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
                        </>
                    }
                    <p className=' text-center text-danger fw-bold fs-6'>{errorMessage}</p>
                </form>

                {/* new user creation form */}
                <form onSubmit={handleOnSubmit}>


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