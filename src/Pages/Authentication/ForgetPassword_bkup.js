import { TextField } from '@mui/material';
import { MdOutlineLockReset } from "react-icons/md";
import useTitle from '../../hooks/useTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import './Login.css';

const ForgetPassword_bkup = () => {
    useTitle("passwordReset");

    const [enableOtp, setEnableOtp] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [otpVerified, setOtpVerified] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [unique, setUnique] = useState("");
    const [toggle, setToggle] = useState(false);
    const [otpData, setOtpData] = useState('');

    const checkPasswordMatch = (password, retypePassword) => {
        return password === retypePassword;
    };

    const navigate = useNavigate();


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
                console.log(data.value)
                if (data.value === 1 || data.value === 3) {
                    setUnique(unique_id);
                    setOtpData(data.value);
                    console.log(data)
                    // toast.success("OTP Sent Successfully. Please check your phone for OTP.");
                    toast.success("Unique ID Verified Successfully!");
                    form.reset();
                    setOtpVerified(true);
                }
                else {
                    // console.log(data.value);
                    toast.error("Unique ID Verification Failed!");
                }


                // After successful OTP verification, set otpVerified to true
                // setOtpVerified(true);
            })
            .catch((error) => {
                // console.log("Error Occurred:", error.response.data);
                setErrorMessage(error.response.data.error);
            });
    };


    const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const password = form.password.value;
        const retypePassword = form.confirm_password.value;

        if (!checkPasswordMatch(password, retypePassword)) {
            setPasswordsMatch(false);
            toast.error("Password are not match");
            return;
        }

        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/
        // /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        const isPasswordValid = passwordPattern.test(password);

        if (!isPasswordValid) {
            toast.error("password combination must be lowercase, uppercase and number. password total numbers must me eight");
            setPasswordValid(false);
            return;
        }

        const userData = {
            Newpassword: password,
            uniqueId: unique
        }
        // console.log("userData : ", userData);

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
                setErrorMessage(error.response.data.error)
            })
    }


    return (
        <div className=' container my-4'>
            <div className=' col-lg-4 col-md-6 mx-auto'>

                <div className=' d-flex flex-column align-items-center'>
                    <MdOutlineLockReset className='signup_person'></MdOutlineLockReset>
                    <h2 className=' text-center fs-3'>Password Reset</h2>
                </div>

                {!passwordsMatch && (
                    <p className="text-center text-danger fw-bold fs-6">Passwords do not match.</p>
                )}

                {passwordValid ? <></> :
                    <><p className=' text-warning'>Password must be at least 8 characters and contain an uppercase letter, a lowercase letter, and a special character.</p></>
                }

                <form onSubmit={handleOnSubmit}>
                    <TextField label="Unique ID" name="unique_id" id="unique_id" type="text" margin="normal" fullWidth />

                    <div onClick={() => setEnableOtp(true)} className=' text-center'>
                        <button onClick={handleVerifyUniqueId} className=' btn btn-primary btn-sm '>Verify</button>
                    </div>

                    {
                        otpData && <div>
                            <TextField label="set otp" name="otpMatch" id="otpMatch" type="text" margin="normal" fullWidth /><br />

                        </div>
                    }

                    {otpVerified ?
                        <>
                            <TextField label="Password" name="password" id="password" type="password" margin="normal" disabled={false} required fullWidth />
                            <TextField label="Retype Password" name="confirm_password" id="confirm_password" type="password" margin="normal" disabled={false} required fullWidth />
                        </>
                        :
                        <>
                            <TextField label="Password" name="password" id="password" type="password" margin="normal" disabled={true} required fullWidth />
                            <TextField label="Retype Password" name="confirm_password" id="confirm_password" type="password" margin="normal" disabled={true} required fullWidth />
                        </>
                    }


                    <p className=' text-center text-danger fw-bold fs-6'>{errorMessage}</p>

                    <div className=' d-flex justify-between mt-3'>
                        <button type="reset" className="btn btn-warning btn-sm">Reset</button>
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </div>

                    {/* <p className=' text-center my-2'>Already have an account? go to<Link to="/login" className=' ms-1'>Login</Link> </p> */}
                </form>
            </div>
        </div>
    );
};

export default ForgetPassword_bkup;