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
import "./Login.css";
import Loader from '../../Components/Common/Loader';

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
          console.log("cookie local save ", isAuth());
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
    <div className=' container my-4'>
      <div className=' col-lg-4 col-md-6 mx-auto'>
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


          <button type='submit' className=' w-full btn btn-primary my-2'>Sign in</button>

          <div className=' d-flex justify-content-between my-2'>

            <Link to="/forgotpassword" variant="body2" disabled={!resetPassword}>
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