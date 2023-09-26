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
    const [timeLeft, setTimeLeft] = useState(0);
    const [isCounting, setIsCounting] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [otpAccess, setOtpAccess] = useState();

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
    }, [])

    if(accessToken){
       axios.get('https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/member-profile/BP7203027807',{
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        }
       })
       .then(result=>console.log(result.data.items[0]))
    }


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

    const handleOTPSend = (event) => {
        event.preventDefault();
        const form = event.target;
        const uniqueId = form.unique_id.value;
        const yearBirth = form.year.value;
        fetch(`https://dev.bpsa.com.bd/api/forgetpass?PIMS_ID=${uniqueId}&birth=${yearBirth}&year=${yearBirth}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.value === 1) {
                    toast.success("Unique ID Verified Successfully!");
                    setErrorMessage("");
                    setName(data.name);
                    setUnique(form.unique_id.value);
                    setVerifyOTP(true);
                    setOtpAccess(data.otp)
                    startCountdown();
                    form.reset();
                }
                else {
                    setErrorMessage("No matching PIMS_ID");
                }
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    const handleResetCountTime = () => {
        startCountdown();
    }
    const handleOtpChange = (event) => {
        setOtpValue(event.target.value);
    };
    const handleOTPVerify = () => {
        if (otpValue == otpAccess) {
            setOTPVerified(true);
            setVerifyOTP(false);
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

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/

        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isPasswordValid = passwordPattern.test(password);
        if (!isPasswordValid) {
            setErrorMessage("password combination must be lowercase, uppercase and number. password total numbers must me eight");
            return
        }
        const userData = {
            Newpassword: form.password.value,
            uniqueId: unique
        }

        fetch("https://dev.bpsa.com.bd/api/change-password", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Reseted Password Data : ', data);
                if (data) {
                    form.reset()
                    toast.success('Congratulation! Password updated successfully.');
                    navigate("/login")
                }

            })
            .catch(error => {
                // console.log("Error Occured: ", error.response.data)
                toast.error(error.response.data.error)
            })

    }
    return (
        <div className=' container my-4'>
            <div className=' col-lg-4 col-md-6 mx-auto'>

                <div className=' d-flex flex-column align-items-center'>
                    <MdOutlineLockReset className='signup_person'></MdOutlineLockReset>

                    <h2 className=' text-center fs-3'>Password forget</h2>
                </div>
                <p className='text-center my-2 text-red-600'>{errorMessage}</p>
                {
                    name && <p className='text-center my-2 text-main'>{name}</p>
                }
                {
                    otpAccess && <p className='text-center my-2 text-main'>OTP: {otpAccess}</p>
                }
                <form onSubmit={handleOTPSend}>
                    <TextField label="Unique ID" name="unique_id" id="unique_id" type="text" margin="normal" fullWidth required />
                    <TextField label="Birth Year" name="year" id="year" type="text" margin="normal" fullWidth required />
                    <div className='text-center'>
                        <button className=' btn btn-primary btn-sm '>Verify</button>
                    </div>
                </form>
                {
                    verifyOTP && <div className='text-center my-4'>
                        <button style={{ textTransform: 'none' }} ><span className='text-xl'><span className='text-orange-400 text-2xl'>{formatTime(timeLeft)}</span> Before put your OTP</span></button>
                        <TextField label="OTP add" name="otp_id" id="otp_id" type="text" margin="normal" fullWidth required value={otpValue} onChange={handleOtpChange} />
                        <div className='flex justify-between items-center'>
                            <button onClick={handleResetCountTime} className=' btn btn-primary btn-sm '>resend</button>
                            <button onClick={handleOTPVerify} className=' btn btn-primary btn-sm '>submit</button>
                        </div>
                    </div>
                }
                {OTPVerified &&
                    <form onSubmit={handleForgetPassword}>
                        <TextField label="Password" name="password" id="password" type="password" margin="normal" disabled={false} required fullWidth />
                        <TextField label="Retype Password" name="confirm_password" id="confirm_password" type="password" margin="normal" disabled={false} required fullWidth />
                        <div className='text-center'>
                            <button className=' btn btn-primary btn-sm '>submit</button>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};

export default ForgetPassword;