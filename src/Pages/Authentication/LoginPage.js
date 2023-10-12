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
import { useRef } from 'react';
import Loader from '../../Components/Common/Loader';
import "./Login.css";

const LoginPage = () => {
  useTitle("Login");
  const { user, setUser, userDetails, setUserDetails, token, setToken, loading, setLoading } = useContext(AllContext);
  const [loginData, setLoginData] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [resetPassword, setResetPassword] = useState(false);


  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // setLoading(true);
    axios({
      method: "POST",
      url: `https://dev.bpsa.com.bd/api/login`,
      data: { email, password },
    })
      .then((response) => {
        console.log("Signin Access: ", response.data.token);
        navigate(location?.state?.from || "/", { replace: true });
        setErrorMessage("");
        authenticate(response.data, () => {
          setUser(isAuth());
          if (response.status === 201) {
            console.log('BPSA Member Successfully Logged In');
          }
          // console.log("Logged in UserName:", response.data.user.name)
          navigate("/memberProfile", { replace: true });
          // console.log("cookie local save ", isAuth());
          // window.location.reload();
        });
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessage(error.response.data.error || "An error occurred");
        console.log("SIGN IN ERROR", error.response.data.msg);
        setErrorMessage(error.response.data.msg)

      });
  };

  if (loading) {
    return <Loader></Loader>
  }

  return (
    <div className=' container '>
      <div className='col-xl-4 col-lg-6 col-md-8 mx-auto loginPage'>
        <div className=' d-flex flex-column align-items-center'>
          <FaLock className='signup_person'></FaLock>
          <h2 className=' text-center fs-3'>Log in</h2>
        </div>

        <h5 className=' text-danger fw-bold  text-center'>{errorMessage}</h5>


        <form onSubmit={handleLogin}>
          <TextField
            inputRef={emailRef}
            label="User Name"
            name="email"
            id="email"
            type="text"
            margin="normal"
            required
            fullWidth
            autoFocus={false} // Set to false to prevent autofocus
          />

          <TextField
            inputRef={passwordRef}
            label="Password"
            name="password"
            id="password"
            type="password"
            margin="normal"
            required
            fullWidth
            autoFocus={true} // Set to true to autofocus on this field
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                handleLogin(event);
              }
            }}
          />


          <button type='submit' className=' w-full btn btn-outline-secondary  my-2'>Sign in</button>

          <div className=' d-flex flex-md-row  flex-column justify-content-md-between text-md-start text-center  my-2'>

            <Link className=' small' to="/forgotpassword" variant="body2" disabled={!resetPassword}>
              Forgot password?
            </Link>

            <div className='d-flex small  align-items-baseline mx-md-0  mx-auto'>
              <p className=' text-secondary'>Don't have an account?</p>
              <Link className=' ms-1' to="/signup" variant="body2">
                Sign Up
              </Link>
            </div>
          </div>
        </form>


      </div>
    </div>
  );
};

export default LoginPage;