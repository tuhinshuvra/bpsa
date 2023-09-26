import { TextField } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Toast } from 'bootstrap';
import axios from 'axios';
import './Login.css';


const SignupPage = () => {
    useTitle("sign up");
    const [enableOtp, setEnableOtp] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [userEnteredOTP, setUserEnteredOTP] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [otpData, setOtpData] = useState('');
    const [timeLeft, setTimeLeft] = useState(0);
    const [OTPCheckOne, setOTPCheckOne] = useState(false);
    const [userFullName, setUserFullName] = useState('');
    const [unique_id, setUnique_id] = useState('');
    const [isCounting, setIsCounting] = useState(false);
    const [passwordValid, setPasswordValid] = useState(true);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const navigate = useNavigate();

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

    if (accessToken) {
        console.log(accessToken)
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
                    setOtpVerified(false);
                    setOTPCheckOne(false)
                    setOtpData("");
                    console.log('Countdown has reached zero.');
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

    const handleVerifyUniqueId = (e) => {
        e.preventDefault();
        const form = e.target;
        axios.get(`https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/sign-up/${form.unique_id.value}/${form.birth_year.value}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        },)
            .then(result => {
                if (result.data.items.length > 0) {
                    // toast.success("user verified successfully");
                    axios.get(`https://dev.bpsa.com.bd/api/forgetpass?PIMS_ID=${form.unique_id.value}`)
                        .then(verifyUser => {
                            if (verifyUser.data.value == 1) {
                                toast.error("user already registered")
                            }
                            else if (verifyUser.data.value == 2) {

                                axios.get(`https://dev.bpsa.com.bd/api/verify?mobile=0 1711-082532`)
                                    .then(resOTP => {
                                        console.log();
                                        setOtpData(resOTP.data.otp)
                                    })

                                startCountdown();
                                setEnableOtp(true);
                                setOTPCheckOne(true)
                                setUnique_id(form.unique_id.value);
                                setUserFullName(result.data.items[0].name)
                                setUser(result.data.items[0]);
                                setErrorMessage("")
                            }
                        })
                }
                else {
                    setErrorMessage("PMIS id and birth year not match")
                }
            })
    }

    const handleVerifyOTP = (e) => {
        e.preventDefault();
        if (userEnteredOTP != otpData) {
            setErrorMessage("Otp not match")
            return;
        }
        setErrorMessage("");
        setOtpVerified(true);
        setEnableOtp(false);
        setOTPCheckOne(false);
    }

    const formatTime = (seconds) => {
        //   console.log(seconds)
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleResendOTP = (e) => {
        e.preventDefault();
        // axios.get(`https://dev.bpsa.com.bd/api/verify?mobile=01725601944`)
        // .then(resOTP=>{
        //     console.log();
        //     setOtpData(resOTP.data.otp)
        // })
        startCountdown();
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const uniqueId = unique_id;
        const fullName = userFullName;
        const email = form.user_name.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;
        if (password !== confirmPassword) {
            setErrorMessage("password are not match")
            setPasswordsMatch(false);
            return;
        }
        else {
            setErrorMessage("")
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

        const isPasswordValid = passwordPattern.test(password);

        if (!isPasswordValid) {
            setPasswordValid(false);
            setErrorMessage("password combination must be lowercase, uppercase and number. password total numbers must me eight");
            return;
        }

        const userData = {
            name: fullName,
            UniqueID: uniqueId,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
        }
        console.log("userData : ", userData);

        axios.post("https://dev.bpsa.com.bd/api/signup", userData)
            .then(result => {
                console.log(result);
                if (result.status == 201) {
                    form.reset()
                    toast.success('Congratulation! User created successfully.');
                    navigate("/login");
                }
                else {
                    setErrorMessage("something is wrong please sign up again")
                }
            })
            .catch(err => {
                if (err.message == 'Request failed with status code 422') {
                    setErrorMessage("user Name already another person have used Pleased change userName");
                }
                else {
                    setErrorMessage("something is wrong. Please check your net connection and other issues")
                }
            })
    }
    return (
        <div className=' container my-4'>
            <div className=' col-lg-4 col-md-6 mx-auto'>

                <div className=' d-flex flex-column align-items-center'>
                    <BsPersonCircle className='signup_person'></BsPersonCircle>
                    <h2 className=' text-center fs-3'>Sign up</h2>
                </div>
                <p className=' text-center text-danger fw-bold fs-6'>{errorMessage}</p>
                {!otpData && !otpVerified && <form onSubmit={handleVerifyUniqueId}>
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
                }
                <form>

                    <div className=' d-flex   align-items-baseline  '>
                        {/* <button className='btn btn-primary btn-sm'>Counter</button> */}
                        {otpData && enableOtp &&
                            <>
                                <div className=' d-flex justify-content-center align-items-center  '>
                                    <button className='btn btn-primary '>{formatTime(timeLeft)}</button>
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
                    {
                        OTPCheckOne && enableOtp && <div className='text-center my-3'>
                            {
                                <button onClick={(e) => handleResendOTP(e)} className='btn btn-primary'>Resent OTP</button>
                            }
                        </div>
                    }
                </form>

                {/* new user creation form */}
                <form onSubmit={handleOnSubmit}>
                    {otpVerified &&
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
                            <div className=' d-flex justify-between mt-3'>
                                <button type="reset" className="btn btn-warning btn-sm">Reset</button>
                                <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                            </div>
                        </>
                    }
                    <p className=' text-center my-2'>Already have an account? go to<Link to="/login" className=' ms-1'>Login</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;