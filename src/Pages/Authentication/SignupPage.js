import { TextField } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Login.css';
import { Toast } from 'bootstrap';

const SignupPage = () => {
    useTitle("SignUp");

    // const [enableOtp, setEnableOtp] = useState(false);
    const [enableOtp, setEnableOtp] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [remainingTime, setRemainingTime] = useState(5 * 60);
    const [userFullName, setUserFullName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [otpData, setOtpData] = useState('');
    const [userEnteredOTP, setUserEnteredOTP] = useState('');

    // console.log("userFullName :", userFullName);
    // console.log("otpData :", otpData);

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



    // const checkPasswordMatch = (password, retypePassword) => {
    //     return password === retypePassword;
    // };


    // this function is used to veriry unique id
    const handleVerifyUniqueId = (event) => {
        event.preventDefault();
        const form = event.target;
        // if (!form) {
        //     console.error("Form element not found");
        //     return;
        // }
        const unique_id = form?.unique_id?.value;
        const birth_year = form?.birth_year?.value;

        // const verifyData = {
        //     unique_id: unique_id,
        //     birth_year: birth_year,
        // }

        // console.log("verifyData : ", verifyData);

        fetch(`https://dev.bpsa.com.bd/api/verify?PIMS_ID=${unique_id}&birth=${birth_year}`, {
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
                    console.log(data);
                    // form.reset();
                    // setOtpVerified(true);
                    startCountdown();
                    setOtpData(data.otp)
                    setUserFullName(data.name)
                    setUserPhone(data.phone)
                }
                else if (data.value === 2) {
                    console.log(data);
                    console.log(data.message);
                    toast.error('User ID verification failed');
                }
                else if (data.value === 3) {
                    console.log(data);
                    console.log(data.message);
                    toast.error('User ID already registered');
                }
                else {
                    toast.error("Something error, Please try again later.");
                }


                // After successful OTP verification, set otpVerified to true
                // setOtpVerified(true);
            })
            .catch((error) => {
                console.log("Error Occurred:", error.response.data);
                setErrorMessage(error.response.data.error);
            });
    };


    const handleVerifyOTP = (event) => {
        event.preventDefault();
        if (userEnteredOTP == otpData) {
            toast.success("OTP Verified successfully!")
            console.log('OTP Verified successfully!');
            setOtpVerified(true);
        } else {
            console.log('Invalid OTP');
            toast.error("Invalid OTP");
        }
    };


    // this function is used to post sign up data
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const uniqueId = form.unique_id.value;
        const fullName = form.full_name.value;
        const email = form.user_name.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        if(password!==confirmPassword){
            toast.error("password are not match")
            return;
        }


        // if (!checkPasswordMatch(password, confirmPassword)) {
        //     setPasswordsMatch(false);
        //     return;
        // }

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



    const handleResendOTP = () => {
        setRemainingTime(5 * 60); // Reset the countdown timer
        // setOtpSent(true); // Mark OTP as sent
        handleVerifyUniqueId(); // Resend OTP
    };


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
                    {/* <div className=' text-center'>
                        <button type='submit' className=' btn btn-primary btn-sm '>Resend</button>
                    </div> */}

                </form>


                {/* handle otp verification form */}
                <form>

                    <div className=' d-flex   align-items-baseline  '>
                        {/* <button className='btn btn-primary btn-sm'>Counter</button> */}
                        {otpData &&
                            <>
                                <div className=' d-flex justify-content-center align-items-center  '>
                                    <button className='btn btn-primary '>{formatTime(remainingTime)}</button>
                                </div>
                                <button className=' btn btn-success mx-1'>{otpData}</button>

                                <TextField
                                    className='mx-1'
                                    label="User OTP"
                                    name="user_otp"
                                    id="user_otp"
                                    type="text"
                                    margin="normal"
                                    value={userEnteredOTP}
                                    onChange={(e) => setUserEnteredOTP(e.target.value)}
                                    required
                                    fullWidth
                                />

                                {/* <button className='btn btn-primary  ' onClick={handleResendOTP}>ResendOTP</button> */}
                                <button onClick={(e) => handleVerifyOTP(e)} className='btn btn-primary'>Verify OTP</button>

                            </>
                        }

                    </div>



                    {otpVerified ?
                        <>
                            <TextField
                                value={userFullName}
                                name="full_name"
                                id="full_name"
                                type="text"
                                margin="normal"
                                disabled={true}
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