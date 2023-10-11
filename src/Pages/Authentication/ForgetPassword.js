import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdOutlineLockReset } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { AllContext } from '../../hooks/ContextData';
import axios from 'axios';

const ForgetPassword = () => {
    useTitle("ForgetPassword");
    const { loading, setLoading } = useContext(AllContext);
    const [unique, setUnique] = useState("");
    const [verifyOTP, setVerifyOTP] = useState(false);
    const [otpValue, setOtpValue] = useState('');
    const [OTPVerified, setOTPVerified] = useState(false);
    const [uniqueIDVerified, setUniqueIDVerified] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [name, setName] = useState("");
    // const [OtpData, setOtpData] = useState();
    const [OtpData, setOtpData] = useState('');

    const [user, setUser] = useState("");
    const [accessToken, setAccessToken] = useState('');
    const tokenUrl = 'https://pims.police.gov.bd:8443/pimslive/webpims/oauth/token';
    const clientId = 'ipzE6wqhPmeED-EV3lvPUA..';
    const clientSecret = 'ZIBtAfMkfuKKYqZtbik-TA..';
    const credentials = `${clientId}:${clientSecret}`;
    const base64Credentials = btoa(credentials);
    const headers = {
        'Authorization': `Basic ${base64Credentials}`,
        'Content-Type': 'application/x-www-form-urlencoded',
    };

    const data = 'grant_type=client_credentials';

    useEffect(() => {
        const getAccessToken = async () => {
            try {
                const response = await axios.post(tokenUrl, data, { headers });
                setAccessToken(response.data.access_token);
            } catch (error) {
                console.error('Error getting access token:', error);
            }
        }
        getAccessToken();
    }, [headers])


    useEffect(() => {
        let countdownInterval;

        if (isCounting) {
            countdownInterval = setInterval(() => {
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 1);
                } else {
                    clearInterval(countdownInterval);
                    setIsCounting(false);
                    // Perform any action when the countdown reaches zero.
                    console.log('Countdown has reached zero.');
                    setVerifyOTP(false);
                }
            }, 1000);
        } else {
            clearInterval(countdownInterval);
        }

        return () => {
            clearInterval(countdownInterval);
        };
    }, [isCounting, timeLeft]);

    const startCountdown = () => {
        // Set the countdown time to 5 minutes (300 seconds)
        setTimeLeft(300);
        setIsCounting(true);

    };

    const formatTime = (seconds) => {
        //   console.log(seconds)
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleOTPSend = async (event) => {
        event.preventDefault();
        console.log("hello")
        const form = event.target;
        // const uniqueId = form.unique_id.value;
        const uniqueId = form.unique_id.value.trim();

        const firstTwoChars = uniqueId.slice(0, 2);

        let newUniqueId;
        if (firstTwoChars.toLowerCase() === 'bp') {
            newUniqueId = uniqueId.toUpperCase();
        } else {
            newUniqueId = 'BP' + uniqueId.toUpperCase();
        }



        const yearBirth = form.year.value;
        if (!accessToken) {
            return;
        }
        // await axios.get(`https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/sign-up/${uniqueId}/${yearBirth}`, {
        await axios.get(`https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/sign-up/${newUniqueId}/${yearBirth}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        },)
            .then(result => {
                console.log(result)
                if (result.data.items.length > 0) {
                    // toast.success("user verified successfully");
                    setUser(result.data.items[0]);
                    // axios.get(`https://dev.bpsa.com.bd/api/forgetpass?PIMS_ID=${uniqueId}`)
                    axios.get(`https://dev.bpsa.com.bd/api/forgetpass?PIMS_ID=${newUniqueId}`)
                        .then(verifyUser => {
                            console.log(verifyUser.data)
                            if (verifyUser.data.value == 1) {
                                // axios.get(`https://dev.bpsa.com.bd/api/verify?mobile=01725601944`)
                                axios.get(`https://dev.bpsa.com.bd/api/verify?mobile=0172560194400`)
                                    .then(resOTP => {
                                        console.log(resOTP.data.otp);
                                        // setOtpData(resOTP.data.otp)
                                        setOtpData(resOTP.data.otp)
                                    })
                                toast.success("PIMS ID Verified Successfully!");
                                setErrorMessage("");
                                setName(data.name);
                                setUnique(newUniqueId);
                                setVerifyOTP(true);
                                setUniqueIDVerified(true);
                                startCountdown();
                                form.reset();
                            }
                            else if (verifyUser.data.value == 2) {
                                setErrorMessage("No member found with this BPID");
                            }
                        })
                }
                else {
                    setErrorMessage("PMIS ID and birth year do not match")
                }
            })
    }

    const handleResetCountTime = () => {
        startCountdown();
    }
    const handleOtpChange = (event) => {
        setOtpValue(event.target.value);
    };
    const handleOTPVerify = () => {
        if (otpValue == OtpData) {
            setOTPVerified(true);
            setVerifyOTP(false);
            toast.success("OTP verify success");
        }
        else {
            setErrorMessage("OTP not match");
        }
    }

    const handleForgetPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        if (password !== confirm_password) {
            setErrorMessage("Password are not match");
            return;
        }

        // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

        const isPasswordValid = passwordPattern.test(password);
        if (!isPasswordValid) {
            setErrorMessage("Password should be at least 8 characters long and must contain CAPITAL letter, small letter, and numeric character.");
            return
        }
        const userData = {
            newpassword: form.password.value,
            UniqueID: unique
        }
        console.log(userData)

        // axios.post("https://dev.bpsa.com.bd/api/change-password", userData, {
        axios.post("https://dev.bpsa.com.bd/api/change-password", userData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                console.log('Reseted Password Data: ', response.data);
                if (response.data) {
                    form.reset();
                    toast.success('Congratulation! Password updated successfully.');
                    navigate("/login");
                }
            })
            .catch(error => {
                if (error.response) {
                    console.error("Error Response Data: ", error.response.data);
                    toast.error(error.response.data.error);
                } else {
                    console.error("Error Occurred: ", error);
                    toast.error("An error occurred while processing your request.");
                }
            });
    }

    const handleResendOTP = (e) => {
        e.preventDefault();
        axios.get(`https://dev.bpsa.com.bd/api/verify?mobile=01725601944`)
            .then(resOTP => {
                console.log();
                setOtpData(resOTP.data.otp)
            })
        startCountdown();
    }


    return (
        <div className='container'>
            <div className='col-xl-4 col-lg-6 col-md-8 mx-auto loginPage'>
                <div className=' d-flex flex-column align-items-center'>
                    <MdOutlineLockReset className='signup_person'></MdOutlineLockReset>
                    <h2 className=' text-center fs-3 fw-bold'>Password forget</h2>
                </div>
                {/* </div> */}

                {!uniqueIDVerified &&
                    <div className=' text-center'>
                        <h3 className=' text-center fs-6 fw-bold   mb-3'>Verify your Identity</h3>
                        <p className='associationMem'>
                            As an association member, to reset your password please provide your BPID and Birth Year in the following fields and follow the instructions.
                        </p>
                    </div>
                }

                {uniqueIDVerified && !OTPVerified &&
                    <div className='text-center'>
                        <h3 className=' text-center fs-5 fw-bold mt-2 mb-0'>OPT Verification</h3>
                        <p className='associationMem mt-0'>Enter the verification code we send to your mobile</p>
                    </div>
                }

                {/* {OTPVerified &&
                    <div className=' text-center'>
                        <p className='welcomeMessage'>
                            Please provide your password and retype the password.
                        </p>
                    </div>
                } */}

                {/* <div className=' col-lg-4 col-md-6 mx-auto'> */}
                <p className=' small  text-center text-danger fw-bold  my-1'>{errorMessage}</p>
                {
                    name && <p className='text-center my-2 text-main'>{name}</p>
                }

                {
                    OtpData && <p className='text-center my-2 text-main'>

                        {!OTPVerified &&
                            <button className=' btn btn-success btn-sm'> {OtpData}</button>
                        }

                    </p>
                }

                {!uniqueIDVerified &&
                    <form onSubmit={handleOTPSend}>
                        <TextField
                            className=' mt-0'
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
                            name="year"
                            id="year"
                            type="text"
                            margin="normal"
                            fullWidth
                            required
                        />

                        <div className='text-center'>
                            {/* <button className=' otpVerifyBtn '>Verify</button> */}
                            <button className=' btn btn-outline-secondary w-full'>Verify</button>
                        </div>
                    </form>
                }

                {
                    verifyOTP && <>
                        <div className=' text-center'>
                            <label htmlFor="user_otp" className=' text-gray-500 mt-3 mb-0'>Type the security code from your mobile</label>
                        </div>
                        <div className=' col-lg-10 mx-auto d-flex justify-content-center align-items-center mt-0'>
                            <TextField
                                className=' w-50'
                                label="Enter OTP"
                                name="otp_id"
                                id="otp_id"
                                type="text"
                                margin="normal"
                                fullWidth
                                required
                                value={otpValue}
                                onChange={handleOtpChange}
                            />
                            <button className=' mt-2 btn btn-secondary text-blue-800 btn-sm w-24 h-14 ms-1 fs-6'>{formatTime(timeLeft)}</button>
                        </div>
                        <div className='resendOTPText d-flex justify-content-center align-items-center'>
                            <span className='  text-secondary'>Didn't you receive your OTP? </span>
                            <button onClick={(e) => handleResendOTP(e)} className='  fw-bold text-blue-800 ms-2 '>Resent OTP</button>
                        </div>


                        {/* <div className="col-12 row my-2">
                            <div className="col-7 text-start">
                                <button onClick={handleOTPVerify} type="submit" className="btn btn-primary btn-sm">Verify</button>
                            </div>
                        </div> */}

                        <div className=' text-center mt-3'>
                            {/* <button onClick={handleOTPVerify} className='otpVerifyBtn'>Verify</button> */}
                            <button onClick={handleOTPVerify} className=' btn btn-outline-secondary w-full'>Verify</button>
                        </div>
                    </>
                }

                {OTPVerified &&
                    <form onSubmit={handleForgetPassword}>
                        <h3 className=' text-center fs-5 fw-bold mt-0 mb-3'>Set New Password</h3>

                        <div className=' text-center'>
                            <p className='associationMem'>
                                Please provide your password and retype the password.
                            </p>
                        </div>
                        <TextField
                            label="Password" name="password" id="password" type="password" margin="normal" disabled={false} required fullWidth />
                        <label className='passwordMessage mt-0 text-center' htmlFor="">
                            Password should be at least 8 characters long and must contain CAPITAL letter, small letter, and numeric character.
                        </label>
                        <TextField label="Retype Password" name="confirm_password" id="confirm_password" type="password" margin="normal" disabled={false} required fullWidth />
                        <div className='text-center  mt-4'>
                            {/* <button type='submit' className=''>Submit</button> */}
                            <button type='submit' className='btn btn-outline-secondary w-full'>Submit</button>
                        </div>
                    </form>
                }
            </div>
        </div >
    );
};

export default ForgetPassword;