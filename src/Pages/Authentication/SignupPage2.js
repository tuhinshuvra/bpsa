import { TextField } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import './Login.css';
import { Toast } from 'bootstrap';
import axios from 'axios';

const SignupPage = () => {
    useTitle("SignUp");
    const [enableOtp, setEnableOtp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [remainingTime, setRemainingTime] = useState(5 * 60);
    const [userFullName, setUserFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [otpData, setOtpData] = useState('');
    const [userEnteredOTP, setUserEnteredOTP] = useState('');
    const [unique_id, setUniqueId] = useState("");
    const [name, setName] = useState("");
    const [year, setYear] = useState("");
    const [OTPCheckOne, setOTPCheckOne] = useState(false);
    const [timeLeft, setTimeLeft] = useState(0);
    const [isCounting, setIsCounting] = useState(false);

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
        console.log(accessToken);
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

    const formatTime = (seconds) => {
        //   console.log(seconds)
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const navigate = useNavigate();



    // this function is used to veriry unique id
    const handleVerifyUniqueId = (event) => {
        event.preventDefault();
        setErrorMessage("");
        const form = event.target;
        // if (!form) {
        //     console.error("Form element not found");
        //     return;
        // }
        const unique_id = form?.unique_id?.value;
        const birth_year = form?.birth_year?.value;

        fetch(`https://pims.police.gov.bd:8443/pimslive/webpims/asp-info/sign-up/${unique_id}/${birth_year}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.items[0]) {
                    setUser(result.items[0])
                    axios.get(`https://dev.bpsa.com.bd/api/verify?PIMS_ID=${unique_id}`)
                        .then(loggedUser => {
                            console.log(loggedUser.data);
                        })
                }
                else {
                    setErrorMessage("BPSA Id not valid")
                }
            })


        fetch(`https://dev.bpsa.com.bd/api/verify?PIMS_ID=${unique_id}&birth=${birth_year}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {

                console.log("Verify unique Id", data);
                if (data.value === 1) {
                    // toast.success("OTP Sent Successfully. Please check your phone for OTP.");
                    toast.success("Unique ID Verified Successfully!");
                    console.log(data);
                    setEnableOtp(true);
                    form.reset();
                    setUniqueId(unique_id);
                    setYear(birth_year);
                    setName(data.name);
                    setOTPCheckOne(true);
                    startCountdown();
                    setOtpData(data.otp)
                    setUserFullName(data.name)
                    setPhone(data.phone)
                }
                else if (data.value === 2) {
                    console.log(data);
                    console.log(data.message);
                    setErrorMessage("User ID verification failed");
                    // toast.error('User ID verification failed');
                }
                else if (data.value === 3) {
                    console.log(data);
                    console.log(data.message);
                    setErrorMessage("User ID already registered");
                    // toast.error('User ID already registered');
                }
                else {
                    // toast.error("Something error, Please try again later.");
                    setErrorMessage("Something error, Please try again later.");
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
            setEnableOtp(false);
            setOTPCheckOne(false);
            setErrorMessage("");
            setOtpData("");
        } else {
            console.log('Invalid OTP');
            setErrorMessage("Invalid OTP");
            // toast.success('OTP Verified successfully!');
            // setOTPCheckOne(false);
            // setOtpData("")
            // setEnableOtp(true);
            setEnableOtp(true);
            setOTPCheckOne(true);
        }
    }


    // this function is used to post sign up data
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        // const uniqueId = form.unique_id.value;
        const uniqueId = unique_id;
        const fullName = name;
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

        // fetch(`https://dev.bpsa.com.bd/api/signup`, {
        //     method: "POST",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(userData)
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Registerd User Data : ', data);
        //         if (data) {
        //             form.reset()
        //             toast.success('Congratulation! User created successfully.')
        //         }
        //         navigate("/login");

        //     })
        //     .catch(error => {
        //         console.log("Error Occured: ", error.response.data)
        //         setErrorMessage(error.response.data.error)
        //     })

    }



    const handleResendOTP = (e) => {
        e.preventDefault();
        fetch(`https://dev.bpsa.com.bd/api/verify?PIMS_ID=${unique_id}&birth=${year}`, {
            method: "GET",
            headers: {
                "content-type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                toast.success("OTP resent your mobile")
                setOtpData(data.otp)

                startCountdown();

                setErrorMessage("");

                // After successful OTP verification, set otpVerified to true
                // setOtpVerified(true);
            })
            .catch((error) => {
                console.log("Error Occurred:", error.response.data);
                setErrorMessage(error.response.data.error);
            });

    };


    return (
        <div className=' container my-4'>
            <div className=' col-lg-4 col-md-6 mx-auto'>

                <div className=' d-flex flex-column align-items-center'>
                    <BsPersonCircle className='signup_person'></BsPersonCircle>
                    <h2 className=' text-center fs-3'>Sign up</h2>
                </div>
                <p className=' text-center text-danger fw-bold fs-6'>{errorMessage}</p>
                {/* {!passwordsMatch && (
                    <p className="text-center text-danger fw-bold fs-6">Passwords do not match.</p>
                )} */}

                {/* {verifyMessage && (
                    <p className="text-center text-danger fw-bold fs-6">Unique ID verified Successfully!</p>
                )} */}


                {/* {passwordValid ? <></> :
                    <><p className=' text-warning'>Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, and a numeric number.</p></>
                } */}

                {/* handle unique id verification  form*/}
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
                    {/* <div className=' text-center'>
                        <button type='submit' className=' btn btn-primary btn-sm '>Resend</button>
                    </div> */}

                </form>
                }

                {/* handle otp verification form */}
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



                    {/* <p className=' text-center text-danger fw-bold fs-6'>{errorMessage}</p> */}

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