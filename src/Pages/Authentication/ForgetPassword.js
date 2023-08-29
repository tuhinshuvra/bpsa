import { TextField } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdOutlineLockReset } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const ForgetPassword = () => {
    useTitle("ForgetPassword");

    const [unique, setUnique] = useState("");
    const [verifyOTP, setVerifyOTP] = useState(false);
    const [otpValue, setOtpValue] = useState('');
    const [OTPVerified, setOTPVerified] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

    const navigate = useNavigate();

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
        fetch(`https://dev.bpsa.com.bd/api/verify?PIMS_ID=${unique}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.value === 3) {
                    toast.success("Unique ID Verified Successfully!");

                    setUnique(form.unique_id.value);

                    setVerifyOTP(true);
                    startCountdown();
                    form.reset();
                }
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    const handleResetCountTime = () => {
        startCountdown();
    }
    const handleOtpChange = (event) => {
        setOtpValue(event.target.value);
    };
    const handleOTPVerify = () => {
        if (otpValue == 222222) {
            setOTPVerified(true);
            setVerifyOTP(false);
        }
        else {
            toast.error("OTP not match");
        }
    }
    const handleForgetPassword = (e) => {
        e.preventDefault();
        const form = e.target;
        const password = form.password.value;
        const confirm_password = form.confirm_password.value;

        if (password !== confirm_password) {
            toast.error("Password are not match");
            return;
        }
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        const isPasswordValid = passwordPattern.test(password);
        if (!isPasswordValid) {
            toast.error("password combination must be lowercase, uppercase ,number ,special character. password total numbers must me eight");
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
                // console.log('Reseted Password Data : ', data);
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
                    <h2 className=' text-center fs-3'>Password Reset</h2>
                </div>
                <form onSubmit={handleOTPSend}>
                    <TextField label="Unique ID" name="unique_id" id="unique_id" type="text" margin="normal" fullWidth required />
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