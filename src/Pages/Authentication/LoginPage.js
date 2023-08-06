import { TextField } from '@mui/material';
import React, { useContext } from 'react';
import { FaLock } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import { useState } from 'react';
import axios from 'axios';
import { authenticate, isAuth } from '../../utlis/helper';
import { AllContext } from '../../hooks/ContextData';
import { toast } from 'react-hot-toast';
import "./Login.css";

const LoginPage = () => {
  useTitle("Login");
  const { user, setUser, userDetails, setUserDetails, isLoading, setIsLoading, authError, setAuthError, authSuccess, setAuthSuccess } = useContext(AllContext);
  const [loginData, setLoginData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordAllert, setPasswordAllert] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnBlur = (event) => {
    const field = event.target.name;
    const value = event.target.value;

    const newLoginData = { ...loginData }
    newLoginData[field] = value;
    setLoginData(newLoginData);
  }

  const handleLogin = (event) => {
    event.preventDefault();

    const { email, password } = loginData;

    console.log("loginData : ", loginData);


    //password validation by some condition
    if (password === undefined || email === undefined) {
      setErrorMessage("please fill the form");
    } else if (password.length < 8) {
      setPasswordAllert("Password must be minimum 8 characters");
    } else if (password.length > 8) {
      setPasswordAllert("");
    }

    axios({
      method: "POST",
      url: `serveradddress/api/signin`,
      data: { email, password },
    })
      .then((response) => {
        console.log("Signin Access: ", response);
        navigate(location?.state?.from || "/", { replace: true });
        setErrorMessage("");
        authenticate(response.data, () => {
          setUser(isAuth());
          if (user.email) {
            toast.success('The User Successfully Logged In')
          }
          setIsLoading(false);
          navigate("/", { replace: true });
          console.log("cookie local save ", isAuth());
        });
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error);
        console.log("SIGN IN ERROR", error.response.data);
      });


  }

  return (
    <div className=' container my-4'>
      <div className=' col-lg-4 col-md-6 mx-auto'>
        <div className=' d-flex flex-column align-items-center'>
          <FaLock className='signup_person'></FaLock>
          <h2 className=' text-center fs-3'>Log in</h2>
        </div>


        <form onSubmit={handleLogin}>
          <TextField
            onBlur={handleOnBlur}
            label="User name"
            name="user_name"
            id="user_name"
            type="text"
            margin="normal"
            required
            fullWidth
          />

          <TextField
            onBlur={handleOnBlur}
            label="Password"
            name="password"
            id="password"
            type="password"
            margin="normal"
            required
            fullWidth
          />

          <button className=' w-full btn btn-primary my-2'>Sign in</button>


          <div className=' d-flex justify-content-between my-2'>

            <Link to="/forgotpassword" variant="body2">
              Forgot password?
            </Link>

            <Link to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </div>
        </form>


      </div>
    </div>
  );
};

export default LoginPage;