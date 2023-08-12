import { TextField } from '@mui/material';
import { BsPersonCircle } from 'react-icons/bs';
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Login.css';

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

        const unique_id = form.unique_id.value;
        // console.log("unique_id : ", unique_id);

        fetch(`https://dev.bpsa.com.bd/api/verify?PIMS_ID=${unique_id}`, {
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
    // const handleOtpTyping = (event) => {
    //     const otp = event.target.value;

    //     const otpData = {
    //         otp: otp,
    //     };

    //     fetch(`serverAddress/api/verify-otp`, {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //         },
    //         body: JSON.stringify(otpData),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log("OTP Verification Data :", data);
    //             if (data.verified) {
    //                 toast.success("OTP Verified Successfully.");
    //                 setOtpVerified(true); 
    //             } else {
    //                 toast.error("OTP Verification Failed. Please try again.");
    //                 setOtpVerified(false); 
    //             }
    //         })
    //         .catch((error) => {
    //             console.log("Error Occurred during OTP Verification: ", error);
    //             toast.error("Error occurred during OTP verification. Please try again later.");
    //             setOtpVerified(false);
    //         });
    // };


    //password validation by some condition
    //    if (password === undefined || email === undefined) {
    //     setErrorMessage("please fill the form");
    //   } else if (password.length < 8) {
    //     setPasswordAllert("Password must be minimum 8 characters");
    //   } else if (password.length > 8) {
    //     setPasswordAllert("");
    //   }



    // this function is used to post sign up data
    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const uniqueId = form.unique_id.value;
        const fullName = form.full_name.value;
        const email = form.user_name.value;
        const password = form.password.value;
        const confirmPassword = form.confirm_password.value;

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

                <form onSubmit={handleOnSubmit}>
                    <TextField
                        label="Unique ID"
                        name="unique_id"
                        id="unique_id"
                        type="text"
                        margin="normal"

                        fullWidth
                    />


                    {/* <TextField
                        label="Birth Date"
                        name="birth_date"
                        id="birth_date"
                        type="date"
                        margin="normal"

                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /> */}

                    <div onClick={() => setEnableOtp(true)} className=' text-center'>
                        <button onClick={handleVerifyUniqueId} className=' btn btn-primary btn-sm '>Verify</button>
                    </div>

                    {/* {enableOtp ?
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
                    } */}

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