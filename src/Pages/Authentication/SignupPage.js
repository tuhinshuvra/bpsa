import React from 'react';
import './Login.css';
import { TextField } from '@mui/material';

const SignupPage = () => {
    return (
        <div className=' container my-4'>
            <div className=' col-lg-4 col-md-6 mx-auto'>

                <h2 className=' text-center fs-3'>Signup</h2>
                <form>
                    <div className="mb-3">
                        <label for="full_name" className="form-label">Full Name</label>
                        <input type="text" name='full_name' className="form-control" id="full_name" placeholder='Enter full name' autoFocus required />
                    </div>

                    <div className="mb-3">
                        <label for="birth_date" className="form-label">Birth Date</label>
                        <input type="date" name='birth_date' className="form-control" id="birth_date" required />
                    </div>

                    <div className="mb-3">
                        <label for="unique_id" className="form-label">Unique ID</label>
                        <input type="text" name='birth_date' className="form-control" id="unique_id" placeholder='Enter unique id' required />
                    </div>

                    <div className=' text-center'>
                        <button className=' btn btn-primary btn-sm '>Verify</button>
                    </div>

                    <div className="mb-3">
                        <label for="otp" className="form-label">OTP</label>
                        <input type="text" name='otp' className="form-control" id="otp" placeholder='Enter OTP' required />
                    </div>


                    <div className="mb-3">
                        <label for="user_name" className="form-label">User name</label>
                        <input type="text" className="form-control" id="user_name" required />
                    </div>

                    <div className="mb-3">
                        <label for="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" placeholder='Enter password' required />
                    </div>

                    <div className="mb-3">
                        <label for="confirm_password" className="form-label">Retype Password</label>
                        <input type="password" className="form-control" id="confirm_password" placeholder='Retype password' required />
                    </div>

                    <div className=' d-flex justify-between'>
                        <button type="reset" className="btn btn-warning btn-sm">Reset</button>
                        <button type="submit" className="btn btn-primary btn-sm">Submit</button>
                    </div>
                </form>


            </div>
        </div>
    );
};

export default SignupPage;