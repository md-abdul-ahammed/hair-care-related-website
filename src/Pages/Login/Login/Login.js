import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import { BsGoogle } from "react-icons/bs";
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../Images/logo.png'

const Login = () => {
    const { signInUsingGoogle, setUser, handleLogin, handleEmailChange, handlePasswordChange, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
                setUser(result.user)
            }).catch((error) => {

            })
    }
    return (
        <div className='d-flex justify-content-around res-flex-column container align-items-center pt-5'>
            <form className='mt-5 mb-3' onSubmit={handleLogin}>
                <img className='logo2-fluid mb-3' src={logo} alt="" />
                <input onBlur={handleEmailChange} className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' required placeholder='Email' type="email" />
                <input onBlur={handlePasswordChange} className='simple-border focus-input primary-input py-3 px-4 d-block mb-3' required placeholder='Password' type="password" />
                <input type='submit' value='Login' className='primary-input py-3 px-3 d-block mb-3 default-btn-regular rounded-pill text-white' />
                <p className='text-danger ms-3'>{error}</p>
                <p>Are you New Member? Please, <Link className='fw-bold default-text-color' to='/register'>Create an account</Link></p>
            </form>
            <div>
                <h1 className='text-center'>Or, Login With</h1>
                <button onClick={handleGoogleLogin} className='primary-input py-2 px-1 rounded-pill d-block mb-3 bg-danger border-none text-white border-0'><span className='fs-5'><BsGoogle /></span> Login With Google</button>
            </div>
        </div>
    );
};

export default Login;